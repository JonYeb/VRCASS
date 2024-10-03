import { DEFAULT_HEADER } from '../../constants';

export const makeRequest = async <ResponseType, T>(
  url: string,
  method?: 'GET' | 'POST',
  data?: T
) => {
  const headers: Headers = new Headers({
    ...DEFAULT_HEADER,
    // ...requestHeader,
  });

  const requestData: RequestInit = {
    method: method ?? 'GET',
    // mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: headers,
  };

  if (data) {
    requestData.body = JSON.stringify(data);
  }

  return fetch(url, requestData)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
      return responseData as ResponseType;
    })
    .catch((error) => console.warn(error));
};
