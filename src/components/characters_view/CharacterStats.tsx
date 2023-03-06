import React from "react";
import { Grid, Tooltip, Typography } from "@mui/material";
import StatImage from "../images/StatImage";
import { CharacterMetadata } from "../../types/game/character/CharacterMetadata";
import { statMappings } from "../../app/utils";

export default function CharacterStats({ c }: { c: CharacterMetadata }) {
  return (
    <Grid
      item
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {statMappings(c).map((sm) => (
        <Grid item xs={4} key={sm.title}>
          <Tooltip title={sm.title} arrow>
            <Grid container justifyContent="space-between">
              <Grid item>
                <StatImage name={sm.icon} width="20" />
              </Grid>
              <Grid item>
                <Typography variant="body1">{sm.value}</Typography>
              </Grid>
            </Grid>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
}