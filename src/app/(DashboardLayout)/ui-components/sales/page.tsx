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



import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { Button, Container, FormControl, FormControlLabel, InputLabel, MenuItem, NativeSelect, Switch } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );





    return (
        
      <Container fixed>
        <div>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <TextField label="Cliente" variant="outlined" fullWidth />
                    </Grid>
                    <div style={{ margin: '50px', marginTop: '17px' }}>
                <p>Expiracion</p>
                <p>Lista de Precio</p>
                <p>Plaso de Pago</p> 
            </div>
                </Grid>
             
             <br></br>
            <Grid item xs={12} lg={12}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Lineas de pedido" {...a11yProps(0)} />
              <Tab label="Productos opcionales" {...a11yProps(1)} />
              <Tab label="Otra información" {...a11yProps(2)} />
              </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
          <h4>AGREGAR</h4>
            <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                <img src="https://blog.hubspot.com/hs-fs/hubfs/parts-url_1.webp?width=595&height=400&name=parts-url_1.webp" style={{ width: '20%', height:'80px' , float: 'left', margin: '5px'}}/>
                    <Typography variant="h5" component="div" >
                    SaaS - Servicio en nube básico &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 200
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Cantidad: 1.00 Unidades
                    </Typography>
                    <Typography variant="body2">
                    Precio unitario: 200
                    <br />
                    </Typography>
                </CardContent>
                
            </Card>
        <TextField
                id="standard-basic"
                label="Terminos y Condiciones..."
                variant="standard"
                style={{ width: '210px' }}
              />
              <div style={{ width: '210px', float: 'right'}}>
                _______________________
                <h4>Base imponible: S/. 200.00</h4>
                IGV: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  S/. 36.00
                ____________________ 
                <h3>TOTAL: &nbsp; &nbsp; &nbsp; S/. 236.00</h3>
                
              </div>
          </CustomTabPanel>
            
          
            </Grid>

        </div>



          
      </Container>
    );
  }
