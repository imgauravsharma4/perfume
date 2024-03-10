import React from "react";
import Link from "next/link";
import Image from "next/image";
import MuiImage from "@/images/mui.svg";

const VarietyList = ({ varietyList, onItemClick, onFilter }) => {
  return (
    <div className="variety-list" style={{ cursor: "pointer" }}>
      <div className="variety-top" onClick={() => onFilter(true)}>
        <Image src={MuiImage} alt={MuiImage} />
      </div>
      <div className="variety-lising">
        {varietyList &&
          varietyList?.map((item, index) => (
            <div
              className="box-variety"
              style={{ cursor: "pointer" }}
              key={index}
            >
              <Image
                src={item.image}
                alt={item.image}
                onClick={() => onItemClick(item)}
              />
              <div>{item.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VarietyList;
