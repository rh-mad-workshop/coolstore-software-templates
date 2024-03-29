const { get } = require('env-var')

var config = {
    API_ENDPOINT: 'gateway-vertx-' + process.env.OPENSHIFT_BUILD_NAMESPACE,
    SECURE_API_ENDPOINT: 'gateway-vertx-' + process.env.OPENSHIFT_BUILD_NAMESPACE,
    SSO_ENABLED: process.env.SSO_URL ? true : false
};

if (process.env.COOLSTORE_GW_ENDPOINT != null) {
    config.API_ENDPOINT = process.env.COOLSTORE_GW_ENDPOINT;
} else if (process.env.COOLSTORE_GW_SERVICE != null) {
    config.API_ENDPOINT = process.env.COOLSTORE_GW_SERVICE + '-' + process.env.OPENSHIFT_BUILD_NAMESPACE;
}


if (process.env.SECURE_COOLSTORE_GW_ENDPOINT != null) {
    config.SECURE_API_ENDPOINT = process.env.SECURE_COOLSTORE_GW_ENDPOINT;
} else if (process.env.SECURE_COOLSTORE_GW_SERVICE != null) {
    config.SECURE_API_ENDPOINT = process.env.SECURE_COOLSTORE_GW_SERVICE + '-' + process.env.OPENSHIFT_BUILD_NAMESPACE;
}

config.PRODUCT_REFRESH_INTERVAL = get('PRODUCT_REFRESH_INTERVAL').default(5000).asIntPositive()

module.exports = config;
