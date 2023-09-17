import ContentBox from "./onBoard_1/ContentBox";
import StepView from "./onBoard_1/StepView";

export default function OnBoard_1() {
  return (
    <div className="flex flex-col mt-[40px] items-center">
      <StepView />
      <ContentBox />
    </div>
  );
}
