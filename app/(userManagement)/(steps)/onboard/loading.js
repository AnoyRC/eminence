import Image from 'next/image';

const loading = () => {
  return (
    <div
      className={`flex justify-center items-center bg-transparent w-full h-full`}
    >
      <Image src="/loading.svg" alt="" width={80} height={80} />
    </div>
  );
};

export default loading;
