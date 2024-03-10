import React from "react";
import Image from "next/image";

const CapComponent = ({ cap }) => {
  console.log("cap", cap);
  return (
    <>
      <div className="image-view">
        <Image src={cap?.image} alt={""} width={100} height={10} />
      </div>{" "}
    </>
  );
};

export default CapComponent;
