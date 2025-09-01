import Image from "next/image";
import IconCard from "./Card";
import { technologies } from "../../public/assets/assets";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
function Aboutsection() {
  const arrowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section id="about" className="w-full px-[12%] py-10 my-18 scroll-mt-20">
        <div className="flex flex-col items-center ">
          <Badge variant={"secondary"} className="text-lg font-['ovo'] ">
            introduction
          </Badge>
          <h3 className={`text-3xl font-['Bungee'] md:text-5xl`}>About Me</h3>
        </div>

        <div className="flex flex-col lg:flex-row  gap-20 my-18 md:my-20">
          <div>
            <Image
              className=" w-full rounded-3xl"
              src={"/assets/img2.jpg"}
              alt="myImg2"
              height={320}
              width={300}
            />
          </div>
          <div className="flex-1 py-7">
            <p className="max-w-2xl text-lg font-['ovo']">
              A Passionate full-stack engineer with experience in{" "}
              <span className="text-teal-500 text-lg md:text-xl ">
                full-stack development & devops
              </span>{" "}
              , building scalable and user-friendly web applications. I’ve
              worked on real-world projects involving AI, TypeScript, Redis, and
              WebSockets and currently working on python , langchain and django
              to build more LLM based web-apps. Beyond coding, I enjoy cricket,
              public speaking , Rubik’s cubes, music, traveling, and exploring
              creative ways to blend technology with everyday life.I've been
              worked at Canverro as Full stack intern and currently contributing
              in GSSOC-25 and freelanching.
            </p>

            <div className="py-3">
              <h3 className="font-['outfit'] text-xl">Education</h3>

              <motion.a
                initial="hidden"
                whileHover={"visible"}
                href="https://www.heritageit.edu/"
                className="flex items-center justify-between m-3.5 gap-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/hitk.png"
                    alt="clg-logo"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col leading-tight">
                    <p className="font-semibold font-['ovo'] text-sm">
                      Heritage Institute of Technology, Kolkata
                    </p>
                    <p className="text-xs text-gray-600">
                      Btech (Electronics & Communication Engineering)
                    </p>
                  </div>
                  <motion.span
                    variants={arrowVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight />
                  </motion.span>
                </div>
                <p className="text-sm font-medium">2021-2025</p>
              </motion.a>

              <div className="flex gap-x-7 mt-3 justify-center py-5">
                <a className="hover:scale-105" href="https://shorturl.at/E6Peh">
                  <Image
                    src={"/assets/linkedin.png"}
                    alt="linkedin-icon"
                    height={32}
                    width={32}
                  />
                </a>
                <a className="hover:scale-105" href="https://shorturl.at/gvZzE">
                  <Image
                    src={"/assets/github.png"}
                    alt="github-icon"
                    height={32}
                    width={32}
                  />
                </a>
                <a className="hover:scale-105" href="">
                  <Image
                    src={"/assets/twitter.png"}
                    alt="twitter-icon"
                    height={32}
                    width={32}
                  />
                </a>
                <a className="hover:scale-105" href="https://shorturl.at/j72lq">
                  <Image
                    src={"/assets/insta.png"}
                    alt="insta-icon"
                    height={32}
                    width={32}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 md:gap-y-5 ">
          <h3 className="text-center font-['outfit'] text-xl md:text-3xl ">
            Languages and Technologies
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-8 gap-y-5 md:gap-4 ">
            {technologies.map((element, idx) => (
              <IconCard key={idx} title={element.title} icon={element.icon} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutsection;
