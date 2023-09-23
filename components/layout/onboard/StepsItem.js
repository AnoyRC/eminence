const StepsItem = (currentStep, id) => {
  return (
    <div className="flex flex-col items-center w-[120px]">
      <div
        className=" p-[6px] rounded-full"
        style={{
          backgroundColor: currentStep === props.id ? '#6CCBB9' : '#6CCBB999',
        }}
      >
        <Image
          src={`/images/OnBoard_1/StepView/Step${props.id}.svg`}
          width={20}
          height={20}
          alt="step"
        />
      </div>
      <h1
        className="font-bold text-primary-white mt-[8px] text-[14px] "
        style={{
          opacity: currentStep === props.id ? 1 : 0.6,
        }}
      >
        Step {props.id}
      </h1>
      <h1
        className="font-medium text-primary-white mt-[2px] text-[14px] text-center "
        style={{
          opacity: currentStep === props.id ? 1 : 0.6,
        }}
      >
        {props.line1} <br />
        {props.line2}
      </h1>
    </div>
  );
};
export default StepsItem;
