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

const InnerCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api, current]);

  return (
    <Carousel setApi={setApi} className="p-6 pt-0">
      <CarouselContent>
        <BasicInformation />
        <PasswordCheck />
      </CarouselContent>

      <CardFooterWrapper>
        {!!current && <Button>계정 등록하기</Button>}
        <CarouselPrevious variant="ghost" size="default">
          이전 단계로
        </CarouselPrevious>
        <CarouselNext
          variant="default"
          size="default"
          className="flex items-center gap-1"
        >
          다음 단계로
          <ArrowRight size={"1rem"} />
        </CarouselNext>
      </CardFooterWrapper>
    </Carousel>
  );
};

export default InnerCarousel;
