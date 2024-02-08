import Abstract from "../assets/abstract.svg"
import Zapier from "../assets/zapier.svg"
import Spotify from "../assets/spotify.svg"
import Zom from "../assets/zom.svg"
import Amazon from "../assets/amazon.svg"
import Adobe from "../assets/adobe.svg"
import Notion from "../assets/notion.svg"
import Netflix from "../assets/netflix.svg"

const HomeHeader = () => {
  return (
    <>
    <header className="bg-whiting  ">
        <div className="flex justify-center  rounded-md items-center w-[630px] h-20 mx-[460px] bg-white mt-16">
        <img className="mt-[-100px] ml-[-50px]" src={Abstract} alt="" />
            <img src="./assets/icon.svg" alt="" />
            <h2 className="text-4xl font-semibold px-4">  <span className="text-primary ">Unlock</span> Your Creative Potential</h2>
        </div>
        
        <div>
            <span className="text-3xl  flex justify-center mt-8 font-medium size- ">with Online Design and Development Courses.</span>
            <p className="text-center pt-2">Learn from Industry Experts and Enhance Your Skills.</p>
        </div>

        <div className="flex justify-center mt-12 space-x-4">
            <button className="bg-primary border w-36 h-12 py-2 px-4 transition-all duration-300 text-white rounded-md hover:border-amber-500 hover:bg-white hover:text-primary">Explore Courses</button>
            <button className="bg-white border w-32 h-12 py-2 px-4 transition-all border-gray duration-300  rounded-md hover:border-amber-500 hover:bg-white hover:text-primary">View Pricing</button>
        </div>

        <div className="w-[1300px] mx-32 flex justify-around items-center border-x border-y border-gray rounded-md mt-20 bg-white h-28 ">
            <img className="w-40 border-gray border-r-2  h-12 " src={Spotify} alt="" />
            <img className="w-40 border-gray border-r-2  h-12 " src={Zapier} alt="" />
            <img className="w-40 border-gray border-r-2  h-12 " src={Zom} alt="" />
            <img className="w-40 border-gray border-r-2  h-12 " src={Amazon} alt="" />
            <img className="w-40 border-gray border-r-2  h-12 " src={Adobe} alt="" />
            <img className="w-40 border-gray border-r-2  h-12 " src={Notion} alt="" />
            <img className="w-40  h-12 " src={Netflix} alt="" />
        </div>
    </header>
    </>
  )
}

export default HomeHeader