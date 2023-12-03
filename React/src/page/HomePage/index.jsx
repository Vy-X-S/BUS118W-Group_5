import { memo } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import "./Home_Page.css"


const HomePage = memo(()=>{
  return (
    <div>
      <Header />

      {/*CONTENT GOES HERE, temp for box*/}
      <div className="content-wrapper">
      </div>

      <Footer />
    </div>
  )
})

export default HomePage