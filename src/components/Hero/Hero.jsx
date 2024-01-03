import './Hero.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero({bgImage, text, textClasses}) {
    return (
        <main className='hero-wrapper' style={{backgroundImage: `url(${bgImage})`}}>
            <Container>
                <Row>
                    <Col md={8} className="mx-auto">
                        <h1 className={textClasses}>{text}</h1>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Hero
