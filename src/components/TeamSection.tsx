import Image from "next/image";

//passing props
const TeamComponent = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
}: any) => {
  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        
        {/* left Side Image */}
        <div className="mt-10 sm:mt-8 lg:mt-0 w-full lg:w-1/2 flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={700}
            height={600}
            className="rounded-lg"
            priority
          />
        </div>    
        
        {/* Right Side Content */}
        <div className="lg:max-w-lg text-center lg:text-left">
          
          {/* add heading with title props*/}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>
          {/* add paragraph with subtitle props  */}
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-2xl text-black">
            {subtitle}
          </p>
          {/* Add button with link */}
          <a    
            href={buttonLink}
            className="mt-6 inline-block bg-[#407BFF] text-white py-3 px-6 rounded-md text-sm md:text-lg hover:bg-blue-600 transition"
          >
            {buttonText} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;