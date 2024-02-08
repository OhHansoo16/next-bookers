import React from "react";
import { signIn } from "next-auth/react";

export const Login = () => {
  return (
    <>
      <button
        onClick={() => signIn("github, {callbackUrl: window.location.origin}")}
      >
        Log in
      </button>
    </>
  );
};
