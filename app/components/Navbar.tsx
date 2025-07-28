import Image from "next/image"
import { Moon , Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { useTheme } from "next-themes"
function Navbar() {
  // const { setTheme } = useTheme()
  return (
  <>
  <div className="fixed top-0 left-0 w-full -z-10 opacity-75 translate-y-[-80%]">
      <Image src={"/assets/bg-color.png"} alt="bg-color" style={{width : "100%"}} height={0} width={0} />

  </div>
        <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 lg:py-7 flex items-center justify-between z-50">
            <a href="#Home"><Image src={"/assets/Logo.png"} alt="" width={130} height={130}/></a>
      <ul className="hidden md:flex items-center space-x-3 md:space-x-5 rounded-full py-3 px-10 bg-white opacity-95 shadow-sm ">
  <li>
    <a className="transition duration-700 ease-in-out font-ovo   hover:underline " href="#Home">Home</a>
  </li>
  <li>
    <a className="transition duration-700 ease-in-out font-ovo   hover:underline " href="#About me">About me</a>
  </li>
  <li>
    <a className="transition duration-700 ease-in-out  font-ovo  hover:underline " href="#Services">Services</a>
  </li>
  <li>
    <a className="transition duration-700 ease-in-out font-ovo  hover:underline " href="#My Projects">My Projects</a>
  </li>
  <li>
    <a className="transition duration-700 ease-in-out font-ovo   hover:underline " href="#Contact me">Contact me</a>
  </li>
    
    </ul> 
           
            
            <div className="flex space-x-5 items-center">
            <div>
                  <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem >
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
               </div>
                <a className="hidden md:flex gap-3 px-10 py-2.5 font-ovo rounded-full border border-gray-500 " href="#contact-page">Contact<Image src={"/assets/arrow-icon.png"} alt="image/contact" className="w-fit" width={0} height={0}/></a>
            </div>

        </nav>
  </>
  )
}

export default Navbar
