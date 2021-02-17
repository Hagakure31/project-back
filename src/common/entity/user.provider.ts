import { User } from './user.entity';

export const userDaoKey = 'UserDAO';
export const userDaoProvider = [
  {
    provide: userDaoKey,
    useValue: User,
  },
];
