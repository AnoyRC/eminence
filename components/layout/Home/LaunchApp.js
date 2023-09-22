import Link from "next/link";
import Image from "next/image";

const LaunchApp = () => {
  return (
    <Link className="relative z-10 group-hover:scale-105" href="/onboard ">
      <div className="w-[120px] h-[22px] sm:w-[170px] sm:h-[35px] md:w-[180px] md:h-[40px] lg:w-[200px] lg:h-[50px]">
        <Image
          src="/images/home/launch-button.svg"
          width={200}
          height={50}
          layout="responsive"
          alt="launch app"
        />
      </div>

      <p className="text-primary-white text-base sm:text-xl md:text-2xl lg:text-2xl font-bold absolute tinset-0 flex items-center justify-center w-full text-center group-hover:scale-105">
        Launch App
      </p>
    </Link>
  );
};

export default LaunchApp;
