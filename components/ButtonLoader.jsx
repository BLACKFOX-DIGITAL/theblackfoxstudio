import React from "react";

const ButtonLoader = () => {
  return (
    <span class="flex flex-row justify-center items-center bg-white/50 backdrop-blur-sm gap-2 absolute top-0 left-0 size-full  ">
      <span class="size-3 rounded-full bg-white transform-gpu animate-bounce [animation-delay:.7s]"></span>
      <span class="size-3 rounded-full bg-white transform-gpu animate-bounce [animation-delay:.3s]"></span>
      <span class="size-3 rounded-full bg-white transform-gpu animate-bounce [animation-delay:.7s]"></span>
    </span>
  );
};

export default ButtonLoader;
