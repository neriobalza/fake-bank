import React, {useState, createContext} from 'react';

type User = {
  name: string;
  userName: string;
  email: string;
};

const emptyUser: User = {
  name: '',
  userName: '',
  email: '',
};

export const AuthContext = createContext({
  user: emptyUser,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (userData: User) => {},
  logout: () => {},
});

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User>(emptyUser);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(emptyUser);
  };

  const valueContext = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>
      <>{children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
