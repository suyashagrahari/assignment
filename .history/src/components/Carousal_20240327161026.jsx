import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Img from "../../public/image/Img-1.png";

const recipes = [
  {
    img: Img,
    price: 100,
    content: "Hello",
  },
  {
    img: Img,
    price: 100,
    content: "Hello",
  },
  {
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
                <Card key={index} style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://picsum.photos/200?random=${item + 1}`}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
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
