import SignUpView from "@/modules/auth/ui/views/sign-up-view";
import React, { FC } from "react";

interface PageProps {
  // Your prop types here
}

const Page: FC<PageProps> = (props) => {
  return <SignUpView />;
};

export default Page;
