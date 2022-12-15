import { useMemo } from 'react';
import { Grid, List, } from '@mui/material';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher] );

    return (
        <List
            sx={{
                display: 'flex',
                // flexWrap: 'wrap',
            }}
        >
            <Grid container>
                {heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))}
            </Grid>
        </List>
    )
}
