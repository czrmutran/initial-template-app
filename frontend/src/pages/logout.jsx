import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Limpa os tokens ou quaisquer dados de autenticação
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // Redireciona para a página de login
    router.push('/login');
  }, [router]);

  return null;
};

export default Logout;
