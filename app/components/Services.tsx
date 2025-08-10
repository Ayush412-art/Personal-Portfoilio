import React from "react";
import Image from "next/image";
import {serviceData} from "../../public/assets/assets.js"
function Services() {
  return (
    <section id="services" className="w-full px-[12%] py-10 my-20 scroll-mt-20">
      <div className="flex flex-col items-center relative z-10 ">

        <div className="absolute inset-0 w-full md:top-[-60%] -z-10 opacity-10   ">
          <Image className="w-full md:w-3xl object-cover object-center"  src={"/assets/bg-2.jpeg"} alt="img" height={0} width={0} 
           />
        </div>

        <p className="text-lg font-ovo">what I can bring on table - </p>
        <h3 className="text-3xl md:text-5xl ">My services</h3>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">A full-stack developer based in India with experience in freelance projects and remote startups. Skilled in building scalable web applications using modern technologies, passionate about learning new tools, and eager to contribute to impactful projects.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 relative z-10 ">
        {
          serviceData.map((val , idx)=>(

              <div key={idx} className="px-8 py-11 border cursor-pointer hover:shadow-black hover:scale-105 transition-all duration-150 border-gray-400 rounded-lg ">
                    <Image src={val.icon} alt="icons" height={30} width={30} />
                    <h3 className="text-lg my-4 text-gray-700">{val.title}</h3>
                    <p className="text-sm text-gray-600 leading-5">{val.description}</p>
                </div>

          ))
        }

      </div>
    </section>
  );
}

export default Services;
