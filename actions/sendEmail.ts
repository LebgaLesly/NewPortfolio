"use server";

//import dependencies
import React from 'react'
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";

//import components
import ContactFormEmail from "@/email/contact-from-email";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
  const email = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(email, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data
  try {
    data = await resend.emails.send({
      from: "Lesly <onboarding@resend.dev>",
      to: "leslysoftwarespecialist@gmail.com",
      subject: " Message from Portfolio",
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string,
      })
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data,
  }
};
