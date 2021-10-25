import React from "react";
import { Grid } from "@mui/material";
import moment from "moment";

import { LogI } from "../../shared/interfaces";

interface LogItemProps {
  log: LogI;
}

const LogItem: React.FC<LogItemProps> = ({ log }) => {
  return (
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
  );
};

export default LogItem;
