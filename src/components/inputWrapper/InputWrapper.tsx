import React, { ComponentProps, PropsWithChildren } from "react";
import { CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Props extends ComponentProps<"input"> {}

const InputWrapper = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <CardContent className="px-0">
      <Label htmlFor={props.id}>{children}</Label>
      <Input {...props} />
    </CardContent>
  );
};

export default InputWrapper;
