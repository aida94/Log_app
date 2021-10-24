import React from "react";
import { Paper, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import moment from "moment";

import { LogI } from "../../shared/interfaces";

interface LogItemProps {
  log: LogI;
}

const useStyles = makeStyles({
  card: {
    marginBottom: 20,
    padding: 20,
  },
});

const LogItem: React.FC<LogItemProps> = ({ log }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
      <Grid container rowSpacing={1}>
        <Grid item xs={6} md={3}>
          {moment(log.datetime).format("YYYY-MM-DD HH:mm:ss")}
        </Grid>
        <Grid item xs={6} md={3}>
          {log.severity.toUpperCase()}
        </Grid>
        <Grid item xs={12} md={6}>
          {log.message}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LogItem;
