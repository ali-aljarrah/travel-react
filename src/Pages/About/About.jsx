import './About.css';
import NavBar from "../../components/NavBar/NavBar";
import logo from "../../assets/images/logo.png";
import Hero from "../../components/Hero/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeroImage from '../../assets/images/about/banner.png';
import { Link } from "react-router-dom";
import firstImg from '../../assets/images/about/img-1.png';
import secondImg from "../../assets/images/about/img-2.png";
import thirdImg from "../../assets/images/about/img-3.png";
import icon from '../../assets/images/about/circle-filled.png';
import Footer from "../../components/Footer/Footer";
import footerBg from "../../assets/images/footer-bg.png";
import footerLogo from "../../assets/images/footer-logo.png";

function About() {
  return (
    <>
      <NavBar
        brandLogo={logo}
        menuItems={[
          { title: "Home", path: "/" },
          { title: "About", path: "/about" },
          { title: "Packages", path: "/packages" },
          { title: "Services", path: "/services" },
        ]}
        btnText="Get in Touch"
      />
      <Hero bgImage={HeroImage} text="About Us" textClasses="font-yesteryear fs-120 text-center text-white"/>
      <section className="py-5 mt-5">
        <Container>
          <Row>
            <Col lg={5}>
              <div className="h-100 d-flex flex-column align-items-start justify-content-center">
                <div className="fs-18 orange-color text-uppercase fw-700 mb-3">Promotion</div>
                <h2 className="fs-40 fw-700 dark-blue-color mb-4 ">
                We Provide You Best Europe Sightseeing Tours
                </h2>
                <p className="fs-16 dark-gray-color">
                Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
                </p>
                <div>
                  <Link to='/packages' className="btn-orange py-4">View Packages</Link>
                </div>
              </div>
            </Col>
            <Col lg={7} className="text-center text-lg-end mt-5 mt-lg-0">
              <img loading='lazy' width="630" height="488" className="img-fluid" src={firstImg} alt="We Provide You Best Europe Sightseeing Tours" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-5 mid-sec" style={{backgroundImage: `url(${secondImg})`}}>
        <h3 className='font-yesteryear fs-120 text-center text-white'>Wanderlust</h3>
        <img loading='lazy' src={icon} alt="Wanderlust" />
      </section>
      <section className="py-5 mt-5">
        <Container>
          <Row>
            <Col lg={5} className="text-center text-lg-start mb-5 mb-lg-0">
              <img loading='lazy' width="458" height="569" className="img-fluid" src={thirdImg} alt="Our Popular Tour Plans" />
            </Col>
            <Col lg={7}>
              <div className="h-100 d-flex flex-column align-items-start justify-content-center">
                <div className="fs-18 orange-color text-uppercase fw-700 mb-3">Trend</div>
                <h4 className="fs-40 fw-700 dark-blue-color mb-4 ">
                Our Popular Tour Plans
                </h4>
                <p className="fs-16 dark-gray-color">
                Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.
                </p>
                <div className='d-flex justify-content-start align-items-center mt-4'>
                  <div className='me-5 text-center'>
                    <div className='fs-30 gray-color mb-3'>78%</div>
                    <div className='fs-18 fw-700 dark-blue-color'>Vacations</div>
                  </div>
                  <div className='text-center'>
                    <div className='fs-30 gray-color mb-3'>55%</div>
                    <div className='fs-18 fw-700 dark-blue-color'>Honeymoon</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer footerBg={footerBg} logo={footerLogo}/>
    </>
  );
}

export default About;
