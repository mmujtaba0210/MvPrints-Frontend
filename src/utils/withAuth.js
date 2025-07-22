import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function AuthGuard({ Component, pageProps }) {
  // Temporarily bypass auth check for development
  return <Component {...pageProps} />;

  // Original auth check code (commented out for now)
  /*
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [loading, user]);

  if (loading || !user) return;

  return <Component {...pageProps} />;
  */
}

const withAuth = (PageComponent) => {
  return function WrappedWithAuth(pageProps) {
    return (
      <AuthGuard Component={PageComponent} pageProps={pageProps} />
    );
  };
};

export default withAuth;
