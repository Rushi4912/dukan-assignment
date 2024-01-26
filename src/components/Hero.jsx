import StyleCard from './StyleCard';
import NormalCard from './NormalCard';
import { ChevronDown } from "lucide-react";
const Hero = () => {
  return (
    <div className="flex flex-col ml-40 ">

       {/* first div  */}
      <div className="flex flex-row  gap-x-10 mt-10 justify-between">
        <h2 className="text-xl font-normal ml-10">Overwiew</h2>

        <div className="flex flex-row mr-10 border w-[8rem]  h-[2rem] p-1 rounded-md">
          <h2>This Month</h2>
           <div><ChevronDown/></div>
        </div>
      </div>

      {/* card div  */}
      <div className='flex flex-row gap-x-10 mt-8 ml-10'>
          <StyleCard amount='2,300' order='23'/>
          <NormalCard/>
          <NormalCard/>

      </div>


    </div>
  )
}

export default Hero