import Image from "next/image";
import React from "react";
import WhiteUploadImage from "@/images/download-two.svg";
import ImageIcon from "@/images/pic.svg";
import UploadImage from "@/images/upload-two.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="flex gap-3 items-center justify-between header-outer">
        <div className="flex gap-3 items-center header-left ">
          <button type="button" className="button-header-gray">
            <Image src={UploadImage} alt={UploadImage} />
            <span> Fragrance</span>
          </button>
          <button type="button" className="button-header-gray">
            <Image src={ImageIcon} alt={ImageIcon} />

            <span> Cosmetics & Skincare</span>
          </button>
          <button type="button" className="button-header-gray">
            <Image src={ImageIcon} alt={ImageIcon} />

            <span> Aromatherapy & House</span>
          </button>
        </div>
        <div className="flex mid-header">
          <button type="button" className="button-header-gray">
            Undo
          </button>
          <button type="button" className="button-header-gray">
            Redo
          </button>
        </div>
        <div>
          <button type="button" className="button-header-purple">
            <Image src={WhiteUploadImage} alt={WhiteUploadImage} />
            Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
