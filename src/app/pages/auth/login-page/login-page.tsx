import { AuthCredentials } from '@directus/sdk';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Container, InputComponent } from 'app/components';
import { FormModel, schema } from './assets';

export const LoginPage = (): JSX.Element => {
  // const location = useLocation();

  // const from = location.state?.from?.pathname || HOME_PAGE;

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormModel>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormModel): void => {
    console.error(data);

    // dispatch(logIn(data))
    //   .unwrap()
    //   .then(() => {
    //     navigate(from, { replace: true });
    //     dispatch(
    //       setToaster({
    //         message: 'Вы успешно авторизовались',
    //         severety: 'success',
    //         key: new Date().getTime(),
    //       }),
    //     );
    //   })
    //   .catch(err => {
    //     setError('email', { message: err });
    //     dispatch(
    //       setToaster({
    //         message: err,
    //         severety: 'error',
    //         key: new Date().getTime(),
    //       }),
    //     );
    //   });
  };

  return (
    <Container maxWidth="xs" styles={{ padding: 0 }}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ py: 4 }}>
        <Typography variant="h2" sx={{ fontSize: 32, mb: 2, fontWeight: 700 }}>
          Login
        </Typography>
        <InputComponent<AuthCredentials>
          formControl={control}
          error={!!errors.email}
          errorMessage="Введите корректно почту"
          type="email"
          name="email"
          label="email"
          variant="standard"
          fullwidth
          styles={{ margin: '0 0 20px 0' }}
        />
        <InputComponent<AuthCredentials>
          formControl={control}
          error={!!errors.password}
          errorMessage="Введите пароль"
          type="password"
          name="password"
          label="password"
          variant="standard"
          fullwidth
          styles={{ margin: '0 0 20px 0' }}
        />
        {/* <Button
          type="submit"
          variant="contained"
          startIcon={
            authProcessing ? (
              <LoadingIcon>
                <SyncIcon />
              </LoadingIcon>
            ) : (
              <LoginIcon />
            )
          }
          disabled={authProcessing}
        >
          Войти
        </Button> */}
      </Box>
    </Container>
  );
};
