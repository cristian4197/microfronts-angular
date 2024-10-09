// const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// module.exports = withModuleFederationPlugin({

//   name: 'mfe1',

//   exposes: {
//     './Component': './projects/mfe1/src/app/app.component.ts',
//   },

//   shared: {
//     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//   },

// });

const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const moduleFederationConfig = withModuleFederationPlugin({
  name: "mf-commons-components",
  exposes: {
    'NavComponent': './src/app/shared/components/nav/nav.component.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

moduleFederationConfig.output.publicPath = "http://localhost:4203/";
module.exports = moduleFederationConfig;

