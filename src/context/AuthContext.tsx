// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'admin' | 'customer';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<User | null>;
  signup: (name: string, email: string, password: string, phone?: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const ADMIN_EMAIL = 'admin@example.com';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('canteen_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<User | null> => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email && password) {
      const role: 'admin' | 'customer' = email === ADMIN_EMAIL ? 'admin' : 'customer';

      const userData: User = {
        id: '1',
        name: email.split('@')[0],
        email,
        phone: '+91 9876543210',
        role,
      };

      setUser(userData);
      localStorage.setItem('canteen_user', JSON.stringify(userData));
      setIsLoading(false);
      return userData;
    }

    setIsLoading(false);
    return null;
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
    phone?: string
  ): Promise<boolean> => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const role: 'admin' | 'customer' = email === ADMIN_EMAIL ? 'admin' : 'customer';

    const userData: User = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      role,
    };

    setUser(userData);
    localStorage.setItem('canteen_user', JSON.stringify(userData));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('canteen_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
