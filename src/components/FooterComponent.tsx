
import Image from "next/image";
import React from "react";

const FooterComponent = ({ logoSrc, description, sections, copyright }: any) => {
  return (
    <footer className="bg-[#002C5F] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center space-y-8 md:space-y-0">
          {/* Left Section - Logo and Description */}
          <div className="max-w-sm">
            <Image src={logoSrc} alt="Logo" width={200} height={200} className="h-12 mb-4"  />
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
          </div>

          {/* Middle Sections */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            {sections.map((section: any, index: number) => (
              <div key={index}>
                <h3 className="font-semibold text-lg">{section.title}</h3>
                <ul className="mt-2 space-y-2">
                  {section.links.map((link: any, linkIndex: number) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-yellow-300 text-sm transition"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-10 border-t border-gray-600 pt-4 text-center">
          <p className="text-gray-400 text-sm">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
