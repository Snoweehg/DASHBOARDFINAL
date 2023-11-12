'use client';
import React from 'react';
import {
    Paper,
    Grid,
    Stack,
    TextField,
} from '@mui/material';
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
        <div>
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
             
             <br></br>
            <Grid item xs={12} lg={12}>
                <BaseCard title="">
                    <Stack spacing={3} direction="row">
                        <TextField
                            id="outlined-basic"
                            label="Lineas de Pedido"
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-basic"
                            label="Productos Opcionales"
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-basic"
                            label="Otra Informacion"
                            variant="outlined"
                        />
                    </Stack>
                </BaseCard>
          
                <br></br>
                <BaseCard title='Agregar'>
                <Grid>
                <TextField
                  id="outlined-multiline-static"
                  label={
                    <>
                        SaaS - Servicio en la nube básico: 200.00 <br />
                        Cantidad: 1.00 Unidades <br />
                        Precio Unitario: 200.00
                    </>
                }
                  multiline
                  style={{ width: '400px' }}
                  rows={4} 
                  variant="outlined"
                />
             </Grid>  
             </BaseCard>      
            </Grid>

              <TextField
                id="standard-basic"
                label="Terminos y Condiciones..."
                variant="standard"
                style={{ width: '210px' }}
              />
        </div>
    );
};

export default Forms;
