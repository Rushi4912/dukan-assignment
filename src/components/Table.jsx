import { ArrowDownUp } from "lucide-react";
import { Download } from "lucide-react";
import { Search } from "lucide-react";

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
        <div className="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-lg"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
          </svg>
          <input
            type="text"
            placeholder="Order ID or transactions ID"
            className="bg-transparent outline-none w-full"
          />
        </div>

        <div className="flex flex-row gap-x-3 ">
          <button className="flex flex-row gap-x-2 border w-[5rem] p-1 rounded-md">
            <h2 className="font-light text-lg">Sort</h2>
            <div>
              <ArrowDownUp className="w-[1rem] mt-1" />
            </div>
          </button>

          <button className="w-[2.5rem] border rounded-md">
            <div>
              <Download />
            </div>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Table;
