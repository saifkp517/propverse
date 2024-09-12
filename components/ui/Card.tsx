import React from "react";

export default function PriceCard({
  amount,
  isHolidayProperty = false,
}: Readonly<{ amount: string; isHolidayProperty?: boolean }>) {
  return (
    <div className="w-auto max-w-auto h-14 p-2 absolute z-20 dark:bg-neutral-800 bg-neutral-100 rounded-xl inline-flex items-center justify-start backdrop-blur-[10px] bg-background transition ease-in-out duration-150 cursor-pointer border hover:border-neutral-500/20 border-transparent">
      <div className="dark:text-neutral-300 text-neutral-700">
        {/* Conditional Label */}
        <div>
          <p className="text-xs font-normal">
            {isHolidayProperty ? "Per Share Cost" : "Investment Amount"}
          </p>
          <p className="text-2xl font-bold text-primary">{amount}</p>
        </div>
      </div>
    </div>
  );
}
