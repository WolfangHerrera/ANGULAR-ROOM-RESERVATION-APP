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
      strictVersion: false,
      requiredVersion: "auto",
    },
    "@angular/common": {
      singleton: true,
      strictVersion: false,
      requiredVersion: "auto",
    },
    "@angular/common/http": {
      singleton: true,
      strictVersion: false,
      requiredVersion: "auto",
    },
    "@angular/router": {
      singleton: true,
      strictVersion: false,
      requiredVersion: "auto",
    },
    "date-fns": {
      singleton: true,
      requiredVersion: "3.6.0",
    },
    sweetalert2: {
      singleton: true,
      requiredVersion: "11.10.7",
    },
  },
});
