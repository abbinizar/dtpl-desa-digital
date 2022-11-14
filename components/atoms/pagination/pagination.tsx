import { useState } from "react";
import ChevronLeftDouble from "../icon/chevron-left-double";
import ChevronRightDouble from "../icon/chevron-right-double";

const Pagination = () => {
  const data = [1, 2, 3, 4, 5];
  const [state, setState] = useState(1);
  return (
    <div className="space-x-4 flex items-center">
      <div onClick={() => setState((prev) => prev - 1)}>
        <ChevronLeftDouble />
      </div>
      {data.map((e, i) => {
        return (
          <div
            key={i}
            className={` w-8 h-8 flex justify-center items-center rounded-lg  text-xs ${
              e === state
                ? "bg-tosca-darkest text-white font-bold"
                : "border-slate-400 border"
            }`}
          >
            {e}
          </div>
        );
      })}
      <div onClick={() => setState((prev) => prev + 1)}>
        <ChevronRightDouble />
      </div>
    </div>
  );
};

export default Pagination;
