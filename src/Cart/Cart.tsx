import CartItem from '../CartItem/CartItem';

// styles
import { Wrapper } from './Cart.styles';

// type
import { CartItemType } from '../App';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Shopping cart</h2>

      {/* check if the cart is empty */}
      {cartItems.length === 0 ? <p>No items yet...</p> : null}
      {cartItems.map((item) => (
        <CartItem />
      ))}
    </Wrapper>
  );
};

export default Cart;
