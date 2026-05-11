import { createGlobalStyle } from "styled-components";
import { Nunito } from "next/font/google";

const myFont = Nunito({ subsets: ["latin", "cyrillic"] });
//${myFont.style.fontFamily}
export default createGlobalStyle`


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${myFont.style.fontFamily};
    
  }

  /* Primary Colors */
  --primary-100: hsl(116, 20%, 95%);
  --primary-200: hsl(116, 20%, 85%);
  --primary-300: hsl(116, 20%, 75%);
  --primary-400: hsl(116, 20%, 65%);
  --primary-500: hsl(116, 20%, 55%);
  --primary-600: hsl(116, 20%, 45%);
  --primary-700: hsl(116, 20%, 35%);
  --primary-800: hsl(116, 20%, 25%);
  --primary-900: hsl(116, 20%, 15%);

    /* Secondary Colors */
  --secondary-100: hsl(233, 46%, 95%);
  --secondary-200: hsl(233, 46%, 85%);
  --secondary-300: hsl(233, 46%, 75%);
  --secondary-400: hsl(233, 46%, 65%);
  --secondary-500: hsl(233, 46%, 55%);
  --secondary-600: hsl(233, 46%, 45%);
  --secondary-700: hsl(233, 46%, 35%);
  --secondary-800: hsl(233, 46%, 25%);
  --secondary-900: hsl(233, 46%, 15%);

    /* Tertiary Colors */
  --tertiary-100: hsl(14, 85%, 95%);
  --tertiary-200: hsl(14, 85%, 85%);
  --tertiary-300: hsl(14, 85%, 75%);
  --tertiary-400: hsl(14, 85%, 65%);
  --tertiary-500: hsl(14, 85%, 55%);
  --tertiary-600: hsl(14, 85%, 45%);
  --tertiary-700: hsl(14, 85%, 35%);
  --tertiary-800: hsl(14, 85%, 25%);
  --tertiary-900: hsl(14, 85%, 15%);

  /* Accent Colors */
  --accent-success-100: hsl(120, 70%, 90%);
  --accent-success-500: hsl(120, 70%, 50%);
  --accent-error-100: hsl(0, 85%, 95%);
  --accent-error-500: hsl(0, 85%, 50%);
  --accent-warning-100: hsl(45, 85%, 90%);
  --accent-warning-500: hsl(45, 85%, 50%);

  /* Grey Scale */
  --grey-100: hsl(0, 0%, 95%);
  --grey-500: hsl(0, 0%, 50%);
  --grey-900: hsl(0, 0%, 10%);
`;
