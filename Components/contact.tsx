"use client";

//import dependencies
import React, { useState } from "react";
import { motion } from "framer-motion";

//import components
import useSectionView from "@/hooks/usesectionview";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitButton from "./submit-btn";

const Contact = () => {
  const { ref } = useSectionView("Contact", 0.5);

  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setSenderEmail("");
    setMessage("");
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="max-w-[53rem] scroll-mt-28 text-center sm:mb-28 mb-20 w-[min(100%, 38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly through{" "}
        <a className="underline" href="mailto:leslysoftwarespecialis@gmail.com">
          leslysoftwarespecialist@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          className="h-14 rounded-lg border border-black/10 pl-3 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your Email"
          required
          maxLength={500}
          name="senderEmail"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-black"
          placeholder="Your Message"
          required
          maxLength={500}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
