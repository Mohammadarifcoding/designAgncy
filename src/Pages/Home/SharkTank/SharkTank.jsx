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
      <div className="my-20 flex flex-col justify-center gap-10 lg:flex-row">
        <div className="rounded-xl bg-white p-5 sm:p-8 md:p-16">
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
