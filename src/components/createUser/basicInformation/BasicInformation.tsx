import FormInputWrapper from "@/components/inputWrapper/InputWrapper";
import SelectWrapper from "@/components/selectWrapper/SelectWrapper";
import React from "react";
import { BASIC_INPUTS, BASIC_SELECTS } from "../constants";
import { CarouselItem } from "@/components/ui/carousel";
import { Control, FieldValues } from "react-hook-form";
import { FormValues } from "@/components/innerCarousel/InnerCarousel";

interface Props {
  control: Control<FormValues, any>;
  current: number;
}

const BasicInformation = ({ control, current }: Props) => {
  return (
    <>
      <CarouselItem>
        {BASIC_INPUTS.map((input) => (
          <FormInputWrapper
            key={input.id}
            placeholder={input.placeholder}
            type={input.type}
            control={control}
            name={input.id}
            tabIndex={!!current ? -1 : 1}
          >
            {input.innerLabel}
          </FormInputWrapper>
        ))}
        {BASIC_SELECTS.map((select) => (
          <SelectWrapper
            key={select.id}
            placeholder={select.placeholder}
            values={select.values}
            control={control}
            name={select.id}
          >
            {select.innerLabel}
          </SelectWrapper>
        ))}
      </CarouselItem>
    </>
  );
};

export default BasicInformation;
