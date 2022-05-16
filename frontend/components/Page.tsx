import React from "react";

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gray-200 flex '>
      <div className='ml-4 w-full p-4 min-h-screen'>{children}</div>
    </div>
  );
};

export default Page;
