import { HelpCircle } from "lucide-react";
import { ChevronRight } from "lucide-react";

const StyleCard = ({ amount, order }) => {
  return (
    <div className=" flex flex-col w-[27rem] h-[9rem] border rounded-lg">
      <div className="flex flex-col p-6 gap-3  bg-blue-800 border rounded-t-lg">
        <div className="flex flex-row gap-2">
          <h2 className="text-white font-medium">Next Payout</h2>
          <div>
            <HelpCircle className="w-[1rem] h-[1rem] m-1 text-white" />
          </div>
        </div>
        <div className="flex flex-row justify-between ">
          <h2 className="text-white">{amount}</h2>
          <div className="flex flex-row ">
            <h2 className="text-white">{order}orders</h2>
            <div>
              <ChevronRight className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default StyleCard;
