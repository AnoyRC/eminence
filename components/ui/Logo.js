import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center z-10 pl-9">
      <Image
        src="/images/logo.png"
        width={90}
        height={90}
        alt="Eminence Logo"
      />

      <p className="text-primary-black text-4xl font-bold">Eminence</p>
    </div>
  );
}
