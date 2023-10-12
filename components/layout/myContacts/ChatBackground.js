import Image from 'next/image';

const ChatBackground = () => {
  return (
    <section className="w-full h-full flex justify-center items-center flex-col border border-primary-white/60 border-t-transparent">
      <Image src="/images/logo.png" alt="logo" width={50} height={50} />

      <h3 className="text-primary-white/60 font-bold text-2xl leading-normal">
        Eminence
      </h3>

      <p className="text-primary-white/60 max-w-xs text-center">
        Send and receive messages anytime to your contacts
      </p>
    </section>
  );
};

export default ChatBackground;
