import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState([])

  let foundProduct;
  let index;

  const onAdd = (product, quantity, chosenSize) => {
    if (size.length < 1) {
      toast.error('Por favor escolha um tamanho');
      setQty(1)
    } else {
      product.chosenSize = chosenSize
      product.newId = product._id + product.chosenSize

      const checkProductInCart = cartItems.find(
        (item) => item._id === product._id && item.chosenSize === size
      );
  
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + product.preco * quantity
      );
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
  
      setQty(1)
      setSize([])
  
      if (checkProductInCart) {
        const updatedCartItems = cartItems.map((cartProduct) => {
          if (cartProduct._id === product._id && cartProduct.chosenSize === product.chosenSize) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity
            }
          } else {
            return { ...cartProduct }
          }
        });
  
        setCartItems(updatedCartItems);
      } else {
        product.quantity = quantity;
  
        setCartItems([...cartItems, { ...product }]);
      }
  
      toast.success(`${qty} ${product.nome} Adicionado ao carrinho!`);
    }
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.newId === product.newId);
    const newCartItems = cartItems.filter((item) => item.newId !== product.newId);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.preco * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item.newId === id);
    index = cartItems.findIndex((product) => product.newId === id);
    const newCartItems = cartItems.filter((item) => item.newId !== id)

    if (value === "inc") {
      setCartItems((prevCartItems) => {
        prevCartItems[index] = {...foundProduct, quantity: foundProduct.quantity + 1,};
        return prevCartItems;
      });
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.preco)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems((prevCartItems) => {
          prevCartItems[index] = {...foundProduct, quantity: foundProduct.quantity - 1,};
          return prevCartItems;
        });
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.preco)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        setSize,
        size
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
