import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-sm-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="home-sm-image"
      />
    </div>
    <div className="home-lg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-lg-image"
      />
    </div>
  </>
)
export default Home
