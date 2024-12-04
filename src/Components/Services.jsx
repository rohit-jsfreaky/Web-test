import React from "react";

const Services = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col gap-3 justify-center items-center p-14">
        <h1 className="font-semibold text-2xl md:text-5xl lg:text-5xl">WHAT WE DO ?</h1>
        <div className="flex items-center w-72">
          <div className="h-[4px] w-full bg-purple-800"></div>
          <div className="h-3 w-16 bg-purple-800"></div>
          <div className="h-[4px] w-full bg-purple-800"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex justify-center items-center flex-col py-8 px-10 gap-4">
          <img
            src="service1.png"
            height={100}
            width={100}
            alt=""
            className="float-animation"
          />
          <h2 className="font-[600] text-2xl">CREATIVITY</h2>
          <p className="text-center px-3 md:px-20">
            Creativity drives our approach to developing unique and effective
            solutions. We harness imaginative thinking to deliver innovative
            strategies and breakthrough results.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col py-8 px-10 gap-4">
          <img
            src="service2.png"
            height={100}
            width={100}
            alt=""
            className="float-animation"
          />
          <h2 className="font-[600] text-2xl">SUPERIORITY</h2>
          <p className="text-center  px-3 md:px-20">
            Superiority reflects our commitment to delivering exceptional
            standards and outstanding results. We ensure that every solution and
            service we provide stands out in quality and effectiveness.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col py-8 px-10 gap-4">
          <img
            src="service3.png"
            height={100}
            width={100}
            alt=""
            className="float-animation"
          />
          <h2 className="font-[600] text-2xl">COORDINTAION</h2>
          <p className="text-center  px-3 md:px-20">
            Coordination underscores our focus on seamless teamwork and
            effective integration. We work closely with our clients to ensure
            that every project achieves optimal results through
            well-orchestrated efforts.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col py-8 px-10 gap-4">
          <img
            src="service1.png"
            height={100}
            width={100}
            alt=""
            className="float-animation"
          />
          <h2 className="font-[600] text-2xl">ADAPTABLE PARTNERSHIP</h2>
          <p className="text-center  px-3 md:px-20">
            Adaptable Partnerships emphasize our commitment to tailoring our
            services to meet diverse client needs. We adjust our approach to
            ensure flexibility and responsiveness in every engagement.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-1 text-lg font-medium transition-colors">
          All Services
        </button>
      </div>
    </>
  );
};

export default Services;
