import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { Auth, LobbyCreation } from "../../types/requests/LobbyRequest";
import { LobbyWsHandler } from "../../app/lobbyWsHandler";
import { useMountEffect } from "../../app/utils";
import { RootState } from "../../app/store";
import useWebSocket from "react-use-websocket";
import { useNkmApi } from "../../app/useNkmApi";

function CreateLobbyForm() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const authData = useSelector((state: RootState) => state.authData);
  const nkmApi = useNkmApi();

  const lobbyWsHook = useWebSocket(nkmApi.WS_LOBBY_URL);

  const { sendJsonMessage } = lobbyWsHook;

  const lobbyWsHandler = useMemo(
    () => new LobbyWsHandler(dispatch, sendJsonMessage, () => {}),
    [dispatch, sendJsonMessage]
  );

  useMountEffect(() => {
    if (!authData.token) return;
    const authRequest: Auth = { token: authData.token };
    lobbyWsHandler.auth(authRequest);
  });

  const onSubmit = (request: LobbyCreation) => {
    console.log(request);
    lobbyWsHandler.create(request);
  };

  return (
    <Grid container justifyContent="center" p={1}>
      <Grid item>
        <Paper style={{ position: "relative", zIndex: 0 }}>
          <Box p={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    name="name"
                    inputRef={register({ required: true })}
                    error={errors.name}
                    autoFocus
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Create lobby
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default CreateLobbyForm;
