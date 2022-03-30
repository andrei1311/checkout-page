import React from 'react';
import { useCart } from 'react-use-cart';

const Itemcard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="bg-gray-200  card ml-20">
      <div className="flex card">
        <h2 className="font-bold mr-60">{props.name}</h2>
        <p className="mr-20">
          Price: <span className="text-blue-500 font-bold">${props.price} </span></p>
          <div className='mt-2'>
            <button className="bg-green-600 hover:bg-green-400 text-white w-40 h-10 flex items-center justify-center" onClick={() => addItem(props.product)}>Add to cart</button>
          </div>
          </div>
          </div>
  );
};

export default Itemcard;