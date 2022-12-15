import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { Alert, Box, Divider, Typography } from '@mui/material';
import { HeroCard } from '../components/HeroCard';
import { getHeroesByAnyAttribute, getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = useMemo(() => getHeroesByAnyAttribute(q), [q]);

  return (
    <>
      <Typography
        variant="h3"
        color="initial"
        fontWeight={400}
        paddingBottom={2}
      >
        Search
      </Typography>
      <Divider />
      {
        (q === '')
          ?
          <Alert severity="info" className='animate__animated animate__fadeIn'> Search a hero </Alert>
          : (heroes.length === 0) &&
          <Alert severity="error" className='animate__animated animate__fadeIn'>
            No hero with
            <Typography display={'inline'} color="red">{` ${q}`}</Typography>
          </Alert>
      }
      <Box display={'flex'} sx={{ flexWrap: 'wrap' }} >
        {
          heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))
        }
      </Box>
    </>
  )
}

