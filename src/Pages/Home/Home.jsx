import logo from "../../assets/images/logo.png";
import HeroImage from "../../assets/images/header-bg.png";
import firstImgServices from "../../assets/images/service-1.png";
import secondImgServices from "../../assets/images/service-2.png";
import thirdImgServices from "../../assets/images/service-3.png";
import fourthImgServices from "../../assets/images/service-4.png";
import trendyFirstImage from "../../assets/images/n1.png";
import trendySecondImage from "../../assets/images/n2.png";
import trendyThirdImage from "../../assets/images/n3.png";
import trendyFirstFlagImage from "../../assets/images/flag-1.png";
import trendySecondFlagImage from "../../assets/images/flag-2.png";
import trendyThirdFlagImage from "../../assets/images/flag-3.png";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionText from "../../components/SectionText/SectionText";
import Category from "../../components/Category/Category";
import ExploreCard from "../../components/ExploreCard/ExploreCard";
import Trendy from "../../components/Trendy/Trendy";
import Footer from "../../components/Footer/Footer";
import footerBg from "../../assets/images/footer-bg.png";
import footerLogo from "../../assets/images/footer-logo.png";
import firstImgEx from "../../assets/images/e1.png";
import secondImgEx from "../../assets/images/e2.png";

function Home() {
  let servicesItems = [
    {
      img: firstImgServices,
      title: "Guided Tours",
      description:
        "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
      img: secondImgServices,
      title: "Best Flights Options",
      description:
        "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
      img: thirdImgServices,
      title: "Religious Tours",
      description:
        "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
      img: fourthImgServices,
      title: "Medical insurance",
      description:
        "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
  ];
  let trendyItems = [
    {
      img: trendyFirstImage,
      flag: trendyFirstFlagImage,
      days: "8",
      people: "30",
      title: "Switzerland",
      rate: 5,
      subtitle:
        "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
      btnText: "Explore Now",
    },
    {
      img: trendySecondImage,
      flag: trendySecondFlagImage,
      days: "8",
      people: "60",
      title: "Amazon",
      rate: 5,
      subtitle:
        "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
      btnText: "Explore Now",
    },
    {
      img: trendyThirdImage,
      flag: trendyThirdFlagImage,
      days: "8",
      people: "120",
      title: "Giza",
      rate: 5,
      subtitle:
        "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
      btnText: "Explore Now",
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
        text="No matter where you're going to, we'll take you there"
        textClasses="dark-gray-color fs-50 text-center text-capitalize"
      />
      <section className="py-5">
        <Container className="my-5">
          <SectionText smallText="CATEGORY" title="We Offer Best Services" />
          <Row className="mt-5">
            {servicesItems?.map((element, index) => {
              return (
                <Col lg={3} key={index}>
                  <Category
                    img={element.img}
                    title={element.title}
                    description={element.description}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <Container fluid>
        <Row>
          <Col lg={6} className="p-0">
            <ExploreCard
              bgImage={firstImgEx}
              smallText="Promotion"
              title="Explore Nature"
              btnText="View Packages"
            />
          </Col>
          <Col lg={6} className="p-0">
            <ExploreCard
              bgImage={secondImgEx}
              smallText="Promotion"
              title="Explore Cities"
              btnText="View Packages"
            />
          </Col>
        </Row>
      </Container>
      <section className="py-5">
        <Container className="my-5" fluid>
          <SectionText smallText="trendy" title="Our Trending Tour Packages" />
          <Row className="mt-5">
            {trendyItems?.map((element, index) => {
              return (
                <Col lg={4} key={index}>
                  <Trendy
                    img={element.img}
                    flag={element.flag}
                    days={element.days}
                    people={element.people}
                    title={element.title}
                    rate={element.rate}
                    subtitle={element.subtitle}
                    btnText={element.btnText}
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

export default Home;
