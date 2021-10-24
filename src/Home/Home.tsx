import React, { useEffect } from "react";
import { Container, Alert, Divider, Typography } from "@mui/material";
import { connect } from "react-redux";

import Error from "../components/Error";
import Loading from "../components/Loading";
import LogItem from "../components/LogItem";
import { LogI, LogTypeI, ErrorI } from "../shared/interfaces";
import { getLogs } from "./../actions/logAction";
import { useStyles } from "./styles";

interface HomeProps {
  logs: LogI[];
  logTypeAmount: LogTypeI;
  loading: boolean;
  error: ErrorI;
  getLogs: () => {};
}

const Home: React.FC<HomeProps> = ({
  logs,
  logTypeAmount,
  loading,
  error,
  getLogs,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getLogs();
  }, [getLogs]);

  useEffect(() => {
    setInterval(() => {
      getLogs();
    }, 10000);
  });

  return (
    <Container maxWidth="md" className={classes.root}>
      <Alert icon={false} severity="info" className={classes.alert}>
        Info: {logTypeAmount.info}
      </Alert>
      <Alert icon={false} severity="warning" className={classes.alert}>
        Warning: {logTypeAmount.warning}
      </Alert>
      <Alert icon={false} severity="error" className={classes.alert}>
        Error: {logTypeAmount.error}
      </Alert>

      <Divider />

      <Typography className={classes.title}>Logs:</Typography>

      {error && <Error msg={error.msg} />}

      {loading && <Loading />}

      {logs?.map((log, index) => (
        <LogItem key={index} log={log} />
      ))}
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  logs: state.logState.logs,
  loading: state.logState.loading,
  logTypeAmount: state.logState.logTypeAmount,
  error: state.error,
});

export default connect(mapStateToProps, { getLogs })(Home);
