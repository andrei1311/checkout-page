import React, {useEffect, useState} from 'react';
import { ApiURL } from "../../data";
import Itemcard from '../Itemcard/Itemcard';


const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${ApiURL}`);
			if (response.ok) {
				setProducts(await response.json());
			}
		};
		fetchData();
	}, [])
	return (
		<div>
			<div className='-mt-10'>
			<h1 className='bg-gray-200 ml-24 mt-16 text-2xl font-medium'>Checkout page</h1>
			<div className='border-b-4 border-sky-500 mt-4 w-12 ml-24' />
			<section>
				<div>
					{products.map((product, id) =>{
							return(
								
					<Itemcard 
						key={id}
						product={product}
						name={product.name}
						price={product.price} 
					/>
						)
					})}
				</div>
			</section>
			</div>
		</div>
	);
};

export default Home;