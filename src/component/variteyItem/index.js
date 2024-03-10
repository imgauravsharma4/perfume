import React from "react";
import Image from "next/image";
import "../../app/globals.css";
import CapComponent from "../cap";
import PumpComponent from "../pump";
import AdonisBottleImage from "@/images/adonisbottle.svg";

const VarietyItem = ({ bottleList, pumpList, capList }) => {
  const Volume = [
    { value: "15ML" },
    { value: "30ML" },
    { value: "50ML" },
    { value: "75ML" },
    { value: "100ML" },
    { value: "200ML" },
  ];
  const renderComponent = () => {
    if (capList) {
      console.log("cap", capList);

      return <CapComponent cap={capList} />;
    } else if (pumpList) {
      console.log("pump", pumpList);

      return <PumpComponent pump={pumpList} />;
    } else {
      return null;
    }
  };
  return (
    <div className="main-cont">
      <div className="top-volume">
        <div className="top-volume-inner">
          <h4>VOLUME</h4>
          {Volume?.map((item, index) => (
            <div className="value-tag" key={index}>
              {item.value}
            </div>
          ))}
        </div>
      </div>
      {/* {capList && <CapComponent cap={capList} />}

      {pumpList && <PumpComponent pump={pumpList} />} */}
      {/* {capList ? (
        <CapComponent cap={capList} />
      ) : pumpList ? (
        <PumpComponent pump={pumpList} />
      ) : null} */}

      <div className="image-view view-box" style={{ paddingTop: "50px" }}>
        <div className="view-box-inner">
          {renderComponent()}
          <Image
            src={bottleList?.image ? bottleList.image : AdonisBottleImage}
            alt={AdonisBottleImage}
            className="image-viewer"
          />
        </div>
      </div>
    </div>
  );
};

export default VarietyItem;
