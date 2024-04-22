import InputWrapper from "@/components/inputWrapper/InputWrapper";
import SelectWrapper from "@/components/selectWrapper/SelectWrapper";
import React from "react";
import { BASIC_INPUTS, BASIC_SELECTS } from "../constants";
import { CarouselItem } from "@/components/ui/carousel";

const BasicInformation = () => {
  return (
    <CarouselItem>
      {BASIC_INPUTS.map((input) => (
        <InputWrapper
          key={input.id}
          id={input.id}
          placeholder={input.placeholder}
          type={input.type}
        >
          {input.innerLabel}
        </InputWrapper>
      ))}
      {BASIC_SELECTS.map((select) => (
        <SelectWrapper
          key={select.id}
          id={select.id}
          placeholder={select.placeholder}
          values={select.values}
        >
          {select.innerLabel}
        </SelectWrapper>
      ))}
    </CarouselItem>
  );
};

export default BasicInformation;
