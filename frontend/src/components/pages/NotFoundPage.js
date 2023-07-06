import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              Произошла какая-та ошибка или такой страницы не существует
            </Typography>
            <Button variant="contained" onClick={() => navigate("/")}>
              Вернуться на главную
            </Button>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://sun9-3.userapi.com/impf/c624923/v624923978/577d4/GYrzC1lsivk.jpg?size=600x400&quality=96&sign=c25cf40cac382c50deb50bef1ed9384b&c_uniq_tag=7Sxaepy5FwK6V0BVOL8kUsXb3CVg0EUdnPP6WI4B55Q&type=album"
              alt=""
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
