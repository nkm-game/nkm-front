import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  createLobby,
  getAllLobbies,
  LobbyState,
} from "../features/lobbiesSlice";
import { useForm } from "react-hook-form";
import { LobbyCreationRequest } from "../types/requests/lobby";
import { Link as RouterLink } from "react-router-dom";
import { useMountEffect } from "../app/utils";

export default function LobbiesView() {
  const lobbiesData = useSelector((state: RootState) => state.lobbiesData);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (request: LobbyCreationRequest) => {
    dispatch(createLobby(request));
  };

  const checkTimeout = 1000;
  useMountEffect(() => {
    const timer = setInterval(() => dispatch(getAllLobbies()), checkTimeout);
    return () => clearTimeout(timer);
  });

  return <>
    <Grid container justifyContent="center">
      <Paper style={{ position: "relative", zIndex: 0 }}>
        <Box p={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  label="Name"
                  name="name"
                  inputRef={register({ required: true })}
                  error={errors.name}
                  autoFocus
                  fullWidth />
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
    {lobbiesData.lobbyList.length === 0 ? (
      <Typography>No lobbies created yet</Typography>
    ) : (
      ""
    )}
    <Box m={3}>
      <Grid container justifyContent="space-between" spacing={3}>
        {lobbiesData.lobbyList.map((lobbyState: LobbyState) => (
          <Grid item key={lobbyState.id}>
            <RouterLink to={"/lobby/" + lobbyState.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {lobbyState.name}
                  </Typography>
                  <Typography>{lobbyState.hostUserId}</Typography>
                  <Typography color="textSecondary">
                    {lobbyState.creationDate?.toString()}
                  </Typography>
                  <Typography color="secondary">
                    {lobbyState.userIds.join(" ") || "Empty lobby"}
                  </Typography>
                </CardContent>
              </Card>
            </RouterLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  </>;
}
