import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </AuthProvider>
  )
}
