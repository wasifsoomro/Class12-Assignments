

import FooterComponent from "./FooterComponent";

const Footer = () => {
  const footerProps = {
    logoSrc: "/Logo.png", // Replace with your logo path
    description:
      "whitepace was created for the new ways we live and work. We make a better workspace around the world.",
    sections: [
      {
        title: "Product",
        links: [
          { text: "Overview", href: "/overview" },
          { text: "Pricing", href: "/pricing" },
          { text: "Customer stories", href: "/customer-stories" },
        ],
      },
      {
        title: "Resources",
        links: [
          { text: "Blog", href: "/blog" },
          { text: "Guides & tutorials", href: "/guides" },
          { text: "Help center", href: "/help-center" },
        ],
      },
      {
        title: "Company",
        links: [
          { text: "About us", href: "/about-us" },
          { text: "Careers", href: "/careers" },
          { text: "Media kit", href: "/media-kit" },
        ],
      },
    ],
    copyright: "©2021 Whitepace LLC.",
  };

  return <FooterComponent {...footerProps} />;
};

export default Footer;
