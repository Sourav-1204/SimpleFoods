import React from "react";

export default function BookForm() {
  return (
    <div className="relative md:w-[45%] w-[90%] flex flex-col items-center gap-5 shadow-[0px_0px_15px_#dddddd] px-5 py-8 md:py-10 rounded-lg bg-white">
      <div className="w-full flex md:flex-row flex-col items-center md:gap-5 gap-3">
        <div className="md:w-[50%] w-full flex flex-col gap-3">
          <p className="text-[var(--tirtiary-text-color)] font-bold">Date</p>
          <input
            type="Date"
            className="w-full rounded-full border border-[var(--fourth-text-color)] py-3 px-5 outline-0"
          />
        </div>
        <div className="md:w-[50%] w-full flex flex-col gap-3">
          <p className="text-[var(--tirtiary-text-color)] font-bold">Time</p>
          <input
            type="time"
            className="w-full rounded-full border border-[var(--fourth-text-color)] py-3 px-5 outline-0"
          />
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col items-center gap-5">
        <div className="md:w-[50%] w-full flex flex-col gap-3">
          <p className="text-[var(--tirtiary-text-color)] font-bold">Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-full border border-[var(--fourth-text-color)] py-3 px-5 outline-0"
          />
        </div>
        <div className="md:w-[50%] w-full flex flex-col gap-3">
          <p className="text-[var(--tirtiary-text-color)] font-bold">Phone</p>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full rounded-full border border-[var(--fourth-text-color)] py-3 px-5 outline-0"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <p className="text-[var(--tirtiary-text-color)] font-bold">
          Total Person
        </p>
        <input
          type="number"
          placeholder="0"
          className="w-full rounded-full border border-[var(--fourth-text-color)] py-3 px-5 outline-0"
        />
      </div>
      <div className="w-full flex items-center">
        <button className="w-full rounded-full text-white bg-[var(--primary-button-color)] py-3 mt-2">
          Send
        </button>
      </div>
    </div>
  );
}
