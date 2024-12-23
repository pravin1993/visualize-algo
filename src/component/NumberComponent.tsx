import React from "react";

function NumberComponent({ animation, value, highlight }: any) {
    console.log(animation)
  return (
    <div
      data-id={value}
      style={{
        animation:animation 
      }}
      className={`p-3 m-2 w-10 aspect-square justify-center items-center flex text-white border rounded ${highlight && 'bg-yellow-600'}`}
    >
      {value}
    </div>
  );
}

export default NumberComponent;
