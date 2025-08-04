import React from "react";
// Example icon (you can change it)
import Image from "next/image";
const IconCard = (props : any) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 w-32 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 
                bg-white/10 backdrop-blur-md border border-white/20">
      <Image src={props.icon} alt="icon" height={30} width={30}  />
      <h3 className="text-sm font-semibold text-gray-700 text-center">{props.title}</h3>
    </div>
  );
};

export default IconCard;
