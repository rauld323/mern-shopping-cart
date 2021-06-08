import './ProductScreen.css';

function ProductScreen() {
	return (
		<div className='productscreen'>
			<div className='productscreen_left'>
				<div className='left_image'>
					<img
						src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
						alt='product Name'
					/>
				</div>
				<div className='left_info'>
					<p className='left_name'>
						PlayStation
					</p>
					<p>Price: 400</p>
					<p>
						Lorem ipsum dolor
						sit amet consectetur
						adipisicing elit.
						Quis eaque natus{' '}
					</p>
				</div>
			</div>
			<div className='productscreen_right'>
				<div className='right_info'>
					<p>
						Price:
						<span>500</span>
					</p>
					<p>
						Status:
						<span>
							In stock
						</span>
					</p>
					<p>
						Qty:
						<select>
							<option value='1'>
								1
							</option>
							<option value='2'>
								2
							</option>
							<option value='3'>
								3
							</option>
							<option value='4'>
								4
							</option>
						</select>
					</p>
					<p>
						<button type='button'>
							Add To
							Cart
						</button>
					</p>
				</div>
			</div>
		</div>
	);
}

export default ProductScreen;
