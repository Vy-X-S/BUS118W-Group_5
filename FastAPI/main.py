from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated, List
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
import models
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
   'http://localhost:3000'
]

app.add_middleware(
   CORSMiddleware,
   allow_origins=origins,
)

# Pydantic Model for Category creation
class ProductCreate(BaseModel):
   product_name: str
   inventory_count: int
   description: str
   price: float
   category_id: int
   subcategory_id: int
   # Include nutrition directly
   serve_size: str # eg. 2 tbsp (30g)
   calories: int
   protein: float # in grams (g)
   sodium: float # in miligrams (g)
   fiber: float # in grams (g)
   sugar: float # in grams (g)
class CategoryCreate(BaseModel):
   category_name: str
class SubCategoryCreate(BaseModel):
   sb_category_name: str
   category_id: int # foreign key
class ProductImageCreate(BaseModel):
   image_URL: str # Use from Amazon/Wholefoods
   image_sequence: int # Meta images, 0 is main

# Pydantic model for reading Category data
class ProductModel(BaseModel):
   product_id: int
   product_name: str
   inventory_count: int
   description: str
   price: float
   category_id: int
   subcategory_id: int

   class Config:
      orm_mode = True
class CategoryModel(BaseModel):
   category_id: int
   category_name: str

   class Config:
      orm_mode = True
class SubCategoryModel(BaseModel):
   sb_category_id: int
   category_id: int
   sb_category_name: str

   class Config:
      orm_mode = True
class NutritionModel(BaseModel):
   nutrition_id: int
   serve_size: str # eg. 2 tbsp (30g)
   calories: int
   protein: float # in grams (g)
   sodium: float # in miligrams (g)
   fiber: float # in grams (g)
   sugar: float # in grams (g)

   class Config:
      orm_mode = True
class ProductImageModel(BaseModel):
   image_id: int
   product_id: int
   image_URL: str
   image_sequence: int

   class Config:
      orm_mode = True

def get_db():
   db = SessionLocal()
   try:
      yield db
   finally:
      db.close()

db_dependency = Annotated[Session, Depends(get_db)]

#models.Base.metadata.drop_all(bind=engine)
models.Base.metadata.create_all(bind=engine)

@app.get("/products/", response_model=List[ProductModel])
async def read_products(db: db_dependency, skip: int = 0, limit: int = 100):
   products = db.query(models.Product).offset(skip).limit(limit).all()
   return products

@app.post("/products/", response_model=ProductModel)
async def create_product(product: ProductCreate, db: Session = Depends(get_db)):
   db_product = models.Product(
      product_name=product.product_name,
      inventory_count=product.inventory_count,
      description=product.description,
      price=product.price,
      category_id=product.category_id,
      subcategory_id=product.subcategory_id
   )
   db.add(db_product)
   db.commit()

   # Create the nutrition label for the product
   db_nutrition = models.Nutrition(
      product_id=db_product.product_id,
      serve_size=product.serve_size,
      calories=product.calories,
      protein=product.protein,
      sodium=product.sodium,
      fiber=product.fiber,
      sugar=product.sugar
   )
   db.add(db_nutrition)
   db.commit()
   db.refresh(db_product)

   return db_product

@app.get("/categories/", response_model=List[CategoryModel])
async def read_categories(db: db_dependency, skip: int = 0, limit: int = 100):
   categories = db.query(models.Category).offset(skip).limit(limit).all()
   return categories

@app.post("/categories/", response_model=CategoryModel)
async def create_category(category: CategoryCreate, db: db_dependency):
   db_category = models.Category(category_name = category.category_name)
   db.add(db_category)
   db.commit()
   db.refresh(db_category)
   return db_category

@app.get("/subcategories/", response_model=List[SubCategoryModel])
async def read_subcategories(db: db_dependency, skip: int = 0, limit: int = 100):
   subcategories = db.query(models.SubCategory).offset(skip).limit(limit).all()
   return subcategories

@app.post("/subcategories/", response_model=SubCategoryModel)
async def create_subcategory(subcategory: SubCategoryCreate, db: Session = Depends(get_db)):
   # Check if the category exists
   db_category = db.query(models.Category).filter(models.Category.category_id == subcategory.category_id).first()
   if not db_category:
      raise HTTPException(status_code=404, detail=f"Category with id {subcategory.category_id} not found")
   
   # Create new SubCategory
   db_subcategory = models.SubCategory(
      sb_category_name = subcategory.sb_category_name,
      category_id = subcategory.category_id
   )
   db.add(db_subcategory)
   db.commit()
   db.refresh(db_subcategory)
   return db_subcategory

@app.get("/nutrition/", response_model=List[NutritionModel])
async def read_nutrition(db: db_dependency, skip: int = 0, limit: int = 100):
   nutrition_labels = db.query(models.Nutrition).offset(skip).limit(limit).all()
   return nutrition_labels

"""@app.post("/nutrition/", response_model=NutritionModel)
async def create_nutrition(nutrition: NutritionCreate, db: Session = Depends(get_db)):
   # Check if the Product exists
   db_product = db.query(models.Product).filter(models.Product.product_id == nutrition.product_id).first()
   if not db_product:
      raise HTTPException(status_code=404, detail=f"Product with id {nutrition.product_id} not found")
   
   # Create new Nutrition Label
   db_nutrition = models.Nutrition(
      product_id = nutrition.product_id,
      serve_size = nutrition.serve_size,
      calories = nutrition.calories,
      protein = nutrition.protein,
      sodium = nutrition.sodium,
      fiber = nutrition.fiber,
      sugar = nutrition.sugar
   )
   db.add(db_nutrition)
   db.commit()
   db.refresh(db_nutrition)
   return db_nutrition"""

@app.post("/products/{product_id}/images/", response_model=ProductImageModel)
def create_product_image(product_id: int, image: ProductImageCreate, db: Session = Depends(get_db)):
    # First, check if the product exists
    db_product = db.query(models.Product).filter(models.Product.product_id == product_id).first()
    if not db_product:
        raise HTTPException(status_code=404, detail=f"Product with id {product_id} not found")

    # Now create the new ProductImage
    db_image = models.ProductImage(
        product_id=product_id,
        image_type=image.image_type,
        image_URL=image.image_URL,
        image_sequence=image.image_sequence
    )
    db.add(db_image)
    db.commit()
    db.refresh(db_image)
    return db_image

@app.get("/")
def read_root():
    return {"message": "Welcome to the Grocery Store API!"}
