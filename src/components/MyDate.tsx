import React from "react";

const MyDate = () => {
  const date = new Date() as any;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const;
  const formattedDate = date.toLocaleString("en-US", options);
  console.log(formattedDate);
  return (
    <div>
      <h3 className="font-semibold text-2xl italic">{formattedDate}</h3>
    </div>
  );
};

export default MyDate;
