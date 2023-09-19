import Link from 'next/link';
import Image from 'next/image';

const LaunchApp = () => {
  return (
    <Link className="relative z-10 group-hover:scale-105" href="/onboard">
      <Image
        src="/images/home/launch-button.svg"
        width={200}
        height={50}
        alt="launch app"
      />

      <p className="text-primary-white text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center group-hover:scale-105">
        Launch App
      </p>
    </Link>
  );
};

export default LaunchApp;
