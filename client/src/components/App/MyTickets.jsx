import Navigation from "../Navigation"
import { useNavigate } from "react-router-dom"
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a1b2f'
    }
  }
});

const MyTickets = ({setUser, user, tickets}) => {
console.log(tickets)
const navigate = useNavigate()

  return (
    <div>
      <Navigation setUser={setUser} user={user} />
      <ThemeProvider theme={theme}>
      <main>
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
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
              My Tickets
      </Typography>
      </Container>
      </Box>
      <Container sx={{ py: 6 }} maxWidth="md">
        <Grid container spacing={4}>
          {tickets.map((item) => {
          return <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Ticket {item.id}
                  </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => navigate(`/ticket/${item.id}`)}>Ticket details</Button>
                  </CardActions>
              </Card>
            </Grid>
          })}
        </Grid>
      </Container>
      </main>
      </ThemeProvider>
    </div>
  )
}

export default MyTickets