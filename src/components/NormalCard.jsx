import { HelpCircle } from "lucide-react";

const NormalCard = ({ amountStatus, amount,orderCount }) => {
  return (
    <div className="flex flex-col w-[24rem] h-[9rem] border  rounded-lg">
      <div className="flex flex-row gap-x-2 p-5">
        <h2>{amountStatus}</h2>
        <div>
          <HelpCircle className="w-[1rem] h-[1rem] m-1" />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <h2 className="font-semibold text-3xl p-2">{amount}</h2>
        <h2 className="text-[#146EB4] underline p-2">{orderCount}</h2>
      </div>
    </div>
  );
};

export default NormalCard;
