
import Image from "next/image"
function Herosection() {
  return (
    <>
            <section className="">
                <div>
                        <Image src={"/assets/myimg.png"} className="rounded-full" alt="" width={130} height={130}/>
                </div>

                <h3 className="flex gap-1 items-end font-ovo text-xl md:text-2xl mb-3">
                    Hello! My name is Ayush Singh<Image src={"/assets/hand-icon.png"} alt="" height={30} width={30} />
                </h3>
                
                <h1 className="text-3xl md:text-4xl font-ovo  ">Software developer based in India</h1>

                 <p className="max-w-2xl mx-auto font-ovo">I am a full stack software developer from Kolkata , India recently completed my Bachelors of Technology from 
                    Heritage Institute of Technology. </p>   

                    <div className="flex max-w-2xl mx-auto">
                        <a className="bg-black text-white rounded-full px-10 py-2 flex gap-2 items-center border border-b-gray-500" href="#contact">Contact me<Image src={"/assets/right-arrow-white.png"} alt="" height={20} width={20}  /></a>
                        <a className="">Resume </a>
                    </div>
            </section>
    </>
  )
}

export default Herosection
