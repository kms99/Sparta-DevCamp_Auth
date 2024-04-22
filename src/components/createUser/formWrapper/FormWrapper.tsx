"use client";

import { FormValues } from "@/components/innerCarousel/InnerCarousel";
import { useCarousel } from "@/components/ui/carousel";
import { Form } from "@/components/ui/form";
import { formSchema } from "@/lib/validations";
import React, { PropsWithChildren } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface Props {
  form: UseFormReturn<FormValues>;
  currentIndex: number;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

const FormWrapper = ({
  children,
  form,
  currentIndex,
  onSubmit,
}: PropsWithChildren<Props>) => {
  const { scrollNext } = useCarousel();

  const handleNextValidate = async () => {
    const isEmailValid = await form.trigger("email");
    const isUsernameValid = await form.trigger("username");
    const isPhoneValid = await form.trigger("phone");
    const isRoleValid = await form.trigger("role");

    if (isEmailValid && isUsernameValid && isPhoneValid && isRoleValid) {
      return true;
    } else {
      return false;
    }
  };

  const handleNext = async () => {
    const canToNext = await handleNextValidate();
    if (canToNext) {
      scrollNext();
    }
  };

  const handleCheckBubble = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (target.name === "middle_form") {
      handleNext();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    // 엔터 키가 눌렸을 때만 handleNext 함수 실행
    if (e.key === "Enter" && !currentIndex) {
      e.preventDefault(); // 폼의 기본 제출 동작 방지
      handleNext();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onClick={handleCheckBubble}
        onKeyDown={handleKeyPress}
      >
        {children}
      </form>
    </Form>
  );
};

export default FormWrapper;
