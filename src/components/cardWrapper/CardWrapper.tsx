import React, { PropsWithChildren } from "react";
import { Card } from "../ui/card";

const CardWrapper = ({ children }: PropsWithChildren) => {
  return <Card className="w-[380px]">{children}</Card>;
};

export default CardWrapper;
