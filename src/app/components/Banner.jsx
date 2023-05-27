import Image from 'next/legacy/image';
import { house } from '../Assets';

const Banner = () => {
  return (
    <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={house} layout="fill" objectFit="cover" alt="BannerImg" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm md:text-lg text-white rounded-full p-2 font-bold">
          Not sure where to go? Perfect.
        </p>
        <button className="text-[#329a9a] bg-white px-8 py-4 md:px-10 md:py-4 shadow-md rounded-full font-bold my-2 hover:shadow-xl active:scale-90 transition duration-150 ease-out">
          I&apos;m flexible
        </button>
      </div>
    </section>
  );
};

export default Banner;
