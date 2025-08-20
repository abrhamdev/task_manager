import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import automate from "../../assets/images/automate.png";
import centeralized from "../../assets/images/centeralized.png";
import collaborate from "../../assets/images/collaborat.png";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";

const Carousel = () => {
  const cards = [
    {
      id: 1,
      title: "Automate Task",
      description: "Make Repetitive Tasks Automated",
      imgSrc:automate,
    },
    {
      id: 2,
      title: "Task Planing",
      description: "Organize Your Tasks",
      imgSrc: image2,
    },
    {
      id: 3,
      title: "Collaboration",
      description: "Assign Tasks and Collaborate",
      imgSrc:collaborate,
    },
    {
      id: 5,
      title: "Time Managemen",
      description: "Manage tasks, deadlines, and notifications",
      imgSrc:image1,
    },
    {
      id: 4,
      title: "Centralization",
      description: "Manage Your Tasks Efficiently",
      imgSrc: centeralized,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Scroll interval

    return () => clearInterval(interval);
  }, [cards.length]);

  const getCardPosition = (index) => {
    const totalCards = cards.length;
    const left = (currentIndex - 1 + totalCards) % totalCards;
    const center = currentIndex;
    const right = (currentIndex + 1) % totalCards;

    if (index === center) return "center";
    if (index === left) return "left";
    if (index === right) return "right";
    return "hidden";
  };

  return (
    <div className="relative flex  justify-center items-center  w-full max-w-5xl mx-auto overflow-hidden h-[500px]">
      {cards.map((card, index) => {
        const position = getCardPosition(index);

        return (
          <motion.div
            key={card.id}
            className={ `absolute ${
              position === "center"
              ? "z-20 scale-110"
              : position === "left" || position === "right"
              ? "z-10 scale-90"
              : "hidden"
            }`}
            animate={{
              x:
                position === "center"
                  ? "0%"
                  : position === "left"
                  ? "-100%"
                  : position === "right"
                  ? "100%"
                  : position === "hidden"
                  ? "200%"
                  : 0,
              scale: position === "center" ? 1.4 : 0.9,
            }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              scale: { duration:0.5 },
            }}
          >
            <div className="w-64 mr-10 ml-10 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
              <img
                className="object-cover w-full h-40 rounded-t-lg"
                src={card.imgSrc}
                alt={card.title}
              />
              <div className="p-4">
                <h5 className="text-lg font-bold">{card.title}</h5>
                <p className="text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Carousel;