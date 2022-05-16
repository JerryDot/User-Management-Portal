import React from "react";

const Card = ({
  className,
  header,
  text,
  order,
  actionButton,
}: {
  className: string;
  header: string;
  text: string;
  order?: boolean;
  actionButton?: React.ReactNode;
}) => {
  return (
    <div className={className + " flex w-full justify-center items-center py-4 px-6"}>
      <div className='min-h-32 w-72 flex flex-row justify-between bg-white rounded-lg border border-gray-400 mb-6 py-2 px-4'>
        {actionButton && order && <div className=' min-w-fit align-middle'>{actionButton}</div>}
        <div className='pr-4'>
          <h4 tabIndex={0} className='focus:outline-none text-gray-800 font-bold mb-3'>
            {header}
          </h4>
          <p tabIndex={0} className='focus:outline-none text-gray-800 text-sm'>
            {text}
          </p>
        </div>
        {actionButton && !order && <div className=' min-w-fit align-middle'>{actionButton}</div>}
      </div>
    </div>
  );
};

export default Card;
