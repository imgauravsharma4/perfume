import React from "react";
import Image from "next/image";
const PumpComponent = ({ pump }) => {
  console.log("pump", pump);
  return (
    <>
      <div className="image-view">
        <Image src={pump?.image} alt={""} width={100} height={10} />
      </div>{" "}
    </>
  );
};

export default PumpComponent;
