import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@material-ui/core";
import EurekaLogo from "../../img/logo.png";

export class AllDebtsTableToPrint extends React.Component {
  render() {
    const { allClientsDebts } = this.props;

    const today = new Date();
    let date, time;

    if (today.getMonth() + 1 < 10) {
      date = `${today.getFullYear()}-0${today.getMonth() +
        1}-${today.getDate()}`;
    } else {
      date = `${today.getFullYear()}-${today.getMonth() +
        1}-${today.getDate()}`;
    }

    time = `${today.getHours()}:${today.getMinutes()}`;

    console.log(date, time);

    return (
      <Grid alignItems="center" container direction="row" justify="center">
        <Grid container direction="row" item xs={12}>
          <Grid item xs={4}>
            <img alt="EurekaLogo" src={EurekaLogo} />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" component="h3">
              Mensualidades Vencidas
            </Typography>
          </Grid>
          <Grid
            alignItems="center"
            container
            direction="row"
            item
            justify="center"
            xs={4}
          >
            <TextField
              id="date"
              label="Fecha:"
              type="date"
              defaultValue={date}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="time"
              label="Hora:"
              type="time"
              defaultValue={time}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre del Negocio</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Fecha de Pago</TableCell>
                <TableCell>Comtacto 1</TableCell>
                <TableCell>Contacto 2</TableCell>
                <TableCell>Contacto 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allClientsDebts.map(({ node }) => (
                <TableRow>
                  <TableCell>{node.business}</TableCell>
                  <TableCell>{node.fullName}</TableCell>
                  <TableCell>{node.formatedMovementDate}</TableCell>
                  <TableCell>
                    {node.contract.contacts.edges[0].node.contact}
                  </TableCell>
                  <TableCell>
                    {node.contract.contacts.edges[1].node.contact}
                  </TableCell>
                  <TableCell>
                    {node.contract.contacts.edges[2].node.contact}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    );
  }
}
