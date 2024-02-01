import { HelpCircle } from "lucide-react";
import { MessageSquareMore } from "lucide-react";
import { ChevronDownCircle } from "lucide-react";

const Nav = () => {
  return (
    <div className="flex flex-row  border p-5 items-center ml-40">
      <div className="flex flex-row gap-x-5 basis-1/2 ">
        <h2>Payouts</h2>
        <div className="flex flex-row gap-x-2">
          <div>
            <HelpCircle className="w-[1rem] h-[1rem] m-1" />
          </div>
          <h3>How its works</h3>
        </div>
      </div>

      <input className="basis-2/6 w-[2rem] border p-2 rounded-lg bg-gray-100 hover:border-gray-100" placeholder="Search features,tutorials,etc"></input>

      <div className="flex flex-row gap-x-5 basis-1/3 justify-end">
        <div className="w-[2.5rem] h-[2.5rem] border rounded-full bg-gray-200 ">
          <MessageSquareMore  className="w-[2rem] m-1"/>
        </div>
        <div className="w-[2.5rem] h-[2.5rem] border rounded-full bg-gray-200">
          <ChevronDownCircle className="w-[2rem] " />
        </div>
      </div>
    </div>
  );
};

export default Nav;

