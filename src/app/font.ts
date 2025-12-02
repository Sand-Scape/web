import localFont from "next/font/local";

export const Nippo = localFont({
  src: [
    {
      path: "../../public/fonts/Nippo-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-nippo",
});
