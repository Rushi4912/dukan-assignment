

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
    </div>
  );
}

export default Table