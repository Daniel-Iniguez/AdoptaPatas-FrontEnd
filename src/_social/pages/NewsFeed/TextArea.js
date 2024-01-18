import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/material/styles';


  const pink = {
    50: '#FCE4EC',
    100: '#F8BBD0',
    200: '#F48FB1',
    300: '#F06292',
    400: '#EC407A',
    500: '#E91E63',
    600: '#D81B60',
    700: '#C2185B',
    800: '#AD1457',
    900: '#880E4F',

  };

  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  export const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? pink[300] : pink[900]};
    background: ${theme.palette.mode === 'dark' ? pink[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? pink[700] : pink[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? pink[900] : pink[50]};

    &:hover {
      border-color: ${pink[400]};
    }

    &:focus {
      border-color: ${pink[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? pink[600] : pink[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );
