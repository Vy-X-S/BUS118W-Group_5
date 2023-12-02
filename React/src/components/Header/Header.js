import { useState, useEffect } from "react";
import './Header.css';
import {Link} from "react-router-dom";


const Header = () => {
    const [isHovered, setIsHovered] = useState(null);
    const foodCategories = ['Meat', 'Seafood', 'Vegetables'];
    const [ cartCount, setCartCount ] = useState(0);

    useEffect(() => {
        // Function to calculate Cart items
        const calculateCartCount = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            setCartCount(count);
        };

        // Initialize cart count
        calculateCartCount();

        // Event listener for cart updates
        const handleCartUpdate = () => calculateCartCount();
        window.addEventListener('cartUpdated', handleCartUpdate);

        // Cleanup
        return () => window.removeEventListener('cartUpdated', handleCartUpdate);
    }, []);

    const renderSubCategories = (categories) => {
        return categories ? (
            <div className='subcategories'>
                {categories.map((cat, idx) => (
                    <Link key={idx} to={`/${cat.toLowerCase()}`}>{cat}</Link>
                ))}
            </div>
        ) : null;
    };    

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
                    <Link to="/home"><h1>The Grocery Co.</h1></Link>
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

                    <Link to="/cart">
                    <div className='cart-section'>
                        🛒 {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
                    </div>
                    </Link>
                </div>

                
            </div>

            <nav>
                <div
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={()=> handleMouseLeave()}
                >
                    <ul>
                        <li><Link to="/product">All</Link></li>
                        <li>Weekly Deals</li>
                        <li>Food</li>
                    </ul>
                    {isHovered === 'food' && renderSubCategories(foodCategories)}
                </div>
            </nav>
        </header>
    );
}

export default Header;
