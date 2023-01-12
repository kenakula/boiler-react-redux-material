import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterComponent } from './router';
import { ThemeStoreProvider } from './store';

export const App = (): JSX.Element => {
  // const dispatch = useAppDispatch();
  let ignoreAuth = false;

  useEffect(() => {
    if (!ignoreAuth) {
      // dispatch(checkAuth())
      //   .unwrap()
      //   .catch(() => {
      //     dispatch(refreshAuth());
      //   });

      // eslint-disable-next-line react-hooks/exhaustive-deps
      ignoreAuth = true;
    }
  }, []);

  return (
    <HelmetProvider>
      <ThemeStoreProvider>
        <RouterComponent />
      </ThemeStoreProvider>
    </HelmetProvider>
  );
};

export default App;
