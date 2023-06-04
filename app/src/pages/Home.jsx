import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ProductCard from "../components/ProductCard";
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

const Home = () => {
    const totalCount = useSelector((state) => state.products.totalCount);
    return (
        <Container>
            <Typography>Total Count: {totalCount}</Typography>
            <Grid container spacing={12} m={3}>
                    <ProductCard />
            </Grid>
        </Container>
    );
};

export default Home;
