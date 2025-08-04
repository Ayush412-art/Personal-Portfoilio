import Image from "next/image";
import IconCard from "./Card";
import { technologies } from "../../public/assets/assets";
function Aboutsection() {
  return (
    <>
      <section id="about" className="w-full px-[12%] py-10 my-20 scroll-mt-20">
        <div className="flex flex-col items-center ">
          <p className="text-lg font-ovo">introduction</p>
          <h3 className="text-3xl md:text-5xl ">About Me</h3>
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
            <p className="max-w-2xl text-lg font-ovo">
              I'm Ayush Singh, a graduated B.Tech student at Heritage Institute
              of Technology, Kolkata(India), with a strong background in{" "}
              <span className="text-teal-500 text-lg md:text-xl ">
                full-stack development & devops
              </span>{" "}
              , having a passion for building scalable, user-friendly web
              applications. I’ve worked on real-world projects involving AI,
              TypeScript, Redis, and WebSockets. Outside of tech, I have a great
              taste in music, love to travel, and enjoy exploring creative ideas
              that blend tech with everyday life.
            </p>

            <div className="py-3">
              <h3 className="text-xl md:text-2xl  ">Education & Contact :</h3>
              {/*Education , Phone number , email ,linkedin icons + details */}

              <div className="px-[10%] py-4">
                <ul className="flex flex-col gap-y-3.5">
                  <li className="flex items-center gap-3 md:gap-2.5">
                    <Image
                      src="/assets/edu-icon.png"
                      alt="education-icon"
                      height={30}
                      width={30}
                    />
                    <a
                      className="text-lg text-blue-700 hover:underline"
                      href="https://www.heritageit.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Heritage Institute of Technology (B.Tech)
                    </a>
                  </li>
                  <li className="flex items-center gap-3 md:gap-2.5">
                    <Image
                      className="opacity-70"
                      src="/assets/phone-call.png"
                      alt="phone-icon"
                      height={27}
                      width={27}
                    />
                    <span className="text-base">+91-7980310230</span>
                  </li>
                  <li className="flex items-center gap-3 md:gap-2.5">
                    <Image
                      className="opacity-70"
                      src="/assets/mail_icon.png"
                      alt="mail-icon"
                      height={27}
                      width={27}
                    />
                    <a
                      className="text-lg text-blue-700 hover:underline break-all"
                      href="mailto:iamayush449@gmail.com"
                    >
                      iamayush449@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex gap-x-7 justify-center py-5">
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
          <h3 className="text-center text-xl md:text-3xl ">
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
