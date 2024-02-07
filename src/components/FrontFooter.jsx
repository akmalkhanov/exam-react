import Logo from "../assets/Logo.svg"
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiLinkedinLogoFill } from "react-icons/pi";



const FrontFooter = () => {
  return (
    <>
        <div className='w-[1515px] h-[400px] mt-36  bg-white flex justify-center items-center'>
            <div className='w-[1270px] h-[300px] border-b-2 border-gray flex'>
                <div className="w-[200px] ">
                <img src={Logo} alt="" /> 

                    <ul className="mt-8">
                        <li className="flex items-center transition-all duration-300 space-x-1 mt-2 hover:text-primary hover:underline  ">
                            <a className="" href="/">
                                <MdEmail />
                            </a>
                            <a href="/">hello@skillbridge.com</a>
                        </li>
                        <li className="flex items-center transition-all duration-300 space-x-1 mt-2 hover:text-primary hover:underline">
                            <a href="/">
                                <IoCall />
                            </a>
                            <a href="/">+91 91813 23 2309</a>
                        </li>
                        <li className=" w-[200px] flex items-center transition-all duration-300 space-x-1 mt-2 hover:text-primary hover:underline">
                            <a href="/">
                                <FaLocationDot />
                            </a>
                            <a href="/">Somewhere in the World</a>
                        </li>
                    </ul>
                </div>

                <ul className="  ml-[300px]">
                    <li className="w-[250px] h-[300px] text-start block">
                        <h4 className="font-semibold text-xl">Home</h4> <br />
                        <a className="text-xl hover:text-primary hover:underline hover:translate-x-3 transition-all duration-300" href="/">Benifits</a> <br />
                        <a className="text-xl hover:text-primary hover:underline hover:translate-x-3 transition-all duration-300" href="/">Our Courses</a> <br />
                        <a className="text-xl hover:text-primary hover:underline hover:translate-x-3 transition-all duration-300" href="/">Our Testimonials</a> <br />
                        <a className="text-xl hover:text-primary hover:underline hover:translate-x-3 transition-all duration-300" href="/">Our FAQ</a>
                    </li>   
                </ul>
                <ul className="  ml-12">
                    <li className="w-[250px] h-[300px] text-start block">
                        <h4 className="font-semibold text-xl">About Us</h4> <br />
                        <a className="text-xl hover:text-primary hover:underline hover:translate-x-3 transition-all duration-300" href="/">Company</a> <br />
                        <a className="text-xl hover:text-primary hover:underline hover:translate-x-3 transition-all duration-300" href="/">Achievements</a> <br />
                        <a className="text-xl hover:text-primary hover:underline hover:translate-x-3 transition-all duration-300" href="/">Our Goals</a> <br />
                    </li>   
                </ul>
                <div className="  ml-12">
                    <div className="w-[250px]  h-[300px] text-start block">
                        <h4 className="font-semibold text-xl ml-2">Social Profiles</h4>
                        <div className="w-44 h-10  flex items-center justify-around mt-6">
                            <button className="w-10 h-10 bg-whiting rounded-lg flex items-center justify-center border-gray border-x border-y hover:bg-white hover:border-amber-500 hover:text-primary transition-all duration-500">
                            <FaFacebook className="w-8 h-6" />
                            </button>
                            <button className="w-10 h-10 bg-whiting rounded-lg flex items-center justify-center border-gray border-x border-y hover:bg-white hover:border-amber-500 hover:text-primary transition-all duration-500">
                                <FaTwitter className="w-8 h-6" />
                            </button>
                            <button className="w-10 h-10 bg-whiting rounded-lg flex items-center justify-center border-gray border-x border-y hover:bg-white hover:border-amber-500 hover:text-primary transition-all duration-500">
                                <PiLinkedinLogoFill className="w-8 h-6" />
                            </button>
                        </div>
                    </div>   
                </div>

            </div>
        </div>
            <p className="text-xl text-center mt-[-10px]">© 2023 Skillbridge. All rights reserved.</p>
    </>
  )
}

export default FrontFooter