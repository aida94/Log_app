import React, { useEffect } from "react";
import { Container, Alert, Divider, Typography, Paper } from "@mui/material";
import { useDispatch } from "react-redux";

import Loading from "../components/Loading";
import LogItem from "../components/LogItem";
import { generateRandomLog } from "../utils/generateRandomLog";
import { useAppSelector } from "../hooks/reduxHooks";
import { GET_LOGS, LOGS_LOADING } from "../shared/reduxTypes";
import { useStyles } from "./styles";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { logs, loading, logTypeAmount } = useAppSelector(
    (state) => state.logState
  );

  useEffect(() => {
    dispatch({ type: LOGS_LOADING });
    dispatch({ type: GET_LOGS, payload: [generateRandomLog()] });

    setInterval(() => {
      dispatch({ type: GET_LOGS, payload: [generateRandomLog()] });
    }, 10000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      {loading && <Loading />}

      <Paper className={classes.logContainer}>
        {logs?.map((log, index) => (
          <LogItem key={index} log={log} />
        ))}
      </Paper>
    </Container>
  );
};

export default Home;
