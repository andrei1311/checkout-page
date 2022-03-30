import React from "react";
import { useCart } from "react-use-cart";
import ReactHover, { Trigger, Hover } from "react-hover";

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0,
};

const Cart = (props) => {
  const { isEmpty, cartTotal, updateItemQuantity, removeItem, items } =
    useCart();
  if (isEmpty)
    return (
      <div className="bg-gray-100 w-96 h-56 ml-10 border-2 border-gray-200 mt-24">
        <h1 className="mt-8 ml-6">No products in your shopping cart</h1>
      </div>
    );

  return (
    <section className="bg-slate-200 h-3/5 mt-6 ml-8 border-2 border-gray-400 mt-20">
      <div>
        <h1 className="font-medium ml-3 mb-4 p-4">
          Products in your shopping cart
        </h1>
        <table className="w-full">
          <thead className="border-b-2 border-gray-300">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Product
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Quantity
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((product, index) => {
              return (
                <tr key={index}>
                  <td className="p-3 text-sm text-gray-700 font-bold  flex inline mt-2">
                    {product.name}
                    <span className="ml-2">
                      <ReactHover options={optionsCursorTrueWithMargin}>
                        <Trigger type="trigger">
                          <h1
                            style={{
                              background: "#bdc1ca",
                              width: "20px",
                              height: "20px",
                              color: "#e2e5ec",
                              textAlign: "center",
                            }}
                            className="rounded-full"
                          >
                            i
                          </h1>
                        </Trigger>
                        <Hover type="hover">
                          <h1
                            style={{
                              background: "#fff",
                              width: "200px",
                              padding: "5px",
                            }}
                          >
                            {product.description}
                          </h1>
                        </Hover>
                      </ReactHover>
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    <input
                      className="w-12 border-2 border-gray-400 placeholder-black"
                      placeholder={product.quantity}
                    />
                    <button
                      className="bg-green-500 w-4 ml-4 rounded text-white font-bold text-center"
                      onClick={() =>
                        updateItemQuantity(product.id, product.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="bg-green-500 w-4 ml-2 rounded text-white font-bold text-center"
                      onClick={() =>
                        updateItemQuantity(product.id, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="bg-red-400 h-9 p-2 ml-4 rounded text-white font-bold text-center"
                      onClick={() => removeItem(product.id)}
                    >
                      Remove product
                    </button>
                  </td>
                  <td className="p-3 text-sm text-gray-700 font-bold">
                    ${product.price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="border-t-2 border-black w-11/12">
          <h1 className="mt-2 float-right font-bold mb-8">
            Total: ${cartTotal.toFixed(2)}
          </h1>

          <button className="bg-green-500 font-bold text-white w-80 h-10 mt-18 ml-20">
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
