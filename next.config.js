const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  webpack(config) {
    config.plugins.push(
      new WasmPackPlugin({
        crateDirectory: __dirname,
      }),
    );
    config.experiments = {
      topLevelAwait: true,
      importAsync: true,
      asyncWebAssembly: true,
      // importAwait: true,
    };
    return config;
  },
};
