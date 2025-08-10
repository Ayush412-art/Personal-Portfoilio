import { Card, CardContent , CardTitle , CardDescription , CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { workData } from "../../public/assets/assets";
function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-[12%] md:py-12 my-14  scroll-mt-20"
    >
      <div className="flex flex-col items-center ">
        <h3 className="text-3xl md:text-5xl ">My Projects</h3>
        <p className="text-sm max-w-2xl text-center mt-5 mb-12 font-ovo">
          A collection of ideas brought to life through clean code, sleek
          design, and problem-solving mindset. Each build reflects creativity,
          functionality, and a focus on real-world impact.
        </p>
      </div>
      <div className="py-16 mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {workData.map((val, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardHeader>
                        <CardTitle>{val.title}</CardTitle>
                        <CardDescription>{val.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image className="w-full object-cover h-48"  src={val.bgImage} alt="image" height={100} width={100}/>

                    </CardContent>


                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
