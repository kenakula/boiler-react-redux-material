import { styled, SxProps, Typography } from '@mui/material';

const CustomTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: 32,
  [theme.breakpoints.up('sm')]: {
    fontSize: 42,
  },
  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(4),
  },
}));

interface Props {
  text: string;
  centered?: boolean;
  styles?: SxProps;
}

export const PageTitle = ({
  text,
  centered = false,
  styles,
}: Props): JSX.Element => {
  return (
    <CustomTitle textAlign={centered ? 'center' : undefined} sx={styles}>
      {text}
    </CustomTitle>
  );
};
