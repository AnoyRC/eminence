import Image from "next/image";

export default function Slider() {
  const dataArray = [
    {
      number: 1,
      heading: "Non Custodial Security",
      description:
        "Your wallet empowers you with full control. You own your private keys, ensuring the utmost security for your Solana assets. No intermediaries, just you and your crypto.",
      image: "/images/Home_4/Security.svg",
    },
    {
      number: 2,
      heading: "Crypto Meets Social",
      description:
        "We've made crypto more than transactions; it's a space for social connection. Easily link up with friends and family in the crypto world, turning transactions into conversations.",
      image: "/images/Home_4/security_2.svg",
    },
    {
      number: 3,
      heading: "Smart Contacts",
      description:
        "Keeping track of your crypto network is a breeze. Save contacts and send Solana with a few taps – it's quick, easy, and hassle-free.",
      image: "/images/Home_4/security_3.svg",
    },
    {
      number: 4,
      heading: "Effortless Payments",
      description:
        "Simplify receiving payments with your unique link. It's a no-fuss way for others to send you Solana securely, anytime, anywhere.",
      image: "/images/Home_4/security_4.svg",
    },
    {
      number: 5,
      heading: "One-Stop Solana Shop",
      description:
        "Easily acquire Solana without leaving your wallet. A seamless experience awaits both beginners and seasoned crypto users, all powered by Moonpay.",
      image: "/images/Home_4/security_5.svg",
    },

    // Add more items to the dataArray as needed
  ];

  return (
    <>
      {dataArray.map((item, index) => (
        <div key={item.number} className=" w-screen h-screen ">
          <div className="max-w-[1280px] flex justify-between relative p-[60px] mt-5 items-center slider-item mx-auto">
            <div className="flex flex-col justify-between max-w-[500px] slider-content">
              <div key={item.number}>
                <h1 className="font-[Satoshi-Bold] text-[64px] text-black  ">
                  {item.number}.
                </h1>
                <h1 className="font-[Satoshi-Bold] text-[64px] text-black mt-8">
                  {item.heading}
                </h1>
                <p className="font-[Satoshi-Regular] text-[20px] text-black mt-5">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div key={item.number}>
                <Image src={item.image} width={500} height={500} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
