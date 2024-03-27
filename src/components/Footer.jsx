import Card from "react-bootstrap/Card";
import Icon_1 from "../../public/image/icon-1.png";
import Icon_2 from "../../public/image/icon-2.png";
import Icon_3 from "../../public/image/icon-3.png";
import Icon_4 from "../../public/image/icon-4.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 p-4">
        <div className="col">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center mb-3 image">
                <Image src={Icon_1} alt="icon" />
              </div>
              <Card.Subtitle className="mb-2 text-muted ">100%</Card.Subtitle>
              <Card.Text className="">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center mb-3 image">
                <Image src={Icon_2} alt="icon" />
              </div>
              <Card.Subtitle className="mb-2 text-muted ">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text className="">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center mb-3 image">
                <Image src={Icon_3} alt="icon" />
              </div>
              <Card.Subtitle className="mb-2 text-muted ">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text className="">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center mb-3 image">
                <Image src={Icon_4} alt="icon" />
              </div>
              <Card.Subtitle className="mb-2 text-muted ">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text className="">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Footer;
