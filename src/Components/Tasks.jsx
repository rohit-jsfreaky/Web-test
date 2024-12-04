import React from "react";

const Tasks = () => {
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center p-14">
        <h1 className="font-semibold  text-2xl md:text-5xl lg:text-5xl">HERE IS TASK</h1>
        <div className="flex items-center w-72">
          <div className="h-[4px] w-full bg-purple-800"></div>
          <div className="h-3 w-16 bg-purple-800"></div>
          <div className="h-[4px] w-full bg-purple-800"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
        <div className="border rounded-lg flex-col md:flex-row lg:flex-row justify-center items-center shadow-2xl flex p-5 md:mr-7 md:ml-24 lg:ml-24 gap-2 float-animation">
          <div>
            <img src="task1.jpeg" height={200} width={200} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">Data Scrapping</h2> 
            <p>
              Basic requirements - 20+ age, Good typing skills, Basic English,
              Android mobile required with good internet connectivity.
            </p>
            <p>Earning potential: 40000/-</p>
          </div>
        </div>
        <div className="border rounded-lg flex-col md:flex-row lg:flex-row justify-center items-center shadow-2xl flex md:ml-7 p-5 md:mr-24 lg:mr-24 gap-2 float-animation">
          <div>
            <img src="task1.jpeg" height={200} width={200} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">Data Scrapping</h2> 
            <p>
              Basic requirements - 20+ age, Good typing skills, Basic English,
              Android mobile required with good internet connectivity.
            </p>
            <p>Earning potential: 40000/-</p>
          </div>
        </div>
        <div className="border rounded-lg flex-col md:flex-row lg:flex-row justify-center items-center shadow-2xl flex p-5 md:mr-7 md:ml-24 lg:ml-24 gap-2 float-animation">
          <div>
            <img src="task1.jpeg" height={200} width={200} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">Data Scrapping</h2> 
            <p>
              Basic requirements - 20+ age, Good typing skills, Basic English,
              Android mobile required with good internet connectivity.
            </p>
            <p>Earning potential: 40000/-</p>
          </div>
        </div>
        <div className="border rounded-lg shadow-2xl flex-col md:flex-row lg:flex-row justify-center items-center flex md:ml-7 p-5 md:mr-24 lg:mr-24 gap-2 float-animation">
          <div>
            <img src="task1.jpeg" height={200} width={200} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">Data Scrapping</h2> 
            <p>
              Basic requirements - 20+ age, Good typing skills, Basic English,
              Android mobile required with good internet connectivity.
            </p>
            <p>Earning potential: 40000/-</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
