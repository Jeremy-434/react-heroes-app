import { Box, Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/heroes/${id}.jpg`

    return (
        <Card
            className="animate__animated animate__fadeIn"
            sx={{
                display: 'flex',
                width: 360,
                m: 1,
            }}
        >
            <CardMedia
                component="img"
                sx={{ width: '40%', height: 250, }}
                image={heroImageUrl}
                alt={superhero}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                <CardContent sx={{
                    flex: '1 0 auto',
                    ml: 2,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                }}>
                    <Box>
                        <Typography component="div" variant="h5" fontSize={20} fontWeight={400} >
                            {superhero}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" fontSize={14}>
                            {alter_ego}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" fontSize={14}>
                            {alter_ego !== characters && characters}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary" component="div" fontSize={10}>
                            {first_appearance} caption
                        </Typography>
                    </Box>
                    <Link
                        component={RouterLink}
                        to={`/hero/${id}`}
                    >
                        Mas...
                    </Link>
                </CardContent>
            </Box>
        </Card>
    )
}
