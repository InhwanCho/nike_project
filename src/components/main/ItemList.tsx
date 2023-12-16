import { useState, useEffect } from "react";
import "./css/item.css";
import { data5 } from "../../assets/data";

export default function ItemList() {
  // Initialize toggle state for each section to false
  const [toggles, setToggles] = useState(new Array(data5.length).fill(false));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update the windowWidth state based on the window's size
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to toggle the visibility of .total-list for each section
  const handleTitleClick = (index: number) => {
    if (windowWidth <= 640) {
      setToggles(toggles.map((toggle, i) => (i === index ? !toggle : toggle)));
    }
  };

  return (
    <div className="last-item-container mt-20 mx-12 pl-4">
      <div className="sm:grid sm:grid-cols-4 gap-4">
        {data5.map((section, index) => (
          <ul key={index} className={`col-start-${index + 1} item-list`}>
            <li>
              <h4
                className="font-bold text-xl cursor-pointer"
                onClick={() => handleTitleClick(index)}
              >
                {" "}
                
                {section.title}
              </h4>
            </li>
            <li className="mt-4 sm:mt-8">
              <ul
                className={`space-y-4 text-gray-900/60 cursor-pointer total-list ${
                  toggles[index] ? "show" : ""
                }`}
              >
                {" "}
                
                {section.items.map((item, itemIndex) => {
                  const isHidden = itemIndex >= 4;
                  return (
                    <li
                      key={itemIndex}
                      className={`hover:text-gray-900 ${
                        isHidden ? "hidden-items" : ""
                      }`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
