import React, { PropsWithChildren } from "react";
import { CardContent } from "../ui/card";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Role } from "./selectWrapper.type";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface Props {
  placeholder: string;
  name: string;
  control: any;
  values: Role[];
}

const SelectWrapper = ({
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
        <FormItem className=" mb-6">
          <FormLabel>{children}</FormLabel>
          <Select onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {props.values.map((value, index) => (
                <SelectItem key={`${value}_${index}`} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
};

export default SelectWrapper;
