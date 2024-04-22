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

interface Props {
  id: string;
  placeholder: string;
  values: Role[];
}

const SelectWrapper = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <CardContent>
      <Label htmlFor={props.id}>{children}</Label>
      <Select>
        <SelectTrigger id={props.id}>
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent>
          {props.values.map((value, index) => (
            <SelectItem key={`${value}_${index}`} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </CardContent>
  );
};

export default SelectWrapper;
