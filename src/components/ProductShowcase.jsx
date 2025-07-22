import { useState, useEffect } from "react";
import { FiStar } from "react-icons/fi";
import { useRouter } from "next/navigation";

const ProductShowcase = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first panel expanded
  const router = useRouter();

  // Using percentages for responsive widths
  const panelWidthPercent = 10; // collapsed width as percentage
  const expandedWidthPercent = 34; // expanded width as percentage

  return (
    <div className="relative flex justify-center items-center h-[400px] w-full overflow-hidden">
      <div className="relative w-full h-full">
        {products.map((product, idx) => {
          // Calculate left position for each panel using percentages
          let leftPercent = idx * panelWidthPercent;
          if (activeIndex !== null && idx > activeIndex) {
            leftPercent += expandedWidthPercent - panelWidthPercent;
          }
          const isExpanded = idx === activeIndex;
          return (
            <div
              key={product.id}
              className={`absolute top-0 h-full overflow-hidden cursor-pointer transition-all duration-500 shadow-[3px_0px_4px_rgba(0,0,0,0.35)] group z-[${
                isExpanded ? 30 : 20 + idx
              }]`}
              style={{
                left: `calc(${leftPercent}% + 50% - ${(products.length * panelWidthPercent + expandedWidthPercent - panelWidthPercent) / 2}%)`,
                width: isExpanded ? `${expandedWidthPercent}%` : `${panelWidthPercent}%`,
                zIndex: isExpanded ? 30 : 20 + idx,
                background: `url(${product.image}) center/contain no-repeat`,
                minWidth: 0,
              }}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => router.push(`/products/${product.id}`)}
            >
              <div
                className={`absolute inset-0 bg-black/10 transition-all duration-800 ${
                  isExpanded ? "transparent" : ""
                }`}
              ></div>
              {/* Vertical label for collapsed panels */}
              {!isExpanded && (
                <div className="absolute left-1/2 bottom-1 justify-baseline items-baseline -translate-x-1/2 z-20">
                  <span
                    className="bg-black/70 text-white px-3 py-2 font-semibold text-md tracking-wider"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {product.name}
                  </span>
                </div>
              )}
              {/* Expanded panel content */}
              <div
                className={`absolute flex flex-col items-center justify-center w-full h-full z-10 transition-all duration-500 ${
                  isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {isExpanded && (
                  <div className="flex items-end justify-between p-6 w-full h-full">
                    <div className="bg-black/40 px-4">
                      <h3 className="text-xl font-bold text-white drop-shadow">
                        {product.name}
                      </h3>
                      <p className="text-lg text-white drop-shadow">
                        ${product.price}
                      </p>
                    </div>

                    <div className="bg-black/40 px-4 flex items-center gap-2 py-2">
                      <FiStar fill="gold" color="gold" className="text-2xl" />
                      <p className="text-lg text-white drop-shadow">
                        {product.rating}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductShowcase;
