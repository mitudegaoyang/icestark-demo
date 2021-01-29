/* config-overrides.js */

// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     return config;
// }

const { override, overrideDevServer, fixBabelImports, addLessLoader, addWebpackAlias, addWebpackModuleRule } = require('customize-cra');

const removeManifest = () => config => {
    config.plugins = config.plugins.filter(
        p => p.constructor.name !== "ManifestPlugin"
    );
    return config;
};

const devServerCustom = () => config => {
    config.port = "9001";
    config.historyApiFallback = true;
    config.quiet = false;
    config.headers = {
        'Access-Control-Allow-Origin': '*',
    };
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;
    return config;
};

module.exports = {
    webpack: override(
        removeManifest(),
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        }),
        addLessLoader(),
    ),
    output: {
        // 设置模块导出规范为 umd
        libraryTarget: 'umd',
        // 可选，设置模块在 window 上暴露的名称；icestark 框架不关心具体配置名称
        library: 'microApp',
    },
    devServer: overrideDevServer(devServerCustom())
}