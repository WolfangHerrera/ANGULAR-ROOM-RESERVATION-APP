const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfeRoom",
  filename: "remoteEntry.js",
  exposes: {
    "./AppModule": "./src/app/app.module.ts",
  },
  shared: {
    "@angular/core": {
      singleton: true,
      strictVersion: true,
    },
    "@angular/common": {
      singleton: true,
      strictVersion: true,
    },
    "@angular/common/http": {
      singleton: true,
      strictVersion: true,
    },
    "@angular/router": {
      singleton: true,
      strictVersion: true,
    },
  },
});
