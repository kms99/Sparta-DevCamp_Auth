import CardWrapper from "@/components/cardWrapper/CardWrapper";
import BasicInformation from "@/components/createUser/basicInformation/BasicInformation";
import { Button } from "@/components/ui/button";
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <CardWrapper>
        <CardHeader>
          <CardTitle>계정을 생성합니다</CardTitle>
          <CardDescription>필수 정보를 입력해볼게요</CardDescription>
        </CardHeader>
        <BasicInformation />
        <CardFooter>
          <Button variant="default">다음 단계로</Button>
        </CardFooter>
      </CardWrapper>
    </div>
  );
}
