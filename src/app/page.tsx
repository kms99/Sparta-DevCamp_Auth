import CardWrapper from "@/components/cardWrapper/CardWrapper";
import InnerCarousel from "@/components/innerCarousel/InnerCarousel";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CardWrapper>
        <CardHeader>
          <CardTitle>계정을 생성합니다</CardTitle>
          <CardDescription>필수 정보를 입력해볼게요</CardDescription>
        </CardHeader>
        <InnerCarousel />
      </CardWrapper>
    </div>
  );
}
