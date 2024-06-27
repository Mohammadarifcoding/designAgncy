import React from "react";
import Container from "../../../Shared/Container/Container";

const SharkTank = () => {
  const SharkTankData = [
    {
      title: "Totally async",
      description:
        "Don't like meetings? We don't either; so much so that we've outlawed them completely.",
    },
    {
      title: "Manage with Trello",
      description:
        "Manage your design board using Trello. View active, queued and completed tasks with ease.",
    },
    {
      title: "Invite your team",
      description:
        "Invite your entire team, so anyone can submit requests and track their progress.",
    },
  ];
  return (
    <Container>
      <div className="my-20 flex flex-col items-center justify-center gap-10 lg:flex-row">
        {/* <div className="rounded-xl bg-white p-5 sm:p-8 md:p-16">
          <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl">
            "Design is everything, and these guys have nailed it."
          </h2>
          <div className="mt-5 flex items-end">
            <div className="flex-1 text-sm text-gray-800 sm:text-base md:text-xl">
              <h2>Kevin O'Leary</h2>
              <h2>Shark Tank</h2>
            </div>
            <div className="flex-1">
              <img
                loading="lazy"
                className="w-full"
                src="/SharkTank/sharktank.png"
                alt=""
              />
            </div>
          </div>
        </div> */}
        <div className="flex justify-center">
          <iframe
            className="h-[180.45px] w-full rounded-xl xsm:h-[188.7px] xsm:w-[291.55px] sm:h-[270.3px] sm:w-[416.5px] md:h-[307.7px] md:w-[548.25px] lg:h-[385.05px] lg:w-[685.1px]"
            src="https://www.youtube.com/embed/mjz_aWYv1t4?si=tPmfZaO_rI75Uj5Z"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col gap-10">
          {SharkTankData.map((item) => (
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl sm:text-4xl">{item.title}</h2>
              <p className="text-xl text-gray-700 sm:text-2xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SharkTank;
