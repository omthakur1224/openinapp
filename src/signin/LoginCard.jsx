import React from 'react';

const LoginCard = () => {
  return (
    <div className="sign-in w-full h-[348px] shrink-0 bg-[#FFFFFF] rounded-[10px]">
      <form className='flex flex-col items-start p-4 w-[365px] pl-3'>
        <div className="mb-4 w-full">
          <lable className='flex font-bold mb-2 justify-start ali'>Email address</lable>
          <input type="text" className="flex justify-start w-full h-[48px] rounded-[10px] bg-[#F5F5F5] "/>
        </div>

        <div className="mb-4 w-full">
          <label className='font-bold mb-2 flex justify-start'>Password</label>
          <input type="password" className="flex justify-start w-full h-[48px] rounded-[10px] bg-[#F5F5F5]"/>
        </div>

        <div className="w-full">
          <label className='flex justify-start w-full font-bold mb-2'>Forgot password</label>
          <input
            type="button"
            value={"Submit"}
            onClick={() => {}}
            className="w-full h-[48px] bg-[#605BFF] text-white text-[16px] font-bold rounded-[10px]"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginCard;


