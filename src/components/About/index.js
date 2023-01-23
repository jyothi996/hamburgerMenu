import Header from '../Header'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-sm-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-sm-image"
      />
    </div>
    <div className="about-lg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-lg-image"
      />
    </div>
  </>
)
export default About
