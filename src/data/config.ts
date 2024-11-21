const config = {
  title: "Andree | Indie Developer",
  description: {
    long: "Explore the portfolio of Andree, an indie developer and creative technologist specializing in interactive Web App, Mobile App experiences, 3D animations, and innovative projects. Let's build something amazing together!",
    short:
      "Discover the portfolio of Andree, an indie developer creating interactive web app, mobile app experiences and innovative projects.",
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
  email: "nguyenanhtuatus@gmail.com",
  site: "https://andree-portfolio.vercel.app/",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/anh-t%C3%BA-nguy%E1%BB%85n-805995277/",
    instagram: "https://www.instagram.com/n.anh.tu_/",
    facebook: "https://www.facebook.com/a.tu.nguyen.0410",
    github: "https://github.com/GMTteam",
  },
};
export { config };
