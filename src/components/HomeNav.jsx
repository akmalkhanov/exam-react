import Logo from "../assets/Logo.svg";
import { GrFormNextLink } from "react-icons/gr";

const HomeNav = () => {
    const navItems = [
        {link: "Home", path: "home" },
        {link: "Courses", path: "courses" },
        {link: "About", path: "about" },
        {link: "Pricing", path: "pricing" },
        {link: "Contact", path: "contact" },
    ]
    
  return (
    <>
        <div className="bg-whiting">
        <div className="bg-primary md:w-[1450px] h-10 mt-6 ml-12 flex justify-center items-center rounded-md  ">
                <p className="text-white ">Free Courses 🌟 Sale Ends Soon, Get It Now</p>
                <a href="/"><GrFormNextLink className="w-6 text-white h-6" /></a>
            </div>
        <nav className="bg-whiting h-20 md:px-14 max-w-screen-2xl mx-auto mt-2 border-b-2 w-[1400px] border-gray">
        
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
            <div className="flex space-x-14 items-center">
                <a href="/" className="">
                    <img src={Logo} alt="" className="w-12 inline-block items-center" />
                </a>

                <ul className="md:flex space-x-8">
                    {
                        navItems.map(({link, path}) => <a key={link} href={path} className="block transition-all duration-500 hover:bg-primary hover:text-white hover:rounded-md w-20 pt-2 h-12 text-center mt-2">{link}</a>)
                    }
                    
                </ul>
            </div>
            <div className="space-x-4">
                <button className=" w-24 h-12 transition-all duration-500 rounded-md hover:w-24 hover:h-12 hover:rounded-md hover:bg-primary hover:text-white">
                <a href="signup">Sign Up</a>
                </button>
                <button className="bg-primary border w-24 h-12 py-2 px-4 transition-all duration-300 text-white rounded-md hover:border-amber-500 hover:bg-white hover:text-primary">
                <a href="login">Log In</a>
                </button>
            </div>
        </div>
    </nav>
    </div>
    </>
  )
}
 
export default HomeNav

