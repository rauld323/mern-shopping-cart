import './CartScreen.css';
import CartItem from '../components/CartItem';

function CartScreen() {
	return (
		<div className='cartScreen'>
			<div className='cartscreen_left'>
				<h2>Shopping Cart</h2>
				<CartItem />
			</div>
			<div className='cartscreen_right'>
				<div className='cartscreen_info'>
					<p>Subtotal (0) items</p>
					<p>$56.99</p>
				</div>
				<div>
					<button>
						Proceed To Checkout
					</button>
				</div>
			</div>
		</div>
	);
}

export default CartScreen;
