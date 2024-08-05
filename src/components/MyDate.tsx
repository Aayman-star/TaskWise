import { raleway } from "@/lib/fonts";

const MyDate = () => {
  const date = new Date() as any;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const;
  const formattedDate = date.toLocaleString("en-US", options);
  // console.log(formattedDate);
  return (
    <div className={`${raleway.className}`}>
      <h3 className="font-semibold text-[1.35rem] md:text-3xl text-primary">
        {formattedDate}
      </h3>
    </div>
  );
};

export default MyDate;
