import Sarah from "../assets/images.svg"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";





const SignUpHeader = () => {


return (
    <>
        <header className='w-[1518px] h-[700px] flex '>
            <div className='w-[700px] h-[600px]  ml-28 '>
                <h2 className='text-3xl font-semibold mt-44'>Students Testimonials</h2>
                <p className='py-2'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras <br /> eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                <div className='w-[630px] h-[220px] border-gray border-x border-y rounded-md bg-white mt-8'>
                    <p className='p-8'>The web design course provided a solid foundation for me. The instructors were <br /> knowledgeable and supportive, and the interactive learning environment was <br /> engaging. I highly recommend it!</p>
                    <div className='w-[630px] h-16 flex items-center  '>
                        <img className="ml-8" src={Sarah} alt="" />
                        <span className="text-2xl font-semibold ml-2">Sarah L</span>
                        <button className="w-36 ml-[270px] h-12 font-semibold  my-6 rounded-md border-gray border-x border-y  bg-whiting transition-all duration-500 hover:bg-white hover:border-amber-500 hover:text-primary ">Read More</button>
                    </div>
                    <button className="h-16 w-16 border mt-8 border-gray border-y border-x bg-white rounded-xl hover:border-amber-500 hover:text-primary transition-all duration-500 ml-[482px]"><FaArrowLeft className="w-16 h-4" /></button>
                    <button className="h-16 w-16 border mt-8 border-gray border-y border-x bg-white rounded-xl hover:border-amber-500 hover:text-primary transition-all duration-500 ml-4"><FaArrowRight className="w-16 h-4" /></button>
                </div>
            </div>

            <div className="w-[450px] h-[650px] border-gray border-x border-y rounded-md bg-white m-16">
                <h2 className="text-4xl text-center mt-8  font-semibold">Sign Up</h2>
                <p className="text-center mt-2">Create an account to unlock exclusive features.</p>
                <div className="w-[380px]  ml-8">
                    
                    <form>
                        <div className="mt-8">
                            <label htmlFor="" className="">Full Name</label>
                            <input type="text" className="w-[380px] h-12 border-gray border-x border-y rounded-md pl-4" placeholder="Enter your Name" />
                        </div>
                        <div className="mt-8">
                            <label htmlFor="" className="">Email</label>
                            <input type="email" className="w-[380px] h-12 border-gray border-x border-y rounded-md pl-4" placeholder="Enter your Email" />
                        </div>
                        <div className="mt-8">
                            <label htmlFor="" className="">Password</label>
                            <input type="password" className="w-[380px] h-12 border-gray border-x border-y rounded-md pl-4" placeholder="Enter your Password" />
                        </div>
                        <div className="flex space-x-2">
                            <input type="checkbox" />
                            <p>I agree with <span className="underline cursor-pointer hover:text-primary transition-all duration-500">Terms of Use</span> and <span className="underline cursor-pointer hover:text-primary transition-all duration-500  ">Privacy Policy</span> </p>
                        </div>
                        
                        
                    </form>

                    <button className="w-[380px] h-10  mt-4 rounded-md bg-primary border-2-primary text-white hover:border-amber-500 hover:text-primary transition-all duration-500 hover:bg-white border-x border-y" type="submit"><a href="login">Sign Up</a></button>
                        <a className="ml-44 pt-4" href="/">OR</a>
                        <button className="w-[380px] h-10 flex justify-center space-x-3 items-center  mt-4 rounded-md bg-whiting border-gray  hover:border-amber-500 hover:text-primary transition-all duration-500 hover:bg-white border-x border-y" type="submit"> <span className=""><FcGoogle className="w-6 h-6" /></span> Sign Up with Google</button>
                        <p className="ml-24 mt-4">Already have an account? <span className=""><a className="underline cursor-pointer hover:text-primary transition-all duration-500" href="login">Login</a></span></p>

                </div>
            </div>
        </header>
    </>
  )
}


export default SignUpHeader