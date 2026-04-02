import {
  Roboto,
  Saira_Condensed,
  Lato,
  Mr_Dafoe,
  Bungee_Outline,
} from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const sairaCondensed = Saira_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const mrDafoe = Mr_Dafoe({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const bungeeOutline = Bungee_Outline({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

/**
 * Get the font family class name.
 * @param {"roboto" | "saira-condensed" | "lato" | "mr-dafoe" | "bungee-outline"} value - The font family name.
 * @returns {string} The class name for the selected font family.
 */

export const getFontFamily = (value) => {
  switch (value) {
    case "roboto":
      return roboto.className;
    case "saira-condensed":
      return sairaCondensed.className;
    case "lato":
      return lato.className;
    case "mr-dafoe":
      return mrDafoe.className;
    case "bungee-outline":
      return bungeeOutline.className;
    default:
      return roboto.className;
  }
};
