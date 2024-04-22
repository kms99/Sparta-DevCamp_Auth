import FormInputWrapper from "@/components/inputWrapper/InputWrapper";
import React from "react";
import { PW_INPUTS } from "../constants";
import { CarouselItem } from "@/components/ui/carousel";
import { Control } from "react-hook-form";
import { FormValues } from "@/components/innerCarousel/InnerCarousel";

interface Props {
  control: Control<FormValues, any>;
}

const PasswordCheck = ({ control }: Props) => {
  return (
    <CarouselItem>
      {PW_INPUTS.map((input) => (
        <FormInputWrapper
          key={input.id}
          id={input.id}
          type={input.type}
          control={control}
          name={input.id}
        >
          {input.innerLabel}
        </FormInputWrapper>
      ))}
    </CarouselItem>
  );
};

export default PasswordCheck;
