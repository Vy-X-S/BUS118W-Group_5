import { memo } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import "./About_Page.css";
import AboutImage from "../../images/fruitbasket.png";

const AboutPage = memo(() => {
    return (
        <div>
            <Header />
            <div className="container">
                <div>
                    <h1 class="aboutheader">About Us</h1>
                </div>
                <div>
                    <img src={AboutImage} alt="AboutImage" class="aboutimage" />
                </div>
                <p class="aboutdescription">At Grocery Co. we're on a mission to revolutionize the way you shop for groceries.
                    We understand that your time is precious, and we're here to make your life easier by bringing the grocery store to your doorstep.📦 </p>
                <h2 class="whoheader">Who Are We</h2>
                <p class="whodescription">Our journey began with a simple idea 💡 - to simplify the grocery shopping experience for busy individuals
                    and families. We were tired of long lines, crowded aisles, and the hassle of juggling bags of groceries. That's why we decided to
                    create an online grocery store that combines the convenience of online shopping with the freshness and quality you expect from your
                    neighborhood supermarket 🥦</p>
                <h2 class="joinheader">Join Us On Our Journey</h2>
                <p class="joindescription">We're excited to have you as part of the Grocery Co. community. Whether you're a busy professional, a parent on the go,
                    or simply someone who values convenience, we're here to make your life easier and your meals more delicious.🥞</p>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <Footer />
        </div>
    )
})
export default AboutPage