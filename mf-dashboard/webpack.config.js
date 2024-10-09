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
  name: "mf-dashboard",
  exposes: {
    './DashboardModule': './src/app/dashboard/dashboard.module.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

moduleFederationConfig.output.publicPath = "http://localhost:4202/";
module.exports = moduleFederationConfig;
