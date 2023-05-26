import Image from 'next/legacy/image';
import { house } from '../Assets';

const Banner = () => {
  return (
    <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={house} layout="fill" objectFit="cover" alt="BannerImg" />
      <div
        className="absolute top-1/2 w-full text-center
     "
      >
        <p>Not sure where to go? Perfect.</p>
      </div>
    </section>
  );
};

export default Banner;
