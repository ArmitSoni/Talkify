// import { Resend } from "resend";
// import { ENV } from "./env.js";

// // export const resendClient = new Resend(ENV.RESEND_API_KEY);
// export const resend = { emails: { send: () => console.log("Email mock") } };

// export const sender = {
//   email: ENV.EMAIL_FROM,
//   name: ENV.EMAIL_FROM_NAME,
// };


// backend/src/lib/resend.js

// ---- mock resend.js for local dev ----
export const resendClient = {
  emails: {
    send: (options) => {
      console.log("Mock email sent:", options);
      return Promise.resolve({ success: true });
    },
  },
};

export const sender = {
  email: "no-reply@chatify.local",
  name: "Chatify App",
};
