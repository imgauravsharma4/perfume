"use client";
import React from "react";
import AdonisImage from "@/images/adonis.svg";
import AndreaImage from "@/images/andrea.svg";
import BambouImage from "@/images/bambou.svg";
import SarnumImage from "@/images/sarnum.svg";
import BazilletetroImage from "@/images/BAZILLERETRO.svg";
import BoccionzImage from "@/images/Boccionz.svg";
import BazilleImage from "@/images/basile.svg";
import AntaresImage from "@/images/Antares.svg";
import MuiImage from "@/images/mui.svg";
import AdonisBottleImage from "@/images/adonisbottle.svg";
import Image from "next/image";
import Link from "next/link";
import { Icon as IconifyIcon } from "@iconify/react";

const VarityList = [
  { image: AdonisImage, title: "ADONIS" },
  { image: AndreaImage, title: "ANDREA" },
  { image: BambouImage, title: "BAMBOU" },
  { image: SarnumImage, title: "BARNUM" },
  { image: BazilletetroImage, title: "BAZILLE RETRO" },
  { image: BoccionzImage, title: "BOCCIONI" },
  { image: BazilleImage, title: "BAZILLE" },
  { image: AntaresImage, title: "ANTARES" },
];
const Shapes = [
  { tag: "Hybrid shape" },
  { tag: "Rectangular shape" },
  { tag: "Square shape" },
  { tag: "Oval Shape" },
  { tag: "Round shape" },
];
const BottleNeck = [
  { tag: "BFEA 15 - EN" },
  { tag: "BFEA 15 - EN" },
  { tag: "FEA 20" },
];
const Volume = [
  { value: "15ML" },
  { value: "30ML" },
  { value: "50ML" },
  { value: "75ML" },
  { value: "100ML" },
  { value: "200ML" },
];
const Bottle = () => {
  return (
    <div className="right-content">
      <div className="right-content-inner">
        <div className="variety-list">
          <div className="variety-top">
            <Link href="#">
              {" "}
              <Image src={MuiImage} alt={MuiImage} />
            </Link>
          </div>
          <div className="variety-lising">
            {VarityList.map((item, index) => (
              <div className="box-variety" key={index}>
                <Image src={item.image} alt={item.image} />
                <div>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="variety-tags">
          <div className="close-tag">
            <IconifyIcon
              icon="ic:round-close"
              width={"20"}
              height={"20"}
              className={` `}
              color={""}
            />
          </div>
          <div className="mb-20">
            <div className="tags-top">
              <h3>Shapes</h3>
            </div>
            <div className="tags-outer">
              {Shapes.map((item, index) => (
                <div className="tags" key={index}>
                  {item.tag}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="tags-top">
              <h3>BottleNeck</h3>
            </div>
            <div className="tags-outer">
              {BottleNeck.map((item, index) => (
                <div className="tags" key={index}>
                  {item.tag}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="main-cont">
          <div className="top-volume">
            <div className="top-volume-inner">
              <h4>VOLUME</h4>
              {Volume.map((item, index) => (
                <div className="value-tag" key={index}>
                  {item.value}
                </div>
              ))}
            </div>
          </div>
          <div className="image-view">
            <Image src={AdonisBottleImage} alt={AdonisBottleImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottle;
