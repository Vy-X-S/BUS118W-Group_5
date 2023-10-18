// Header.js
import { useState } from "react";
import './Header.css';

const Header = () => {
    const [isHovered, setIsHovered] = useState(null);
    const foodCategories = ['Meat', 'Seafood', 'Vegetables'];

    const renderSubCategories = (categories) => {
        if (!categories) return null;

        return (
            <div className='subcategories'>
                {categories.map((cat, idx) => (
                    <a key={idx} href={`/${cat.toLowerCase()}`}>{cat}</a>
                ))}
            </div>
        );
    }

    const [hideTimeout, setHideTimeout] = useState(null);

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsHovered(null);
        }, 300); // 300ms delay
        setHideTimeout(timeout);
    }

    const handleMouseEnter = () => {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            setHideTimeout(null);
        }
        setIsHovered('food');
    }


    return (
        <header className='header'>
            <div className="top-section">
                <div className='logo-section'>
                    {/*<img src='' alt='The Grocery Co.'/>*/}
                    <h1>The Grocery Co.</h1>
                </div>

                <div className='search-section'>
                    <input type='text' placeholder='Search' />
                    <button>🔍</button>
                </div>
                
                <div className="top-right">
                    <div className='location-section'>
                        <div className='location-icon'>
                            📍
                        </div>
                        <div className='location-text'>
                            <span>Shopping at San Jose 95133</span>
                            <p>Choose Shopping Location</p>
                        </div>
                    </div>

                    <div className='cart-section'>
                    🛒
                    </div>
                </div>

                
            </div>

            <nav>
                <div
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={()=> handleMouseLeave()}
                >
                    <ul>
                        <li><a href="#">All</a></li>
                        <li><a href="#">Weekly Deals</a></li>
                        <li><a href='#'>Food</a></li>
                    </ul>
                    {isHovered === 'food' && renderSubCategories(foodCategories)}
                </div>
            </nav>
        </header>
    );
}

export default Header;
