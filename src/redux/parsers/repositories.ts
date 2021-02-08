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
        lastUpdate: new Date(repository.updated_at),
        stars: repository.stargazers_count,
        owner: {
          name: repository.owner.login,
          avatar: repository.owner.avatar_url,
          href: repository.owner.html_url,
        },
      };
    },
  );

  return parsedrepositories;
};
