import { OctokitResponse } from '@octokit/types';
import { request } from '@octokit/request';

type TMethod = 'get' | 'post' | 'put' | 'delete';

const methods = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
};

export const githubApi = async (
  method: TMethod,
  endpoint: string,
  query: string,
) => {
  try {
    const res: OctokitResponse<any, number> = await request(
      `${methods[method]} ${endpoint}`,
      {
        q: query,
      },
    );

    return res.data;
  } catch (err) {
    return {};
  }
};
