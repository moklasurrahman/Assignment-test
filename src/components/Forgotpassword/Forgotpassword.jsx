import React from "react";
const Forgotpassword = ({setShow}) => {
  return (
    <section className="forgotPassword">
      <div className="items bg-white text-black w-[350px] p-5 overflow-hidden absolute top-[40px] left-0">
        <div className="heading flex justify-between mb-3">
          <span className="text-[20px] font capitalize">Password recovery</span>
          <span onClick={()=>setShow(false)} className="text-[130px] w-[25px]  h-[25px] bg-slate-500 flex justify-center rounded-[50px] items-center hover:bg-slate-600 cursor-pointer text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </div>

        <div className="body flex flex-col gap-[30px]">
          <p className="text-[13px]">
            Enter either the email address or username on the account and click
            Submit{" "}
          </p>
          <p className="text-[13px]">
            we'll email instructions on how reset your password
          </p>

          <div className="items">
          <form className="flex flex-col gap-[20px]">
            <div><input style={{borderBottom:"1px solid gray"}} className="w-full py-2 text-sm outline-none opacity-50 focus:border-blue-400" type="text" placeholder="Enter Email or Username Here" /> 
            </div>
            <button className="mb-[75px] w-fit py-[5px] px-[20px] text-[12px] text-white  bg-[#06b6d4]">Submit</button>
          </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Forgotpassword;
