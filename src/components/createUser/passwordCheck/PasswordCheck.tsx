import FormInputWrapper from "@/components/inputWrapper/InputWrapper";
import React from "react";
import { PW_INPUTS } from "../constants";
import { CarouselItem } from "@/components/ui/carousel";
import { Control } from "react-hook-form";
import { FormValues } from "@/components/innerCarousel/InnerCarousel";

interface Props {
  control: Control<FormValues, any>;
  current: number;
}

const PasswordCheck = ({ control, current }: Props) => {
  return (
    <CarouselItem>
      {PW_INPUTS.map((input) => (
        <FormInputWrapper
          key={input.id}
          name={input.id}
          type={input.type}
          control={control}
          tabIndex={!!current ? 0 : -1}
        >
          {input.innerLabel}
        </FormInputWrapper>
      ))}
    </CarouselItem>
  );
};

export default PasswordCheck;
