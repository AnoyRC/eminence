import Image from "next/image";

export default function SideBarButton({ logo, label, onClick, active }) {
  return (
    <div className="flex items-center hover:cursor-pointer" onClick={onClick}>
      {active ? (
        <>
          <Image src={logo} width={24} height={24} alt="image" />
          <p
            className="text-transparent text-[20px] ml-[16px]"
            style={{
              background:
                "linear-gradient(261deg, #26FFFF 5.76%, #4AFF93 94.17%)",
              backgroundClip: "text",
            }}
          >
            {label}
          </p>{" "}
        </>
      ) : (
        <>
          <Image src={logo} width={24} height={24} alt="image" />
          <p className="text-[20px] ml-[16px] text-[#f0f0f0]">{label}</p>
        </>
      )}
    </div>
  );
}
