"use client";

import { FormValues } from "@/components/innerCarousel/InnerCarousel";
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
  onSubmit,
}: PropsWithChildren<Props>) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default FormWrapper;
