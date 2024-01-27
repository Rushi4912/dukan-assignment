import { HelpCircle } from "lucide-react";
import { ChevronRight } from "lucide-react";

const StyleCard = ({ amount, order }) => {
  return (
    <div className=" flex flex-col w-[29rem] h-[8rem] border rounded-lg">
      <div className="flex flex-col p-8 gap-3  bg-[#146EB4] hover:bg-[#0E4F82]  border rounded-t-lg">
        <div className="flex flex-row gap-2">
          <h2 className="text-white font-medium">Next Payout</h2>
          <div>
            <HelpCircle className="w-[1rem] h-[1rem] m-1 text-white" />
          </div>
        </div>
        <div className="flex flex-row justify-between ">
          <h2 className="text-white text-3xl">{amount}</h2>
          <div className="flex flex-row ">
            <h2 className="text-white">{order}orders</h2>
            <div>
              <ChevronRight className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between bg-[#0E4F82] p-3 rounded-b-lg">
        <h2 className="font-normal text-white">Next Payment Date :</h2>
        <h2 className="font-normal text-white">Today,4:00 PM</h2>
      </div>
    </div>
  );
};

export default StyleCard;
