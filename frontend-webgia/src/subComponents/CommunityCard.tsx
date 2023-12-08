import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { CommunityData } from "../interfaces/community";

const CommunityCard: React.FC<CommunityData> = ({
  id_community,
  input,
  output,
  outimage,
  model_type,
  username,
  updated_at,
  email,
}) => (
  <Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: 4,
      flexGrow: 1,
    }}
  >
    <CardMedia
      component="div"
      sx={{
        // 16:9
        pt: "90.25%",
      }}
      image={
        outimage
          ? `data:image/png;base64,${outimage}`
          : "https://source.unsplash.com/random?wallpapers"
      }
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        {input}
      </Typography>
      <Typography variant="body1">{username}</Typography>
      <Typography variant="body2" color="#393E46">
        {model_type}
      </Typography>
    </CardContent>

    <CardActions sx={{ justifyContent: "space-between" }}>
      <Typography variant="inherit">{email}</Typography>
      <Button variant="outlined" size="small">
        View
      </Button>
    </CardActions>
  </Card>
);

export default CommunityCard;
