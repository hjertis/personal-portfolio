import React from "react";

import { cards } from "../data/portfolio";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const Portfolio = () => {
  return (
    <Container maxWidth="xl" id="portfolio" sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item xs={12} md={4} key={card.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
              }}>
              <CardMedia
                component="div"
                sx={{ pt: "56.25%" }}
                image={card.image}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h5">
                  {card.heading}
                </Typography>
                <Typography
                  variant="body2"
                  component="h6"
                  sx={{ textTransform: "uppercase" }}>
                  {card.subHeading}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="p">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
