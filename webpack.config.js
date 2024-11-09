const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe-room",
  filename: "remoteEntry.js",
  exposes: {
    "./AppModule": "./src/app/app.module.ts",
  },
  shared: {
    "@angular/core": {
      singleton: true,
      strictVersion: false,
      requiredVersion: "auto",
    },
    "@angular/common": {
      singleton: true,
      strictVersion: false,
      requiredVersion: "auto",
    },
    "@angular/router": {
      singleton: true,
      strictVersion: false,
      requiredVersion: "auto",
    },
  },
});
