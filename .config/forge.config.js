const path = require("path");
const package = require("../package.json");
require("dotenv").config();

const packageAssetsPath = path.join(__dirname, "..", "assets", "package");

module.exports = {
  packagerConfig: {
    asar: true,
  },
  makers: [
    // https://www.electronforge.io/config/makers

    {
      name: "@electron-forge/maker-squirrel",
      config: {
        // https://js.electronforge.io/maker/squirrel/interfaces/makersquirrelconfig
      },
    },

    {
      name: "@electron-forge/maker-dmg",
      config: {
        // https://js.electronforge.io/maker/dmg/interfaces/makerdmgconfig
      },
    },

    {
      name: "@electron-forge/maker-zip",
      platforms: ['linux'],
      config: {

      },
    },
  ],
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./.config/webpack.main.config.js",
        renderer: {
          config: "./.config/webpack.renderer.config.js",
          entryPoints: [
            {
              html: "./src/renderer/index.html",
              js: "./src/renderer.tsx",
              name: "main_window",
              preload: {
                js: "./src/preload.ts",
              },
            },
          ],
        },
      },
    ],
  ],
};
