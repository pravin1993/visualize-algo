import React from "react";

function NumberComponent({ animation, value, highlight, isSorted }: any) {
  return (
    <div
      data-id={value}
      style={{
        animation:animation 
      }}
      className={`p-3 m-2 w-10 aspect-square justify-center items-center flex text-white border rounded ${highlight && 'bg-yellow-600'} ${isSorted && 'bg-green-700'}`}
    >
      {value}
    </div>
  );
}

export default NumberComponent;
