// MiComponente.js
import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import DropdownButton from './DropdownButton';

const Tabla = () => {
  const productos = [
    1
  ];

  return (
    <div>
      
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Udm</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Impuestos</TableCell>
              <TableCell>Desc%</TableCell>
              <TableCell>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productos.map(producto => (
              <TableRow key={producto.id}>
                <TableCell>{producto.id}
                  <DropdownButton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default Tabla;
