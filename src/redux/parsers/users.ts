import { TUser, TUserApiSchema } from '../types';

export const usersParser = (users: TUserApiSchema[]) => {
  const parsedUsers = users.map(
    (user: any): TUser => {
      return {
        id: user.id,
        type: 'user',
        avatar: user.avatar_url,
        name: user.login,
        href: user.html_url,
      };
    },
  );

  return parsedUsers;
};
