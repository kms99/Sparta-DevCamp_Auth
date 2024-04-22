import InputWrapper from "@/components/inputWrapper/InputWrapper";
import React from "react";
import { PW_INPUTS } from "../constants";
import { CarouselItem } from "@/components/ui/carousel";

const PasswordCheck = () => {
  return (
    <CarouselItem>
      {PW_INPUTS.map((input) => (
        <InputWrapper key={input.id} id={input.id} type={input.type}>
          {input.innerLabel}
        </InputWrapper>
      ))}
    </CarouselItem>
  );
};

export default PasswordCheck;
