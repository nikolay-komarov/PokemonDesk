import config from '../config/index';

function getUrlWithParamsConfig(endpointConfig: string) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri, // todo: check keyof typeof
  };
  return url;
}

export default getUrlWithParamsConfig;
