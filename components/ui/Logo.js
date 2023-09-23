import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center z-10 pl-0 lg:pl-9">
      <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]">
        <Image
          src="/images/logo.png"
          width={90}
          height={90}
          layout="responsive"
          alt="Eminence Logo"
        />
      </div>

      <p className="text-primary-black text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold">
        Eminence
      </p>
    </div>
  );
}
