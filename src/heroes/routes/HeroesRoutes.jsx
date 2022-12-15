import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';
import { Navbar } from '../../ui';
import { Container } from '@mui/material';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <Container sx={{m: 'auto', my: 2}}>
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:heroId" element={<HeroPage />} />
                
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </Container>
        </>
    )
}
