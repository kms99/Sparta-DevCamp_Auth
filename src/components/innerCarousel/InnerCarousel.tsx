"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import BasicInformation from "../createUser/basicInformation/BasicInformation";
import PasswordCheck from "../createUser/passwordCheck/PasswordCheck";
import CardFooterWrapper from "../cardWrapper/cardFooterWrapper/CardFooterWrapper";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormWrapper from "../createUser/formWrapper/FormWrapper";

export interface FormValues {
  role: string;
  email: string;
  username: string;
  phone: string;
  password: string;
  check_password: string;
}

const InnerCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      role: "",
      phone: "",
      password: "",
      email: "",
      check_password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    alert(JSON.stringify(values));
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    api.off("scroll", () => {});
  }, [api, current]);

  return (
    <Carousel
      setApi={setApi}
      className="p-6 pt-0"
      opts={{
        watchDrag: false,
      }}
    >
      <FormWrapper form={form} currentIndex={current} onSubmit={onSubmit}>
        <CarouselContent>
          <BasicInformation control={form.control} current={current} />
          <PasswordCheck control={form.control} current={current} />
        </CarouselContent>

        <CardFooterWrapper>
          {!!current && <Button type="submit">계정 등록하기</Button>}
          <CarouselPrevious variant="ghost" size="default" type="button">
            이전 단계로
          </CarouselPrevious>
          {!current && (
            <CarouselNext
              id="middle_form"
              variant="default"
              size="default"
              className="flex items-center gap-1"
              type="button"
              name="middle_form"
              onClick={() => {}}
            >
              다음 단계로
              <ArrowRight size={"1rem"} />
            </CarouselNext>
          )}
        </CardFooterWrapper>
      </FormWrapper>
    </Carousel>
  );
};

export default InnerCarousel;
