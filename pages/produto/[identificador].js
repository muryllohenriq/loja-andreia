import React, { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames';

const ProductDetails = ({ product, products }) => {
  const { imagem, nome, detalhes, preco, tamanho, parcelas } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart, size, setSize } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty, size);

    setShowCart(true);
  }

  useEffect(() => {
    setSize([])
  }, [`/${product.detalhes}`])

  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img src={urlFor(imagem && imagem[index])} className='product-detail-image' />
          </div>
          <div className='small-images-container'>
            {imagem?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className='product-detail-desc'>
          <h1>{nome}</h1>
          <h4>Detalhes: </h4>
          <p>{detalhes}</p>
          <h3>Tamanhos:</h3>
          <RadioGroup value={size} onChange={setSize} className="mt-4">           
            <div className="grid grid-cols-4 gap-1 sm:grid-cols-8 lg:grid-cols-4">
              {tamanho.map((item) => (
                <RadioGroup.Option
                  key={item}
                  value={item}                 
                  disabled={!item}               
                  className={({ checked }) =>
                    classNames(
                      checked ? 'ring-2 ring-mainColor' : '',
                      'cursor-pointer bg-white text-gray-900 shadow-sm group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 w-20 h-10'
                    )
                  }
                >                                
                  {({ checked }) => (
                    <>
                      <RadioGroup.Label as="span">{item}</RadioGroup.Label>
                        <span
                          className={classNames(
                            checked ? 'border-mainColor' : 'border-gray-200 rounded-md',
                          )}
                          aria-hidden="true"
                        />
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>         
          <p className='price'>{parcelas} x R$ {preco}</p>
          <div className='quantity'>
            <h3>Quantidade:</h3>
            <p className='quantity-desc'>
              <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
              <span className='num'>{qty}</span>
              <span className='plus' onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className='buttons'>
          <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty, size)}>
              Adicionar ao Carrinho
            </button>
            <button type='button' className='buy-now' onClick={handleBuyNow}>
              Comprar Agora
            </button>
          </div>
        </div>
      </div>

      <div className='maylike-products-wrapper'>
        <h2>Você também pode gostar</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "produto"] {
    identificador {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((produto) => ({
    params: {
      identificador: produto.identificador.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { identificador } }) => {
  const query = `*[_type == "produto" && identificador.current == '${identificador}'][0]`;
  const productsQuery = '*[_type == "produto"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product }
  }
}

export default ProductDetails