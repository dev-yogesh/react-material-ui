import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setUser = data => {
  cookies.set('user', data, { path: '/' });
};

export const isLoggedIn = () => {
  //   return !!cookies.get('user');
  return true;
};

export const getRole = () => {
  return 'admin';
};
