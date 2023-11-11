'use client';
import {
    Paper,
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Button,
} from '@mui/material'
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));
  
const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Forms = () => {
    return (
      
      <Paper elevation={3} style={{ padding: '10px', maxWidth: '3050px', margin: '0 auto' }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TextField label="Cliente" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Expiracion" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={6} style={{ visibility: 'hidden' }}>
          <TextField label="Campo 3" variant="outlined" fullWidth disabled />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Lista de Precio" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={6} style={{ visibility: 'hidden' }}>
          <TextField label="Campo 5" variant="outlined" fullWidth disabled />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Plazos de Pago" variant="outlined" fullWidth />
        </Grid>
      </Grid>
    </Paper>
  );
};
  
  export default Forms;