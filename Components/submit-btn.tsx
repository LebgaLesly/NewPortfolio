"use client";

import React from "react";
import { BiSolidPaperPlane } from "react-icons/bi";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className=" group flex items-center justify-center gap-2  h-[3rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 w-32 disabled:scale-100 disabled:bg-opacity-65  dark:bg-white dark:bg-opacity-10"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <BiSolidPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
