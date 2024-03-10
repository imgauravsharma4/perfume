import { Icon as IconifyIcon } from "@iconify/react";

const FilterComponent = ({ filterList, setFilterShow, filterShow }) => {
  const Shapes = [
    { tag: "Bottle" },
    { tag: "Pumps" },
    { tag: "Caps" },
    { tag: "Liquid" },
    { tag: "Decoration" },
  ];
  const Colors = [
    { bgColor: "#AC2D2D" },
    { bgColor: "#1E40B7" },
    { bgColor: "#3AAB61" },
    { bgColor: "#E6EA1E" },
    { bgColor: "#030000" },
    { bgColor: "#858585" },
    { bgColor: "#D91AAF" },
    { bgColor: "#7524DD" },
    { bgColor: "#25B5C9" },
  ];
  return (
    <>
      <div className="mb-20 variety-tags">
        <div className="close-tag">
          <IconifyIcon
            icon="ic:round-close"
            width={"20"}
            height={"20"}
            className={` `}
            color={""}
            onClick={() => setFilterShow(false)}
          />
        </div>
        <div className="w-full filter-box">
          <div className="tags-top">
            <h3>Shapes</h3>
          </div>
          <div className="tags-outer">
            {Shapes.map((item, index) => (
              <div
                className="tags"
                key={index}
                onClick={() => filterList(item.tag)}
              >
                {item.tag}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="tags-top">
            <h3>Colors</h3>
          </div>
          <div className="tags-outer color-tag-outer ">
            {Colors.map((item, index) => (
              <div
                className={`color-tag `}
                style={{
                  backgroundColor: `${item.bgColor}`,
                  cursor: "pointer",
                }}
                key={index}
                onClick={() => filterList(item?.bgColor)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
