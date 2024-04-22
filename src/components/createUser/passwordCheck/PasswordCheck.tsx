import InputWrapper from "@/components/inputWrapper/InputWrapper";
import React from "react";
import { PW_INPUTS } from "../constants";

const PasswordCheck = () => {
  return (
    <>
      {PW_INPUTS.map((input) => (
        <InputWrapper key={input.id} id={input.id} type={input.type}>
          {input.innerLabel}
        </InputWrapper>
      ))}
    </>
  );
};

export default PasswordCheck;
