"use client";
import { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

export default function CardContainer() {
  const [isFrontCardVisible, setIsFrontCardVisible] = useState(true);

  const toggleCard = () => {
    setIsFrontCardVisible((prevIsFrontCardVisible) => !prevIsFrontCardVisible);
  };

  return isFrontCardVisible ? (
    <CardFront toggleCard={toggleCard} />
  ) : (
    <CardBack toggleCard={toggleCard} />
  );
}
