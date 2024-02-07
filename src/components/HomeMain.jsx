import Container from "../assets/Container.png"
import { HiArrowUpRight } from "react-icons/hi2"
import { GrFormNextLink } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import Image from "../assets/Image.png"
import Imagee from "../assets/Imagee.png"
import Imageee from "../assets/Imageee.png"
import Imageeee from "../assets/Imageeee.png"
import Imageeeee from "../assets/Imageeeee.png"
import Imageeeeee from "../assets/Imageeeeee.png"
import Sarah from "../assets/sarah.svg"
import Jason from "../assets/jason.svg"
import Michael from "../assets/michael.svg"
import Emily from "../assets/emily.svg"
import { MdCheck } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react"


const HomeMain = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleMenu = () => {
        setIsChecked(!isChecked);
    }
    const toggleMenuu = () => {
        setIsChecked(!isChecked);
    }

    let data  = [
        {
            name: "item1",
            description: "lorem jbkd kjdhskdhsd kjgsdkjsadsabd  kjsgdsambdasm sgjdsajdbsakj"
        }
    ]
  return (
    <>
        <main>
            <section className="ml-32  ">
                <img className="w-[1300px]" src={Container} alt="" />
            </section>

            <section className="">
                <h2 className="text-5xl font-semibold px-36 pt-24">Benifits</h2>
                <div className="flex justify-around">
                <p className="px-8 py-4">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum <br /> eget habitasse in velit fringilla feugiat senectus in.</p>
                <button className="bg-white border w-24 h-12 py-2 px-4 transition-all border-gray duration-300  rounded-md hover:border-amber-500 hover:bg-white hover:text-primary">View All</button>
                </div>
                <div className="w-[1270px] ml-36">
                    <ul className="grid grid-cols-3 gap-3 mt-14">
                        <li className="w-[410px] h-[350px] border-gray  border-x border-y rounded-md bg-white">
                            <h2 className="text-6xl font-semibold pl-[300px] py-6">01</h2>
                            <h5 className="font-semibold px-10 text-xl">Flexible Learning Schedule</h5>
                            <p className="px-10 py-4"> Fit your coursework around your existing commitments and obligations.</p>
                            <button className="w-16 h-16 pl-3 border-x border-gray border-y rounded-md ml-[300px] mt-8 transition-all duration-500 hover:border-amber-500 hover:bg-gray">
                            <HiArrowUpRight className="text-primary w-10 h-8 :text-white " />
                            </button>
                        </li>
                        <li className="w-[410px] h-[350px] border-gray  border-x border-y rounded-md bg-white">
                            <h2 className="text-6xl font-semibold pl-[300px] py-6">02</h2>
                            <h5 className="font-semibold px-10 text-xl">Expert Instruction</h5>
                            <p className="px-10 py-4">Learn from industry experts who have hands- <br /> on experience in design and development.</p>
                            <button className="w-16 h-16 pl-3 border-x border-gray border-y rounded-md ml-[300px] mt-8 transition-all duration-500 hover:border-amber-500 hover:bg-gray">
                            <HiArrowUpRight className="text-primary w-10 h-8 :text-white " />
                            </button>
                        </li>
                        <li className="w-[410px] h-[350px] border-gray  border-x border-y rounded-md bg-white">
                            <h2 className="text-6xl font-semibold pl-[300px] py-6">03</h2>
                            <h5 className="font-semibold px-10 text-xl">Diverse Course Offerings</h5>
                            <p className="px-10 py-4">Explore a wide range of design and development courses covering various topics.</p>
                            <button className="w-16 h-16 pl-3 border-x border-gray border-y rounded-md ml-[300px] mt-8 transition-all duration-500 hover:border-amber-500 hover:bg-gray">
                            <HiArrowUpRight className="text-primary w-10 h-8 :text-white " />
                            </button>
                        </li>
                        <li className="w-[410px] h-[350px] border-gray  border-x border-y rounded-md bg-white">
                            <h2 className="text-6xl font-semibold pl-[300px] py-6">04</h2>
                            <h5 className="font-semibold px-10 text-xl">Updated Curriculum</h5>
                            <p className="px-10 py-4">Access courses with up-to-date content <br /> reflecting the latest trends and industry <br /> practices.</p>
                            <button className="w-16 h-16 pl-3 border-x border-gray border-y rounded-md ml-[300px] mt-8 transition-all duration-500 hover:border-amber-500 hover:bg-gray">
                            <HiArrowUpRight className="text-primary w-10 h-8 :text-white " />
                            </button>
                        </li>
                        <li className="w-[410px] h-[350px] border-gray border-x border-y rounded-md bg-white">
                            <h2 className="text-6xl font-semibold pl-[300px] py-6">05</h2>
                            <h5 className="font-semibold px-10 text-xl">Practical Projects and <br /> Assignments</h5>
                            <p className="px-10 py-4">Develop a portfolio showcasing your skills and abilities to potential employers.</p>
                            <button className="w-16 h-16 pl-3 border-x border-gray border-y rounded-md ml-[300px] mt-8 transition-all duration-500 hover:border-amber-500 hover:bg-gray">
                            <HiArrowUpRight className="text-primary w-10 h-8 :text-white " />
                            </button>
                        </li>
                        <li className="w-[410px] h-[350px] border-gray  border-x border-y rounded-md bg-white">
                            <h2 className="text-6xl font-semibold pl-[300px] py-6">06</h2>
                            <h5 className="font-semibold px-10 text-xl">Interactive Learning Environment</h5>
                            <p className="px-10 py-4">Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
                            <button className="w-16 h-16 pl-3 border-x border-gray border-y rounded-md ml-[300px] mt-8 transition-all duration-500 hover:border-amber-500 hover:bg-gray">
                            <HiArrowUpRight className="text-primary w-10 h-8 :text-white " />
                            </button>
                        </li>                        
                    </ul>
                </div>
            </section>

            <section>
            <h2 className="text-5xl font-semibold px-36 pt-24">Our Courses</h2>
                <div className="flex justify-around">
                <p className="px-8 py-4">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum <br /> eget habitasse in velit fringilla feugiat senectus in.</p>
                <button className="bg-white border w-24 h-12 py-2 px-4 transition-all border-gray duration-300  rounded-md hover:border-amber-500 hover:bg-white hover:text-primary">View All</button>
                </div>
                <div className="w-[1270px] ml-36">
                    <ul className="grid grid-cols-2 gap-3 mt-14">
                        <li className="w-[610px] h-[650px] border-x border-y border-gray rounded-md bg-white">
                            <img className="w-[560px] h-[300px] m-6 " src={Image} alt="" />
                            <button className="w-24 h-10 border-x border-y border-gray mt- mx-6 rounded-md  ">4 Weeks</button>
                            <button className="w-24 h-10 border-x border-y border-gray mt2  rounded-md">Beginner</button>
                            <span className="font-semibold text-xl pl-40">By John Smith</span>
                            <h5 className="font-semibold text-2xl px-6 py-6">Web Design Fundamentals</h5>
                            <p className="px-6">Learn the fundamentals of web design, including HTML, CSS, and responsive <br /> design principles. Develop the skills to create visually appealing and user- <br />
                            friendly websites.</p>
                            <button className="w-[560px] mx-6 h-12 font-semibold  my-6 rounded-md border-gray bg-gray transition-all duration-500 hover:bg-primary hover:border-amber-500 hover:text-white ">Get it Now</button>
                        </li>
                        <li className="w-[610px] h-[650px] border-x border-y border-gray rounded-md bg-white">
                            <img className="w-[560px] h-[300px] m-6 " src={Imagee} alt="" />
                            <button className="w-24 h-10 border-x border-y border-gray mt- mx-6 rounded-md  ">6 Weeks</button>
                            <button className="w-24 h-10 border-x border-y border-gray mt2  rounded-md">Intermediate</button>
                            <span className="font-semibold text-xl pl-40">By Emily Johnson</span>
                            <h5 className="font-semibold text-2xl px-6 py-6">UI/UX Design</h5>
                            <p className="px-6">Master the art of creating intuitive user interfaces (UI) and enhancing user <br /> experiences (UX). Learn design principles, wireframing, prototyping, and <br /> usability testing techniques.</p>
                            <button className="w-[560px] mx-6 h-12 font-semibold  my-6 rounded-md border-gray bg-gray transition-all duration-500 hover:bg-primary hover:border-amber-500 hover:text-white ">Get it Now</button>
                        </li>
                        <li className="w-[610px] h-[650px] border-x border-y border-gray rounded-md bg-white">
                            <img className="w-[560px] h-[300px] m-6 " src={Imageee} alt="" />
                            <button className="w-24 h-10 border-x border-y border-gray mt- mx-6 rounded-md  ">8 Weeks</button>
                            <button className="w-24 h-10 border-x border-y border-gray mt2  rounded-md">Intermediate</button>
                            <span className="font-semibold text-xl pl-40">By David Brown</span>
                            <h5 className="font-semibold text-2xl px-6 py-6">Mobile App Development</h5>
                            <p className="px-6">Dive into the world of  mobile app development. Learn to build native iOS and <br /> Android applications using industry-leading lorem Adam frameworks like Swift and Kotlin.</p>
                            <button className="w-[560px] mx-6 h-12 font-semibold  my-6 rounded-md border-gray bg-gray transition-all duration-500 hover:bg-primary hover:border-amber-500 hover:text-white ">Get it Now</button>
                        </li>
                        <li className="w-[610px] h-[650px] border-x border-y border-gray rounded-md bg-white">
                            <img className="w-[560px] h-[300px] m-6 " src={Imageeee} alt="" />
                            <button className="w-24 h-10 border-x border-y border-gray mt- mx-6 rounded-md  ">10 Weeks</button>
                            <button className="w-24 h-10 border-x border-y border-gray mt2  rounded-md">Beginner</button>
                            <span className="font-semibold text-xl pl-40">By Sarah Thompson</span>
                            <h5 className="font-semibold text-2xl px-6 py-6">Graphic Design for Beginners</h5>
                            <p className="px-6">Discover the fundamentals of graphic design, including typography, color <br /> theory, layout design, and image manipulation techniques. Create visually <br /> stunning designs for print and digital media.</p>
                            <button className="w-[560px] mx-6 h-12 font-semibold  my-6 rounded-md border-gray bg-gray transition-all duration-500 hover:bg-primary hover:border-amber-500 hover:text-white ">Get it Now</button>
                        </li>
                        <li className="w-[610px] h-[650px] border-x border-y border-gray rounded-md bg-white">
                            <img className="w-[560px] h-[300px] m-6 " src={Imageeeee} alt="" />
                            <button className="w-24 h-10 border-x border-y border-gray mt- mx-6 rounded-md  ">10 Weeks</button>
                            <button className="w-24 h-10 border-x border-y border-gray mt2  rounded-md">Intermediate</button>
                            <span className="font-semibold text-xl pl-40">By Michael Adams</span>
                            <h5 className="font-semibold text-2xl px-6 py-6">Front-End Web Development</h5>
                            <p className="px-6">Become proficient in front-end web development. Learn HTML, CSS, <br /> JavaScript, and popular frameworks like Bootstrap and React. Build <br /> interactive and responsive websites.</p>
                            <button className="w-[560px] mx-6 h-12 font-semibold  my-6 rounded-md border-gray bg-gray transition-all duration-500 hover:bg-primary hover:border-amber-500 hover:text-white ">Get it Now</button>
                        </li>
                        <li className="w-[610px] h-[650px] border-x border-y border-gray rounded-md bg-white">
                            <img className="w-[560px] h-[300px] m-6 " src={Imageeeeee} alt="" />
                            <button className="w-24 h-10 border-x border-y border-gray mt- mx-6 rounded-md  ">6 Weeks</button>
                            <button className="w-24 h-10 border-x border-y border-gray mt2  rounded-md">Advance</button>
                            <span className="font-semibold text-xl pl-40">By Jennifer Wilson</span>
                            <h5 className="font-semibold text-2xl px-6 py-6">Advanced JavaScript</h5>
                            <p className="px-6">Take your JavaScript skills to the next level. Explore advanced concepts like <br /> closures, prototypes, asynchronous programming, and ES6 features. Build <br /> complex applications with confidence.</p>
                            <button className="w-[560px] mx-6 h-12 font-semibold  my-6 rounded-md border-gray bg-gray transition-all duration-500 hover:bg-primary hover:border-amber-500 hover:text-white ">Get it Now</button>
                        </li>
                    </ul>
                </div>
            </section>
            
            <section>
            <h2 className="text-5xl font-semibold px-36 pt-24">Our Testimonials</h2>
                <div className="flex justify-around">
                <p className="px-8 py-4">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum <br /> eget habitasse in velit fringilla feugiat senectus in.</p>
                <button className="bg-white border w-24 h-12 py-2 px-4 transition-all border-gray duration-300  rounded-md hover:border-amber-500 hover:bg-white hover:text-primary">View All</button>
                </div>
                <div className="w-[1270px] ml-36">
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="w-[620px] h-[300px] border-x border-y border-gray rounded-md bg-white">
                            <p className="flex justify-center py-14 border-b-2 border-gray ">The web design course provided a solid foundation for me. The instructors <br /> were knowledgeable and supportive, and the interactive learning environment <br /> was engaging. I highly recommend it!</p>
                            <div className="flex   items-center ">
                            <img src={Sarah} alt="" className="ml-12  " />
                            <span className="font-semibold text-2xl px-2">Sarah L</span>
                            <button className="w-36 ml-52 h-12 font-semibold  my-6 rounded-md border-gray bg-gray transition-all duration-500 hover:bg-primary hover:border-amber-500 hover:text-white ">Read Full Story</button>
                            </div>
                        </div>
                        <div className="w-[620px] h-[300px] border-x border-y border-gray rounded-md bg-white">
                            <p className="flex justify-center py-14 border-b-2 border-gray ">The web design course provided a solid foundation for me. The instructors <br /> were knowledgeable and supportive, and the interactive learning environment <br /> was engaging. I highly recommend it!</p>
                            <div className="flex   items-center ">
                            <img src={Jason} alt="" className="ml-12  " />
                            <span className="font-semibold text-2xl px-2">Sarah L</span>
                            <button className="w-36 ml-52 h-12 font-semibold  my-6 rounded-md border-gray bg-gray transition-all duration-500 hover:bg-primary hover:border-amber-500 hover:text-white ">Read Full Story</button>
                            </div>
                        </div>
                        <div className="w-[620px] h-[300px] border-x border-y border-gray rounded-md bg-white">
                            <p className="flex justify-center py-14 border-b-2 border-gray ">The web design course provided a solid foundation for me. The instructors <br /> were knowledgeable and supportive, and the interactive learning environment <br /> was engaging. I highly recommend it!</p>
                            <div className="flex   items-center ">
                            <img src={Emily} alt="" className="ml-12  " />
                            <span className="font-semibold text-2xl px-2">Sarah L</span>
                            <button className="w-36 ml-52 h-12 font-semibold  my-6 rounded-md border-gray bg-gray transition-all duration-500 hover:bg-primary hover:border-amber-500 hover:text-white ">Read Full Story</button>
                            </div>
                        </div>
                        <div className="w-[620px] h-[300px] border-x border-y border-gray rounded-md bg-white">
                            <p className="flex justify-center py-14 border-b-2 border-gray ">The web design course provided a solid foundation for me. The instructors <br /> were knowledgeable and supportive, and the interactive learning environment <br /> was engaging. I highly recommend it!</p>
                            <div className="flex   items-center ">
                            <img src={Michael} alt="" className="ml-12  " />
                            <span className="font-semibold text-2xl px-2">Sarah L</span>
                            <button className="w-36 ml-52 h-12 font-semibold  my-6 rounded-md border-gray bg-gray transition-all duration-500 hover:bg-primary hover:border-amber-500 hover:text-white ">Read Full Story</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
            <h2 className="text-5xl font-semibold px-36 pt-24">Our Testimonials</h2>
                <div className="flex justify-around">
                <p className="px-8 py-4">Lorem ipsum dolor sit amet consectetur. Tempus etiam eget elit id  et. Cras eu sit dignissim lorem nibh et. Ac cum <br /> eget habitasse in velit fringilla feugiat senectus in.</p>
                <div className="w-[220px] h-16 flex justify-center items-center space-x-2 bg-white rounded-md border-gray font-semibold">
                    <button className="w-24 h-10 transition-all duration-500 rounded-md hover:bg-primary hover:text-white ">Monthly</button>
                    <button className="w-24 h-10 transition-all duration-500 rounded-md hover:bg-primary hover:text-white ">Yearly</button>
                </div>
                </div>
                <div className="w-[1270px] flex justify-around  h-[960px] bg-white ml-32 mt-8 rounded-md border-gray">
                    <div className="w-[570px] mt-12 rounded-md border-gray bg-whiting h-[880px] border">
                        <button className="w-[520px] mx-6 my-8 h-10 border-x border-y border-primary bg-orange rounded-md font-semibold transition-all duration-500 hover:bg-white hover:text-primary">Free Plan</button>
                        <h2 className="text-7xl font-semibold text-center">$0<span className="text-xl">/month</span></h2>
                        <div className="w-[520px] h-[650px] border-x border-y bg-absolute rounded-md border-gray mx-6 my-6">
                            <h5 className="text-2xl text-center py-8">Available Features</h5>
                            <div className="w-[480px] h-12 border mx-6 flex items-center  border-gray rounded-md mt-4">
                                <button className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }
                                </button>
                                <span className=""> Access to selected free courses.</span>
                                </div>
                            <div className="w-[480px] h-12 border mx-6 flex items-center border-gray rounded-md mt-4">
                                <button className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }
                                </button>
                                <span>Limited course materials and resources.</span>
                                </div>
                            <div className="w-[480px] h-12 border mx-6 flex items-center border-gray rounded-md mt-4">
                                <button className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }
                                </button>
                                <span> Basic community support.</span>
                                </div>
                            <div className="w-[480px] h-12 border mx-6 flex items-center border-gray rounded-md mt-4">
                                <button className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }
                                </button>
                                <span> No certification upon completion.</span>
                                </div>
                            <div className="w-[480px] h-12 border mx-6 flex items-center border-gray rounded-md mt-4">
                                <button className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }
                                </button>
                                <span>Ad-supported platform.</span></div>
                            <div className="w-[480px] h-12 border mx-6 flex items-center border-gray rounded-md mt-4">
                                <button className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }
                                </button>
                                <span> Access to exclusive Pro Plan community forums.</span>
                                </div>
                            <div className="w-[480px] h-12 border mx-6 flex items-center border-gray rounded-md mt-4">
                                <button className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }
                                </button>
                                <span> Early access to new courses and updates.</span>
                                </div>
                            <button className="w-[470px] mx-6 my-8 h-10 border-x border-y border-primary bg-primary text-white rounded-md font-semibold transition-all duration-500 hover:bg-white hover:text-primary">Free Plan</button>
                        </div>
                    </div>
                    <div className="w-[570px] mt-12 rounded-md border-gray bg-whiting h-[880px] border">
                        <button className="w-[520px] mx-6 my-8 h-10 border-x border-y border-primary bg-orange rounded-md font-semibold transition-all duration-500 hover:bg-white hover:text-primary">Free Plan</button>
                        <h2 className="text-7xl font-semibold text-center">$79<span className="text-xl">/month</span></h2>
                        <div className="w-[520px] h-[650px] border-x border-y bg-absolute rounded-md border-gray mx-6 my-6">
                            <h5 className="text-2xl text-center py-8">Available Features</h5>
                            <div className="w-[480px] h-12 border mx-6 flex items-center  border-gray rounded-md mt-4">
                                <button className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }
                                </button>
                                <span className="">Unlimited access to all courses.</span>
                                </div>
                            <div className="w-[480px] h-12 border mx-6 flex items-center border-gray rounded-md mt-4">
                                <button className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }
                                </button>
                                <span>Unlimited course materials and resources.</span>
                                </div>
                            <div className="w-[480px] h-12 border mx-6 flex items-center border-gray rounded-md mt-4">
                                <button className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }
                                </button>
                                <span>Priority support from instructors.</span>
                                </div>
                            <div className="w-[480px] h-12 border mx-6 flex items-center border-gray rounded-md mt-4">
                                <button className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }
                                </button>
                                <span>Course completion certificates.</span>
                                </div>
                            <div className="w-[480px] h-12 border mx-6 flex items-center border-gray rounded-md mt-4">
                                <button className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }
                                </button>
                                <span>Ad-free experience.</span></div>
                            <div className="w-[480px] h-12 border mx-6 flex items-center border-gray rounded-md mt-4">
                                <button onClick={toggleMenuu} className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }                                </button>
                                <span> Access to exclusive Pro Plan community forums.</span>
                                </div>
                            <div className="w-[480px] h-12 border mx-6 flex items-center border-gray rounded-md mt-4">
                                <button onClick={toggleMenu} className="w-8 h-8 bg-tertiary rounded-md border-none mx-4 border ">
                                    {
                                        isChecked ? (<IoClose  className="w-8 h-8 bg-white  text-black border-gray border-x border-y rounded-md" />) : (<MdCheck className="w-8 h-8 text-black borber-none " />)
                                    }
                                </button>
                                <span> Early access to new courses and updates.</span>
                                </div>
                            <button className="w-[470px] mx-6 my-8 h-10 border-x border-y border-primary bg-primary text-white rounded-md font-semibold transition-all duration-500 hover:bg-white hover:text-primary">Free Plan</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-[1270px] flex h-[850px] border-gray bg-white m-32 ">
                    <div className="w-[600px]">
                        <h2 className="text-5xl font-semibold pt-16 px-16">Frequently <br /> Asked Questions</h2>
                        <p className="text-xl  px-16">Still you have any questions? Contact our <br /> Team via support@skillbridge.com</p>
                        <button className="w-36 ml-16 h-12 font-semibold border-x border-y  my-6 rounded-md border-gray bg-white transition-all duration-500  hover:border-amber-500 hover:text-primary ">See All FAQ’s</button>
                    </div>
                    <div className="">
                        <div className="w-[600px] h-[300px] rounded-md mt-16 border-gray border-x border-y">
                            <div className="flex justify-around">
                                <p className="text-xl py-8 border-gray border-b-2">Can I enroll in multiple courses at once?</p>
                                <hr className="bg-black" />
                                <button className="w-8 m-8 border-b-2 h-8 p-2 bg-tertiary text-black border-none rounded-md ">
                                    <IoClose className="" />
                                </button>
                            </div>
                            <p className="text- px-8 pt-8">Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
                            <div className="w-[530px] flex justify-around items-center h-[70px] border-gray border-x border-y rounded-md  bg-whiting m-8">
                                <p className="text-xl">Enrollment Process for Different Courses</p>
                                <button className="w-12 h-12 transition-all duration-500 hover:bg-primary hover:text-white bg-white rounded-3xl"><GrFormNextLink className="w-12 h-6 " /></button>
                            </div>
                        </div>
                        <ul>
                            <li className="w-[600px] flex items-center mt-6 h-[80px] border-gray border-x border-y rounded-md ">
                                <p className="text-l font-semibold pl-8">What kind of support can I expect from instructors?</p>
                                <button className="w-8  ml-32 border-b-2 h-8 p-2 bg-tertiary text-black border-none rounded-md ">
                                    <FaPlus className="" />
                                </button>
                            </li>
                            <li className="w-[600px] flex  items-center mt-6 h-[80px] border-gray border-x border-y rounded-md ">
                                <p className="text-l pl-8 font-semibold">Are the  self-paced courses or do they have specific start and end  dates?</p>
                                <button className="w-8 m-8 border-b-2 h-8 p-2 bg-tertiary text-black border-none rounded-md ">
                                    <FaPlus className="" />
                                </button>
                            </li>
                            <li className="w-[600px] flex  items-center mt-6 h-[80px] border-gray border-x border-y rounded-md ">
                                <p className="text-l pl-8 font-semibold">Are there any prerequisites for the courses?</p>
                                <button className="w-8 ml-[182px] border-b-2 h-8 p-2 bg-tertiary text-black border-none rounded-md ">
                                    <FaPlus className="" />
                                </button>
                            </li>
                            <li className="w-[600px] flex  items-center mt-6 h-[80px] border-gray border-x border-y rounded-md ">
                                <p className="text-l pl-8 font-semibold">Can I download the course materials for offline access?</p>
                                <button className="w-8 ml-[100px] border-b-2 h-8 p-2 bg-tertiary text-black border-none rounded-md ">
                                    <FaPlus className="" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </section>
        </main>
    </>
  )
}

export default HomeMain