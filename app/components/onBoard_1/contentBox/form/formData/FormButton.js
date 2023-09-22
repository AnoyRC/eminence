export default function FormButton(props) {
  return (
    <button
      className={
        `bg-primary-black py-[12px] px-[60px] flex justify-center items-center text-bold text-primary-white text-center text-[16px] rounded-lg` +
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
