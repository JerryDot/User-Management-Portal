import React from "react";

const HeaderCard = ({
  header,
  navOption,
  actionButton,
}: {
  header: string;
  navOption?: React.ReactNode;
  actionButton?: React.ReactNode;
}) => {
  return (
    <div className=' w-full items-center align-center rounded-lg bg-white py-8 px-4'>
      <div>
        <div className='max-w-full h-16 align-middle justify-between bg-white rounded-lg py-5 px-4'>
          <div className='flex justify-between'>
            {navOption}
            <p className='font-bold text-3xl'>{header}</p>
            {actionButton}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
