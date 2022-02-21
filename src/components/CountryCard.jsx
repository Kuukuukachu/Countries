import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CountryCard() {
  return (
    <div style={{padding: "20px 45px", cssFloat:"left"}}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={require('../img/worldmap.jpeg')}
            alt="za warudo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              A Country
            </Typography>
            <TableContainer component={Paper}>
            <Table style={{border: "none"}}>
              <TableBody>
                  <TableRow>
                    <TableCell>Region:</TableCell>
                    <TableCell>Europe</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Population:</TableCell>
                    <TableCell>500,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Capital:</TableCell>
                    <TableCell>Capital Cityville</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
  }
