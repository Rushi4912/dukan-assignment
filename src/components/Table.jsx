import { ArrowDownUp } from "lucide-react";
import { Download } from "lucide-react";

const Table = () => {
  return (
    <div className="flex flex-col p-15 border m-20 ml-40">
      {/* for buttons  */}
      <div className="flex flex-col gap-5 p-3">
        <h2 className="font-medium ml-8 text-xl text-[#1A181E]">
          Transactions | This Month
        </h2>
        <div className="flex flex-row ml-8 gap-5">
          <button className="w-[7rem] h-[2rem] border rounded-full bg-[#E6E6E6] text-[#808080]">
            Payouts (22)
          </button>
          <button className="w-[7rem] h-[2rem] border rounded-full bg-[#146EB4] text-[#FFFFFF]">
            Refunds (6)
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-between  p-7">
        <input placeholder="Order Id and Transaction Id" className="w-[17rem] h-[2rem] border rounded-lg"/>
        <div className="flex flex-row gap-x-3 ">
          <div className="flex flex-row  w-[5rem] h-[2rem] gap-x-2 p-1 border rounded-lg">
            <button>Sort</button>
           
          </div>
          <div><Download/></div>
        </div>
      </div>
    </div>
  );
};

export default Table;
