
import Image from "next/image"
function Herosection() {
  return (
    <>
            <section id="home" className="w-11/12 max-w-3xl mx-auto my-2 text-center h-screen flex flex-col items-center justify-center gap-2">
                <div>
                        <Image src={"/assets/myimg.png"} className="rounded-full" alt="" width={130} height={130}/>
                </div>

                <h3 className="flex gap-1 items-end font-ovo text-xl md:text-2xl mb-3">
                    Hello! My name is Ayush Singh<Image src={"/assets/hand-icon.png"} alt="" height={30} width={30} />
                </h3>
                
                <h1 className="text-3xl md:text-4xl font-ovo flex md:gap-2 items-center  ">Software developer based in India<Image src={"/assets/flag.jpg"} alt="" height={35} width={35} /></h1>

                 <p className="max-w-2xl mx-auto font-ovo">I am a full stack software developer from Kolkata , India recently completed my Bachelors of Technology from 
                    Heritage Institute of Technology. </p>   

                    <div className="flex flex-col md:flex-row max-w-2xl gap-3.5 mx-auto">
                        <a className="bg-black text-white rounded-full px-10 py-2 flex gap-2 items-center border border-b-gray-500 transition-all duration-300 hover:bg-gray-900" href="#contact">Contact me<Image src={"/assets/right-arrow-white.png"} alt="" height={20} width={20}  /></a>
                        <a href="/assets/docs/MyResume.pdf" download className="px-10 py-2 rounded-full flex items-center  justify-center gap-2 border border-black">Resume<Image src={"/assets/download-icon.png"} alt="download-icon" height={15} width={18} /></a>
                    </div>
            </section>
    </>
  )
}

export default Herosection
