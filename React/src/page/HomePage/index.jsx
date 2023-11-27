import { memo } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import "./Home_Page.css"
import { Link } from 'react-router-dom';


const HomePage = memo(()=>{
  return (
    <div>
      <Header />

{/*CONTENT GOES HERE, temp for box*/}
<div className="content-wrapper">

  {/* Optimize later with .map function */}
  <div className="category">
    <a href="#"><h1>Top Deals <span>View All</span></h1></a>
    <div className="items-container">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </div>
  </div>

  <div className="category">
    <a href="#"><h1>What's in Season <span>View All</span></h1></a>
    <div className="items-container">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </div>
  </div>

  <div className="category">
    <a href="#"><h1>Local Market Specials <span>View All</span></h1></a>
    <div className="items-container">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </div>
  </div>

  <div className="category">
    <a href="#"><h1>Featured Items <span>View All</span></h1></a>
    <div className="items-container">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </div>
  </div>

  <div>
    <Link to="/products/1">View Product 1</Link>
    <Link to="/catalog/1">View Category 1</Link>
  </div>

</div>

<Footer />
    </div>
  )
})

export default HomePage