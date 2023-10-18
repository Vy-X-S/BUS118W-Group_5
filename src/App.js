import logo from './logo.svg';
import './App.css';
import Header from './Header';
import './Home_Page.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">

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

    </div>

    <Footer />
    </div>
  );
}

export default App;
