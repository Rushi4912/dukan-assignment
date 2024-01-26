import { HelpCircle } from "lucide-react";
import { MessageSquareMore } from "lucide-react";
import { ChevronDownCircle } from "lucide-react";

const Nav = () => {
  return (
    <div className="flex flex-row  border p-5 items-center">
      <div className="flex flex-row gap-x-10">
        <h2>Payouts</h2>
        <div className="flex flex-row gap-x-2">
          <div>
            <HelpCircle className="w-[1rem] h-[1rem] m-1" />
          </div>
          <h3>How its works</h3>
        </div>
      </div>

      <input placeholder="Search features,tutorials,etc"></input>

      <div className="flex flex-row gap-x-5">
        <div className="w-[2.5rem] h-[2.5rem] border rounded-full ">
          <MessageSquareMore  className="w-[2rem]"/>
        </div>
        <div className="w-[2.5rem] h-[2.5rem] border rounded-full ">
          <ChevronDownCircle />
        </div>
      </div>
    </div>
  );
};

export default Nav;
