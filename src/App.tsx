import { useState } from 'react';
import { useQuery } from 'react-query';

// components
import Item from './Item/Item';
// import Drawer from '@material-ui/core/drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

// styles
import { Wrapper } from './App.styles';

// types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json(); // converting to JSON is also async

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

  console.log(data);

  const getTotalItems = () => null;

  const addToCartHandler = (clickedItem: CartItemType) => null;

  const removeFromCartHandle = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} addToCartHandler={addToCartHandler} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
