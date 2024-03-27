import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Img from "../../public/image/Img-1.png";
import Image from "next/image";

const recipes = [
  {
    size: "2 BHK",
    name: "Fully Furnished",
    img: Img,
    price: 100,
    content: "Hello",
  },
  {
    size: "3 BHK",
    name: "Fully Furnished",
    img: Img,
    price: 100,
    content: "Hello",
  },
  {
    size: "4 BHK",
    name: "Fully Furnished",
    img: Img,
    price: 100,
    content: "Hello",
  },
  {
    size: "3 BHK",
    name: "Fully Furnished",
    img: Img,
    price: 100,
    content: "Hello",
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
                    <Card.Title className="fw-bold">{item.name}</Card.Title>
                    <Card.Text className="mb-3">{item.price}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
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
