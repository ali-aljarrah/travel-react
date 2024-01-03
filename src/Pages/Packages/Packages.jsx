import NavBar from "../../components/NavBar/NavBar";
import logo from "../../assets/images/logo.png";
import Hero from "../../components/Hero/Hero";
import HeroImage from "../../assets/images/packages/banner.png";
import firstImg from "../../assets/images/packages/img-1.png";
import secondImg from "../../assets/images/packages/img-2.png";
import thirdImg from "../../assets/images/packages/img-3.png";
import fourthtImg from "../../assets/images/packages/img-4.png";
import fithImg from "../../assets/images/packages/img-5.png";
import sixthImg from "../../assets/images/packages/img-6.png";
import Footer from "../../components/Footer/Footer";
import footerBg from "../../assets/images/footer-bg.png";
import footerLogo from "../../assets/images/footer-logo.png";
import Package from "../../components/Package/Package";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Packages() {
  let packages = [
    {
      img: firstImg,
      date: "27, September 2023",
      people: "30+",
      title: "Maldives",
      desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      price: "3000 $",
      rate: "5.0",
    },
    {
      img: secondImg,
      date: "13, October 2023",
      people: "120+",
      title: "Switzerland",
      desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      price: "1290 $",
      rate: "4.9",
    },
    {
      img: thirdImg,
      date: "2, November 2022",
      people: "139+",
      title: "Berlin",
      desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      price: "2790 $",
      rate: "5.0",
    },
    {
      img: fourthtImg,
      date: "14, December 2022",
      people: "50+",
      title: "Torronto",
      desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      price: "1110 $",
      rate: "4.0",
    },
    {
      img: fithImg,
      date: "20, September 2022",
      people: "80+",
      title: "Baku",
      desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      price: "1220 $",
      rate: "4.5",
    },
    {
      img: sixthImg,
      date: "27, August 2022",
      people: "100+",
      title: "Chinese",
      desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      price: "2500 $",
      rate: "5.0",
    },
  ];
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
      <Hero
        bgImage={HeroImage}
        text="Travel With Us"
        textClasses="font-yesteryear fs-120 text-center text-white"
      />
      <section className="py-5 mt-5">
        <Container>
          <Row>
            {packages?.map((el, index) => {
              return (
                <Col lg={4} key={index} className="mb-4">
                  <Package
                    img={el.img}
                    date={el.date}
                    people={el.people}
                    title={el.title}
                    desc={el.desc}
                    price={el.price}
                    rate={el.rate}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <Footer footerBg={footerBg} logo={footerLogo} />
    </>
  );
}

export default Packages;
