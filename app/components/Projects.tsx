// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import {workData} from "../../public/assets/assets"
function Projects() {
  return (
   <section id="projects" className="w-full px-[12%] md:py-12 my-14  scroll-mt-20">
                <div className="flex flex-col items-center ">
                        <h3 className="text-3xl md:text-5xl ">My Projects</h3>
                        <p className="text-sm max-w-2xl text-center mt-5 mb-12 font-ovo">A collection of ideas brought to life through clean code, sleek design, and problem-solving mindset. Each build reflects creativity, functionality, and a focus on real-world impact.</p>

                </div>
                <div className="">

                </div>
    {/* <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {workData.map((val, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                        <h2>{val.title}</h2>
                        <p>{val.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel> */}
   </section>
  )
}

export default Projects
