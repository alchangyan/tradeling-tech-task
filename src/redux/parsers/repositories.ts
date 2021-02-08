import { TRepository, TRepositoryApiSchema } from '../types';

export const repositoriesParser = (repositories: TRepositoryApiSchema[]) => {
  const parsedrepositories = repositories.map(
    (repository: any): TRepository => {
      const lastUpdateDateObj = new Date(repository.updated_at);
      const lastUpdate = lastUpdateDateObj
        ? `${Number(lastUpdateDateObj.getDate()) + 1}/${
            Number(lastUpdateDateObj.getMonth()) + 1
          }/${lastUpdateDateObj.getFullYear()}`
        : '-';

      return {
        id: repository.id,
        type: 'repository',
        name: repository.name,
        href: repository.html_url,
        language: repository.language,
        description: repository.description,
        lastUpdate,
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
