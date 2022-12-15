import { Box, Button, Card, CardContent, CardMedia, List, Typography } from "@mui/material";
import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { HeroButton } from "../components/HeroButton";
import { getHeroesById } from "../helpers";

export const HeroPage = () => {

  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroesById(heroId), [heroId]);
  const heroImageUrl = `/heroes/${hero.id}.jpg`;

  if (!hero) {
    return <Navigate to="/" />
  }
  
  const onNavigateBack = () => {
    navigate(-1);
  }

  return (
    <Card sx={{ display: 'flex', m: 1, }} >
      <CardMedia
        component="img"
        sx={{ width: 200, height: 400, }}
        image={heroImageUrl}
        alt={hero.superhero}
        className="animate__animated animate__fadeInLeft"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>
        <CardContent sx={{
          flex: '1 0 auto',
          ml: 2,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}>
          <Typography component="div" variant="h5" fontSize={40} fontWeight={400} >
            {hero.superhero}
          </Typography>
          <List>
            <HeroButton text={`Alter ego: `} >{hero.alter_ego}</HeroButton>
            <HeroButton text={`First Appearance: `} >{hero.first_appearance}</HeroButton>
            <HeroButton text={`Publisher: `} >{hero.publisher}</HeroButton>
            <HeroButton text={`Characters: `} >{hero.alter_ego !== hero.characters && hero.characters}</HeroButton>
          </List>
          <Button 
          variant="contained" 
          onClick={ onNavigateBack }
          sx={{maxWidth: '140px', minWidth: '140px'}}>
            Regresar
          </Button>
        </CardContent>
      </Box>
    </Card>
  )
}
