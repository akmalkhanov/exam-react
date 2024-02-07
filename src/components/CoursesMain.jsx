import Arxitektor from "../assets/arxitektor.png";
import Pencil from "../assets/pencil.png";
import Notbook from "../assets/notbook.png";
import Table from "../assets/table.png";
import Phone from "../assets/phone.png";
import Marker from "../assets/marker.png";
import Mobile from "../assets/mobile.png";
import App from "../assets/app.png";
import Development from "../assets/development.png";
import Graphic from "../assets/graphic.png";
import Ideas from "../assets/ideas.png";
import Creative  from "../assets/creative.png";
import Anna from "../assets/anna.png";
import Sara from "../assets/sara.png";
import Enni from "../assets/enni.png"


const CoursesMain = () => {
  return (
    <>
    <main>
        <section className="w-[1270px] h-[900px] border-gray border-x border-y rounded-md m-32 bg-white ">
            <h3 className="pl-10 pt-12 text-2xl font-semibold">Web Design Fundamentals</h3>
            <div className="w-[1270px] h-20  flex justify-around">
                <p className="pl-2 py-2">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and <br /> user-friendly websites.</p>
                <button className="w-32 h-12 border-gray border-y border-x rounded-md hover:border-amber-500 hover:bg-white hover:text-primary transition-all duration-500"><a href="webdesign">View Course</a></button>
            </div>
            <div className="w-[1200px] h-[350px] m-8  flex justify-between ">
                <img className="w-[380px] h-[350px]" src={Arxitektor} alt="" />
                <img className="w-[380px] h-[350px]" src={Pencil} alt="" />
                <img className="w-[380px] h-[350px]" src={Notbook} alt="" />
            </div>
            <div>
                <button className="w-32 ml-8 h-10 border-gray  rounded-md border-y border-x">4 Weeks</button>
                <button className="w-32 ml-4 h-10 border-gray  rounded-md border-y border-x">Beginner</button>
                <span className="text-xl ml-[800px] font-semibold">By John Smith</span>
            </div>
            <div className="w-[1200px] h-[220px] border-gray rounded-md border-x border-y m-8">
                <h2 className="text-2xl font-semibold p-4">Curriculum</h2>
                <ul className="flex">
                <li className="w-[240px] h-[140px] ">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">01</h2>
                    <p className="pl-4">Introduction to HTML</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pl-4 pt-4 ">02</h2>
                    <p className="pl-4">Styling with CSS</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">03</h2>
                    <p className="pl-4">Introduction to <br /> Responsive Design</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">04</h2>
                    <p className="pl-4">Design Principles for <br /> Web</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pl-4 pt-4 ">05</h2>
                    <p className="pl-4">Building a Basic <br /> Website</p>
                </li>

                </ul>
            </div>
        </section>

        <section className="w-[1270px] h-[900px] border-gray border-x border-y rounded-md ml-32 bg-white ">
            <h3 className="pl-10 pt-12 text-2xl font-semibold">UI/UX Design</h3>
            <div className="w-[1270px] h-20  flex justify-around">
                <p className="pl-2 py-2">Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, <br /> and usability testing techniques.</p>
                <button className="w-32 h-12 border-gray border-y border-x rounded-md hover:border-amber-500 hover:bg-white hover:text-primary transition-all duration-500"><a href="uiux">View Course</a></button>
            </div>
            <div className="w-[1200px] h-[350px] m-8  flex justify-between ">
                <img className="w-[380px] h-[350px]" src={Table} alt="" />
                <img className="w-[380px] h-[350px]" src={Phone} alt="" />
                <img className="w-[380px] h-[350px]" src={Marker} alt="" />
            </div>
            <div>
                <button className="w-32 ml-8 h-10 border-gray  rounded-md border-y border-x">6 Weeks</button>
                <button className="w-32 ml-4 h-10 border-gray  rounded-md border-y border-x">Intermediate</button>
                <span className="text-xl ml-[760px] font-semibold">By Emily Johnson</span>
            </div>
            <div className="w-[1200px] h-[220px] border-gray rounded-md border-x border-y m-8">
                <h2 className="text-2xl font-semibold p-4">Curriculum</h2>
                <ul className="flex">
                <li className="w-[240px] h-[140px] ">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">01</h2>
                    <p className="pl-4">Introduction to UI/UX <br /> Design</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pl-4 pt-4 ">02</h2>
                    <p className="pl-4">User Research and <br /> Personas</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">03</h2>
                    <p className="pl-4">Wireframing and <br /> Prototyping</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">04</h2>
                    <p className="pl-4">Visual Design and <br /> Branding</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pl-4 pt-4 ">05</h2>
                    <p className="pl-4">Usability Testing and <br /> Iteration</p>
                </li>

                </ul>
            </div>
        </section>

        <section className="w-[1270px] h-[900px] border-gray border-x border-y rounded-md mt-32 ml-32 bg-white ">
            <h3 className="pl-10 pt-12 text-2xl font-semibold">Mobile App Development</h3>
            <div className="w-[1270px] h-20  flex justify-around">
                <p className="pl-2 py-2">Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift <br /> and Kotlin.</p>
                <button className="w-32 h-12 border-gray border-y border-x rounded-md hover:border-amber-500 hover:bg-white hover:text-primary transition-all duration-500"><a href="mobile">View Course</a></button>
            </div>
            <div className="w-[1200px] h-[350px] m-8  flex justify-between ">
                <img className="w-[380px] h-[350px]" src={Mobile} alt="" />
                <img className="w-[380px] h-[350px]" src={App} alt="" />
                <img className="w-[380px] h-[350px]" src={Development} alt="" />
            </div>
            <div>
                <button className="w-32 ml-8 h-10 border-gray  rounded-md border-y border-x">8 Weeks</button>
                <button className="w-32 ml-4 h-10 border-gray  rounded-md border-y border-x">Intermediate</button>
                <span className="text-xl ml-[780px] font-semibold">By David Brown</span>
            </div>
            <div className="w-[1200px] h-[220px] border-gray rounded-md border-x border-y m-8">
                <h2 className="text-2xl font-semibold p-4">Curriculum</h2>
                <ul className="flex">
                <li className="w-[240px] h-[140px] ">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">01</h2>
                    <p className="pl-4">Introduction to Mobile <br /> App Development</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pl-4 pt-4 ">02</h2>
                    <p className="pl-4">Fundamentals of Swift <br /> Programming (iOS)</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">03</h2>
                    <p className="pl-4">Fundamentals of <br /> Kotlin Programming <br /> (Android)</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">04</h2>
                    <p className="pl-4">Building User <br /> Interfaces</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pl-4 pt-4 ">05</h2>
                    <p className="pl-4">App Deployment and Testing</p>
                </li>

                </ul>
            </div>
        </section>


        <section className="w-[1270px] h-[900px] border-gray border-x border-y rounded-md mt-32 ml-32 bg-white ">
            <h3 className="pl-10 pt-12 text-2xl font-semibold">Graphic Design for Beginners</h3>
            <div className="w-[1270px] h-20  flex justify-around">
                <p className="pl-2 py-2">Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create <br /> visually stunning designs for print and digital media.</p>
                <button className="w-32 h-12 border-gray border-y border-x rounded-md hover:border-amber-500 hover:bg-white hover:text-primary transition-all duration-500"><a href="graphic">View Course</a></button>
            </div>
            <div className="w-[1200px] h-[350px] m-8  flex justify-between ">
                <img className="w-[380px] h-[350px]" src={Graphic} alt="" />
                <img className="w-[380px] h-[350px]" src={Ideas} alt="" />
                <img className="w-[380px] h-[350px]" src={Creative} alt="" />
            </div>
            <div>
                <button className="w-32 ml-8 h-10 border-gray  rounded-md border-y border-x">10 Weeks</button>
                <button className="w-32 ml-4 h-10 border-gray  rounded-md border-y border-x">Beginner</button>
                <span className="text-xl ml-[730px] font-semibold">By Sarah Thompson</span>
            </div>
            <div className="w-[1200px] h-[220px] border-gray rounded-md border-x border-y m-8">
                <h2 className="text-2xl font-semibold p-4">Curriculum</h2>
                <ul className="flex">
                <li className="w-[240px] h-[140px] ">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">01</h2>
                    <p className="pl-4">Introduction to <br /> Graphic Design</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pl-4 pt-4 ">02</h2>
                    <p className="pl-4">Typography and Color <br /> Theory</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">03</h2>
                    <p className="pl-4">Layout Design and <br /> Composition</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">04</h2>
                    <p className="pl-4">Image Editing and <br /> Manipulation</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pl-4 pt-4 ">05</h2>
                    <p className="pl-4">Designing for Print and <br /> Digital Media</p>
                </li>

                </ul>
            </div>
        </section>

        
        <section className="w-[1270px] h-[900px] border-gray border-x border-y rounded-md mt-32 ml-32 bg-white ">
            <h3 className="pl-10 pt-12 text-2xl font-semibold">Front-End Web Development</h3>
            <div className="w-[1270px] h-20  flex justify-around">
                <p className="pl-2 py-2">Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build <br /> interactive and responsive websites.</p>
                <button className="w-32 h-12 border-gray border-y border-x rounded-md hover:border-amber-500 hover:bg-white hover:text-primary transition-all duration-500"><a href="front">View Course</a></button>
            </div>
            <div className="w-[1200px] h-[350px] m-8  flex justify-between ">
                <img className="w-[380px] h-[350px]" src={Anna} alt="" />
                <img className="w-[380px] h-[350px]" src={Sara} alt="" />
                <img className="w-[380px] h-[350px]" src={Enni} alt="" />
            </div>
            <div>
                <button className="w-32 ml-8 h-10 border-gray  rounded-md border-y border-x">10 Weeks</button>
                <button className="w-32 ml-4 h-10 border-gray  rounded-md border-y border-x">Intermediate</button>
                <span className="text-xl ml-[750px] font-semibold">By Michael Adams</span>
            </div>
            <div className="w-[1200px] h-[220px] border-gray rounded-md border-x border-y m-8">
                <h2 className="text-2xl font-semibold p-4">Curriculum</h2>
                <ul className="flex">
                <li className="w-[240px] h-[140px] ">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">01</h2>
                    <p className="pl-4">HTML Fundamentals</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pl-4 pt-4 ">02</h2>
                    <p className="pl-4">CSS Styling and <br /> Layouts</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">03</h2>
                    <p className="pl-4">JavaScript Basics</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pt-4 pl-4 ">04</h2>
                    <p className="pl-4">Building Responsive <br /> Websites</p>
                </li>
                <li className="w-[240px] h-[140px] border-l-2 border-gray">
                    <h2 className="text-5xl font-semibold pl-4 pt-4 ">05</h2>
                    <p className="pl-4">Introduction to <br /> Bootstrap and React</p>
                </li>

                </ul>
            </div>
        </section>
        
        
    </main>
    </>
  )
}

export default CoursesMain