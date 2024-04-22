import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InputWrapper from "@/components/inputWrapper/InputWrapper";
import SelectWrapper from "@/components/selectWrapper/SelectWrapper";
import { Role } from "@/components/selectWrapper/selectWrapper.type";

export default function Home() {
  const INPUTS = [
    { innerLabel: "이름", id: "name", type: "text", placeholder: "홍길동" },
    {
      innerLabel: "이메일",
      id: "email",
      type: "email",
      placeholder: "hello@sparta-devcamp.com",
    },
    {
      innerLabel: "연락처",
      id: "phone",
      type: "text",
      placeholder: "01000000000",
    },
  ];
  const SELECTS = [
    {
      innerLabel: "역할",
      id: "role",
      placeholder: "역할을 선택해주세요",
      values: [Role.ADMIN, Role.GENERAL],
    },
  ];
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>계정을 생성합니다</CardTitle>
          <CardDescription>필수 정보를 입력해볼게요</CardDescription>
        </CardHeader>

        {INPUTS.map((input) => (
          <InputWrapper
            key={input.id}
            id={input.id}
            placeholder={input.placeholder}
            type={input.type}
          >
            {input.innerLabel}
          </InputWrapper>
        ))}
        {SELECTS.map((select) => (
          <SelectWrapper
            key={select.id}
            id={select.id}
            placeholder={select.placeholder}
            values={select.values}
          >
            {select.innerLabel}
          </SelectWrapper>
        ))}

        <CardFooter>
          <Button variant="default">다음 단계로</Button>
        </CardFooter>
      </Card>
    </>
  );
}
