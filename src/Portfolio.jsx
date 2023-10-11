import * as React from "react";
import { Fade } from "react-awesome-reveal";
import Card from "@mui/material/Card";
import logo from "./assets/JB.png";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const cardData = [
  {
    imglink: "https://source.unsplash.com/random?portfolio",
    name: "Sneeke",
    description: "Sneeke is an award-winning game that I built with my friend Warren Hewlett at HackUSU. We placed first in our division largely because of our randomly generated maze.",
    ghLink: "https://github.com/SecretDwarf/sneeke",
  },
  {
    imglink: "https://source.unsplash.com/random?portfolio",
    name: "untitled",
    description: "This is an awesome example project",
    ghLink: "https://github.com/SecretDwarf/",
  },
  {
    imglink: "https://source.unsplash.com/random?portfolio",
    name: "untitled",
    description: "This is an awesome example project",
    ghLink: "https://github.com/SecretDwarf/",
  },
  {
    imglink: "https://source.unsplash.com/random?portfolio",
    name: "untitled",
    description: "This is an awesome example project",
    ghLink: "https://github.com/SecretDwarf/",
  },
  {
    imglink: "https://source.unsplash.com/random?portfolio",
    name: "untitled",
    description: "This is an awesome example project",
    ghLink: "https://github.com/SecretDwarf/",
  },
  {
    imglink: "https://source.unsplash.com/random?portfolio",
    name: "untitled",
    description: "This is an awesome example project",
    ghLink: "https://github.com/SecretDwarf/",
  },
  
];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Portfolio() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="Logo" className="logo-image" />
          </a>
        </div>
        <div className="belowLogo"></div>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 3,
            pb: 3,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Portfolio layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Inspiring undecided desciption
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Fade cascade>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cardData.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image= {card.imglink}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name} 
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href={card.ghLink} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} style={{ fontSize: "30px" }} />
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Fade>
      </main>
    </ThemeProvider>
  );
}