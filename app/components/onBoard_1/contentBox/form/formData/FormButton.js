export default function FormButton(props) {
  return (
    <button
      className={
        `bg-[#1C1D22] py-[12px] px-[60px] flex justify-center items-center text-[Satoshi-Bold] text-white text-center text-[16px] rounded-lg` +
        " " +
        props.className
      }
      onClick={props.onClick}
    >
      <div className="flex justify-center items-center w-[200px]">
        {props.text}
      </div>
    </button>
  );
}
