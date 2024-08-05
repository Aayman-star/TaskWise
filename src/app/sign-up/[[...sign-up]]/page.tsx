import React from "react";

import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="w-full bg-background">
      <div className="w-full lg:max-w-4xl lg:mx-auto min-h-[95vh] grid place-content-center">
        <SignUp />
      </div>
    </div>
  );
};
export default Page;
