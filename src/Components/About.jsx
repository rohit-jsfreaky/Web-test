import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center p-14">
        <h1 className="font-semibold text-2xl md:text-5xl lg:text-5xl">WHY CHOOSE US ?</h1>
        <div className="flex items-center w-72">
          <div className="h-[4px] w-full bg-purple-800"></div>
          <div className="h-3 w-16 bg-purple-800"></div>
          <div className="h-[4px] w-full bg-purple-800"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10 gap-6 md:px-24 ">
        <div>
          <h1 className="font-semibold text-4xl mb-2">Why we are different</h1>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li className="">
              <p className="text-[10px] md:text-lg">
                Our company stands apart by integrating innovation with
                sustainability, ensuring every product is crafted with the
                future in mind.
              </p>
            </li>
            <li className="text-[10px] md:text-lg">
              <p>
                We value transparency, openly sharing our processes, progress,
                and setbacks with our community.
              </p>
            </li>
            <li className="text-[10px] md:text-lg">
              <p>
                Unlike others, we prioritize human connection in every
                interaction, creating authentic relationships with both clients
                and employees.
              </p>
            </li>
            <li className="text-[10px] md:text-lg">
              <p>
                We set ourselves apart by blending cutting-edge technology with
                a human-centered approach, delivering results that matter
              </p>
            </li>
            <li className="text-[10px] md:text-lg">
              <p>
                We are driven by purpose, committed to making a meaningful
                impact beyond just profits.
              </p>
            </li>
            <li className="text-[10px] md:text-lg">
              <p>
                What makes us unique is our commitment to continuous learning,
                allowing us to constantly improve and innovate in our field.
              </p>
            </li>
            <li className="text-[10px] md:text-lg">
              <p>
                Our company differs by focusing on collaboration over
                competition, fostering a culture where everyone thrives
                together.
              </p>
            </li>
            <li className="text-[10px] md:text-lg">
              <p>
                We redefine excellence by consistently exceeding expectations,
                delivering high-quality services that inspire trust.
              </p>
            </li>
          </ul>
        </div>

        <div>
            <img src="network.png" className="float-animation" alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
