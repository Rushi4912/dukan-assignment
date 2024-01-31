import StyleCard from './StyleCard';
import NormalCard from './NormalCard';
import { ChevronDown } from "lucide-react";
const Hero = () => {
  return (
    <div className="flex flex-col ml-40 ">
      {/* first div  */}
      <div className="flex flex-row  gap-x-10 mt-10 justify-between">
        <h2 className="text-xl font-normal ml-10">Overwiew</h2>

        <div className="flex flex-row mr-10 border w-[8rem]  h-[2rem] p-1 rounded-md p-2">
          <h2>This Month</h2>
          <div>
            <ChevronDown />
          </div>
        </div>
      </div>

      {/* card div  */}
      <div className="flex flex-row gap-x-10 mt-8 ml-10 sm:flex-wrap">
        <StyleCard amount="₹2,312.23" order="23" />
        <NormalCard amountStatus="Amount Pending" amount="₹92,312.20"  orderCount='13 Orders'/>
        <NormalCard amountStatus="Amount Processed " amount="₹23,92,312.19" />
      </div>
    </div>
  );
}

export default Hero