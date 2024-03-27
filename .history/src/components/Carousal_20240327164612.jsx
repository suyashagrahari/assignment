import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Img from "../../public/image/Img-1.png";
import Image from "next/image";
import { FaShower } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import { CiWifiOn } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";

const recipes = [
  {
    size: "2 BHK",
    name: "Fully Furnished",
    img: Img,
    price: 100,
    content: "Hello",
    location: "Goregaon, Array colony",
  },
  {
    size: "3 BHK",
    name: "Fully Furnished",
    img: Img,
    price: 100,
    content: "Hello",
    location: "Goregaon, Array colony",
  },
  {
    size: "4 BHK",
    name: "Fully Furnished",
    img: Img,
    price: 100,
    content: "Hello",
    location: "Goregaon, Array colony",
  },
  {
    size: "3 BHK",
    name: "Fully Furnished",
    img: Img,
    price: 100,
    content: "Hello",
    location: "Goregaon, Array colony",
  },
];

const MyCarousel = () => {
  const reduceRecipes = (acc, cur, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(cur);
    console.log(acc);
    return acc;
  };

  return (
    <Carousel>
      {recipes.reduce(reduceRecipes, []).map((item, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center">
            {item.map((item, index) => {
              return (
                <Card
                  key={index}
                  style={{ width: "18rem", borderRadius: "10px" }}
                >
                  <Image src={item.img} alt="" className="card-img-top" />
                  <Card.Body className="text-left">
                    <Card.Title className="fw-bold">
                      {item.size} | {item.name}
                    </Card.Title>
                    <Card.Text className="d-flex align-items-center gap-2 mb-3">
                      <FaShower className="rounded-circle p-1 bg-light" />
                      <FaCarAlt className="rounded-circle p-1 bg-light" />
                      <CiCamera className="rounded-circle p-1 bg-light" />
                      <CiWifiOn className="rounded-circle p-1 bg-light" />
                      <RiComputerLine className="rounded-circle p-1 bg-light" />
                    </Card.Text>
                    <Card.Text className="mb-2">
                      <FaLocationDot /> {item.location}
                    </Card.Text>
                    <Card.Text className="mb-2">
                      <LiaRupeeSignSolid /> {item.price} / Month
                    </Card.Text>
                    <Card.Text className="mb-3">
                      <LiaRupeeSignSolid /> 20,000 Downpayment
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "violet",
                        border: "none",
                      }}
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
