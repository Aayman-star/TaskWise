import { Raleway } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import { Montserrat } from "next/font/google";

export const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const opensans = Open_Sans({ subsets: ["latin"], weight: "400" });
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
