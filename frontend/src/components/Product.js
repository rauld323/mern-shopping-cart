import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
	return (
		<div className='product'>
			<img
				src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
				alt='product name'
			/>

			<div className='product_info'>
				<p className='info_name'>Product 1</p>
				<p className='info_description'>
					Lorem ipsum dolor sit, amet
					consectetur adipisicing elit.
					Ipsa nemo officiis saepe
					excepturi rerum possimus
					quidem pariatur quas deleniti
					earum, culpa qui ea voluptates
					perspiciatis error dicta
					ducimus amet adipisci.
				</p>

				<p className='info_price'>$20.00</p>

				<Link
					to={`/product/${2222}`}
					className='info_button'>
					View
				</Link>
			</div>
		</div>
	);
};
// 1:40
export default Product;
