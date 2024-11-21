const config = {
  title: "Andree | Indie Developer",
  description: {
    long: "Explore the portfolio of Andree, an indie developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Let's build something amazing together!",
    short:
      "Discover the portfolio of Andree, an indie developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Andree",
    "portfolio",
    "indie developer",
    "creative technologist",
    "mobile app development",
    "interactive websites",
    "mobile app design",
    "GSAP",
    "Swift",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Nguyen Anh Tu",
  email: "nguyeanhtuatus@gmail.com",
  site: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/naresh-khatri/",
    instagram: "https://www.instagram.com/hotchaddi",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/Naresh-Khatri",
  },
};
export { config };
