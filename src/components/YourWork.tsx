
// Passing props
const YourWork = ({
    title,
    subtitle,
    buttonText,
    buttonLink,
  }: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  }) => {
    return (
      <section className="bg-[#002C5F] text-white py-20">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
          {/* Add heading with title props */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>
  
          {/* Add paragraph with subtitle props */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl">
            {subtitle}
          </p>
  
          {/* Add button with link */}
          <a
            href={buttonLink}
            className="mt-8 inline-block bg-[#407BFF] text-white py-3 px-8 rounded-md text-sm md:text-lg hover:bg-blue-600 transition duration-300"
          >
            {buttonText} →
          </a>
        </div>
      </section>
    );
  };
  
  export default YourWork;
