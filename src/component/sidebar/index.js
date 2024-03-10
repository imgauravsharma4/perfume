// Sidebar.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BottleImage from "@/images/bottle.svg";
import Pumpimage from "@/images/pump.svg";
import Capimage from "@/images/caps.svg";
import Liquidimage from "@/images/liquid.svg";
import DecorationImage from "@/images/decoration.svg";

const Sidebar = ({ onItemClick }) => {
  return (
    <div className="sidebar">
      <Link href="#" onClick={() => onItemClick("Bottle")}>
        <Image src={BottleImage} alt="Bottle" />
        <p>Bottle</p>
      </Link>
      <Link href="#" onClick={() => onItemClick("Pumps")}>
        <Image src={Pumpimage} alt="Pumps" />
        <p>Pumps</p>
      </Link>
      <Link href="#" onClick={() => onItemClick("Caps")}>
        <Image src={Capimage} alt="Caps" />
        <p>Caps</p>
      </Link>
      <Link href="#" onClick={() => onItemClick("Liquid")}>
        <Image src={Liquidimage} alt="Liquid" />
        <p>Liquid</p>
      </Link>
      <Link href="#" onClick={() => onItemClick("Decoration")}>
        <Image src={DecorationImage} alt="Decoration" />
        <p>Decoration</p>
      </Link>
    </div>
  );
};

export default Sidebar;
