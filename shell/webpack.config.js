// const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// module.exports = withModuleFederationPlugin({

//   remotes: {
//     "mfe1": "http://localhost:3000/remoteEntry.js",    
//   },

//   shared: {
//     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//   },

// });


const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

  
// Configuramos los micros
const moduleFederationConfig = withModuleFederationPlugin({
  remotes: {
    "mfLogin": "http://localhost:4201/remoteEntry.js", 
    "mfDashboard": "http://localhost:4202/remoteEntry.js",
  },

  shared: {
  //   // Usar shareAll para compartir todos los módulos con configuraciones específicas
    ...shareAll({
      singleton: true, // Asegurar que solo haya una instancia de cada módulo compartido
      strictVersion: true, // Garantizar que se usen versiones estrictas de los módulos compartidos
      requiredVersion: "auto",// Permitir que Webpack determine automáticamente la versión requerida
    }),
  },

});

// Establecer la ruta pública para los recursos cargados
moduleFederationConfig.output.publicPath = "http://localhost:4200/"; // URL base para cargar scripts y estilos

//Exportar la configuración para que Webpack la use en la construcción de la aplicación
module.exports = moduleFederationConfig;