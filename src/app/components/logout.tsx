import React from "react";
import { signOut } from "next-auth/react";

export const Logout = () => {
  return (
    <>
      <button onClick={() => signOut()}>Log out</button>
    </>
  )
}