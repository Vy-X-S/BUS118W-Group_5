import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import "./Home_Page.css"

const Box = ({ size, content }) => {
  return <div className={`box ${size}`}>{content}</div>
};  

// Finish Home Page
const HomePage = ()=>{

  const imagePath = require('../../images/home.png');

  return (
    <div>
      <Header />

      <div className='splash-container'>
        <img src={imagePath} />
      </div>

      <Footer />
    </div>
  )
}

export default HomePage