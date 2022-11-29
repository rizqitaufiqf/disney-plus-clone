import { Session } from "next-auth";
import React from "react";

interface Props {
  session: Session;
}

const SignedInHeader = ({ session }: Props) => {
  return <div>{session!.user!.email}</div>;
};

export default SignedInHeader;
