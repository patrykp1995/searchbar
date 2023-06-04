import React from 'react';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { useSelector } from 'react-redux';

const Home = () => {

    const products = useSelector((state) => state.products.products.products);
    const status = useSelector((state) => state.products.status);

    if (status === 'loading') {
        return <>Loading...</>;
    }

    if (status === 'failed') {
        return <>Error occurred while fetching products.</>;
    }

    if(!products?.length) {
        return <>Write something in search bar to see a result</>;
    }

    return (
        <>
            {products?.map((product) => {
                if (product.available) {
                    return (
                        <Card variant="outlined" key={product.sku} m={3}>
                            <>
                                <img src={product.image_url} alt={product.product_name} />
                                <Typography>{product.product_name}</Typography>
                                <Typography>{product.category}</Typography>
                            </>
                        </Card>
                    );
                }
                return null;
            })}
        </>
    );

};

export default Home;
