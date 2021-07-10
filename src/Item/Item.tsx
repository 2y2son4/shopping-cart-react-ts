import Button from '@material-ui/core/Button';

// types
import { CartItemType } from '../App';

// styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  addToCartHandler: (clickedItem: CartItemType) => void;
  // RemoveFromCartHandler:;
};

const Item: React.FC<Props> = ({ item, addToCartHandler }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>$ {item.price}</h3>
    </div>
    <Button onClick={() => addToCartHandler(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
