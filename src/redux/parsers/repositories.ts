import { TRepository } from '../types';

export const repositoriesParser = (repositories: any[]) => {
  console.log(repositories);
  const parsedrepositories = repositories.map(
    (repository: any): TRepository => {
      return {
        id: repository.id,
        type: 'repository',
        name: repository.name,
        href: repository.html_url,
        language: repository.language,
        description: repository.description,
        lastUpdate: repository.updated_at,
        stars: repository.stargazers_count,
        owner: repository.owner.login,
      };
    },
  );

  return parsedrepositories;
};
