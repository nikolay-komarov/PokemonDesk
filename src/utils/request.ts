import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  // todo: check eslint
  // eslint-disable-next-line no-return-await
  return await fetch(uri).then((res) => res.json());
}

export default req;
