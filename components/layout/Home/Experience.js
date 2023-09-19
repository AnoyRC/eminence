import Button from '@/components/ui/Button';
import Image from 'next/image';

const Experience = () => {
  return (
    <div className="w-full h-screen relative bg-primary-white flex items-center justify-center flex-col">
      <h2 className="font-bold text-8xl leading-normal text-center text-primary-black mb-6">
        Experience the <br /> Future of Finance
        <br /> Unlock
        <span>
          <Image
            src="/images/logo.png"
            alt="Eminence Logo"
            width={200}
            height={200}
            className="inline-block prevent-select"
          />
        </span>
        Today
      </h2>

      <Button
        label="Launch App"
        rounded
        color="text-primary-white"
        style="bg-primary px-7 py-3 font-bold prevent-select"
        location="/onboard"
      />
    </div>
  );
};

export default Experience;
