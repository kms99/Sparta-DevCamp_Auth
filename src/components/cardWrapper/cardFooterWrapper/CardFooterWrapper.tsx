import { CardFooter } from "@/components/ui/card";
import React, { PropsWithChildren } from "react";

const CardFooterWrapper = ({ children }: PropsWithChildren) => {
  return <CardFooter className="flex gap-2 p-0">{children}</CardFooter>;
};

export default CardFooterWrapper;
