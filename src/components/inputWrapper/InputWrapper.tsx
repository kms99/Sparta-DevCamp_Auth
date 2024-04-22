import React, { ComponentProps, PropsWithChildren } from "react";
import { Input } from "../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface Props extends ComponentProps<"input"> {
  name: string;
  control: any;
}

const FormInputWrapper = ({
  children,
  name,
  control,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="px-0 mb-4">
          <FormLabel>{children}</FormLabel>
          <FormControl>
            <Input {...props} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
};

export default FormInputWrapper;
