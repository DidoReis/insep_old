// color design tokens export

export const tokensDark = {
    primary: {
        100: "#d2d1d2",
        200: "#a4a4a5",
        300: "#777679",
        400: "#49494c",
        500: "#1c1b1f", // background
        600: "#161619",
        700: "#111013",
        800: "#0b0b0c",
        900: "#060506"
    },
    secondary: {
        100: "#fefeff",
        200: "#fdfeff",
        300: "#fcfdff",
        400: "#fbfdff",
        500: "#fafcff", // background
        600: "#c8cacc",
        700: "#969799",
        800: "#646566",
        900: "#323233"
    },

    grey: {
        0: "#ffffff", // manually adjusted
        10: "#f6f6f6", // manually adjusted
        50: "#f0f0f0", // manually adjusted
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#313033",
        800: "#292929",
        900: "#141414",
        1000: "#000000", // manually adjusted
      },
}


function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      const reversedObj = {};
      for (let i = 0; i < length; i++) {
        reversedObj[keys[i]] = values[length - i - 1];
      }
      reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
  }
  
export const tokensLight = reverseTokens(tokensDark);

export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              //palette values for dark mode
              primary: {
                ...tokensDark.primary,
                main: tokensDark.primary[500],
                light: tokensDark.primary[500],
              },
              secondary: {
                ...tokensDark.secondary,
                main: tokensDark.secondary[500],
              },
              neutral: {
                ...tokensDark.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.primary[500],
                alt: tokensDark.primary[400],
              },
            }
          : {
            // palette values for light mode
            primary: {
                ...tokensLight.primary,
                main: tokensDark.grey[50],
                light: tokensDark.grey[100],
              },
              secondary: {
                ...tokensLight.secondary,
                main: tokensDark.secondary[600],
                light: tokensDark.secondary[700],
              },
              neutral: {
                ...tokensLight.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.grey[0],
                alt: tokensDark.grey[50],
              },
            }),
        },
        typography: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 12,
          h1: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 40,
          },
          h2: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 32,
          },
          h3: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 24,
          },
          h4: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 20,
          },
          h5: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 16,
          },
          h6: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 14,
          },
        },
      };
    };
    