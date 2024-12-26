import Image from "next/image";

type Sponsor = {
  name: string;
  logoSrc: string;
};

interface SponsorsProps {
  title: string;
  sponsors: Sponsor[];
}

const Sponsors = ({ title, sponsors }: SponsorsProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Dynamic Title */}
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
          {title}
        </h2>

        {/* Sponsors' Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 mt-14">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="relative w-40 h-10 md:w-48 md:h-12 flex-shrink-0"
            >
              <Image
                src={sponsor.logoSrc}
                alt={sponsor.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;