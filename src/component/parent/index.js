import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import Header from "../header";
import VarietyList from "../varietyList";
import VarietyItem from "../variteyItem";
import AdonisImage from "@/images/adonis.svg";
import BambouImage from "@/images/bambou.svg";
import SarnumImage from "@/images/baz.svg";
import BazilletetroImage from "@/images/baz.svg";
import BoccionzImage from "@/images/bazilless.svg";
import BazilleImage from "@/images/bazilless.svg";
import AdonisBottleImage from "@/images/bot.svg";
import diademe from "@/images/cap1.svg";
import GrooveDroit from "@/images/cap2.svg";
import Pompe from "@/images/cap3.png";
import AluSpace from "@/images/alluspacex.svg";
import Pompe31 from "@/images/cap4.svg";
import Amor from "@/images/amorx.svg";
import CoffieGroove from "@/images/Coffee.svg";
import CpffoeLisse from "@/images/cpffoe.svg";
import AluBall from "@/images/alluBallx.svg";
import FilterComponent from "../filter";

const ParentComponent = () => {
  const [list, setList] = useState(null);
  const [selectedItem, setSelectedItem] = useState();
  const [showVarietyList, setShowVarietyList] = useState(false);
  const [itemSelectedShow, setItemSelectedShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false);
  const [capList, setCapList] = useState();
  const [bottleList, setBottleList] = useState();
  const [pumpList, setPumpList] = useState();
  const handleListClick = (item) => {
    let selectedItemData = [];
    let bottleData = [];
    let capData = [];
    let pumpData = [];
    let liquidData = [];
    let decorationData = [];
    switch (item) {
      case "Bottle":
      case "#AC2D2D":
        bottleData = [
          {
            image: AdonisBottleImage,
            title: "ADONIS",
            type: "bottle",
          },
          // { image: AdonisImage, title: "ADONIS", type: "bottle" },
          { image: SarnumImage, title: "SARNUM", type: "bottle" },
          {
            image: BazilletetroImage,
            title: "BazilletetroImage",
            type: "bottle",
          },
          { image: BoccionzImage, title: "BoccionzImage", type: "bottle" },
          { image: BazilleImage, title: "BazilleImage", type: "bottle" },
        ];
        selectedItemData = bottleData;
        break;
      case "Pumps":
      case "#1E40B7":
        pumpData = [
          { image: diademe, title: "Diademe", type: "pump" },
          { image: GrooveDroit, title: "GrooveDroit", type: "pump" },
          { image: Pompe, title: "Pompe", type: "pump" },
          { image: Pompe31, title: "Pompe31", type: "pump" },
        ];
        selectedItemData = pumpData;
        break;
      case "Caps":
      case "#3AAB61":
        capData = [
          { image: AluSpace, title: "AluSpace", type: "cap" },
          { image: Amor, title: "Amor", type: "cap" },
          { image: CoffieGroove, title: "CoffieGroove", type: "cap" },
          { image: CpffoeLisse, title: "CpffoeLisse", type: "cap" },
          { image: AluBall, title: "AluBall", type: "cap" },
        ];
        selectedItemData = capData;
        break;
      case "Liquid":
      case "#E6EA1E":
        liquidData = [
          { image: AluSpace, title: "AluSpace", type: "liquid" },
          { image: Amor, title: "Amor", type: "liquid" },
          { image: AluSpace, title: "AluSpace", type: "liquid" },
          { image: Pompe31, title: "Pompe31", type: "liquid" },
        ];
        selectedItemData = liquidData;

        break;
      case "Decoration":
      case "#030000":
        decorationData = [
          { image: AluSpace, title: "AluSpace", type: "decoration" },
          { image: Amor, title: "Amor", type: "decoration" },
          { image: diademe, title: "Diademe", type: "decoration" },
          { image: GrooveDroit, title: "GrooveDroit", type: "decoration" },
        ];
        selectedItemData = decorationData;

        break;
      default:
        break;
    }

    setList(selectedItemData);
    setShowVarietyList(true);
  };

  const handleItemClick = (item) => {
    switch (item.type) {
      case "bottle":
        setBottleList(item);

        break;
      case "cap":
        setCapList(item);
        setPumpList(null);
        break;
      case "pump":
        setPumpList(item);
        setCapList(null);
        break;
      default:
        setList([]);
        break;
    }

    setItemSelectedShow(true);
  };

  const handleFilter = (item) => {
    setFilterShow(item);
  };
  return (
    <div
      className="parent-container 
    "
    >
      <Header />
      <div className="flex auto varietylistouter">
        <Sidebar onItemClick={handleListClick} />
        {showVarietyList ? (
          <VarietyList
            varietyList={list}
            onItemClick={handleItemClick}
            onFilter={handleFilter}
          />
        ) : (
          ""
        )}
        {filterShow && (
          <FilterComponent
            filterList={handleListClick}
            setFilterShow={setFilterShow}
            filterShow={filterShow}
          />
        )}

        {itemSelectedShow && (
          <div className="variety-list-sec">
            <VarietyItem
              bottleList={bottleList}
              capList={capList}
              pumpList={pumpList}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
