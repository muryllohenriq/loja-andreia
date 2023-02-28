import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products}) => {
  const { imagem, nome, detalhes, preco } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();

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
              src={urlFor(item)}
              className={i === index ? 'small-image selected-image' : 'small-image'}
              onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        
        <div className='product-detail-desc'>
          <h1>{nome}</h1>
          <div className='reviews'>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Detalhes: </h4>
          <p>{detalhes}</p>
          <p className='price'>R$ {preco}</p>
          <div className='quantity'>
            <h3>Quantidade:</h3>
            <p className='quantity-desc'>
              <span className='minus' onClick={decQty}><AiOutlineMinus/></span>
              <span className='num' onClick=''>{qty}</span>
              <span className='plus' onClick={incQty}><AiOutlinePlus/></span>
            </p>
          </div>
          <div className='buttons'>
            <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}>
              Adicionar ao Carrinho
            </button>
            <button type='button' className='buy-now' onClick=''>
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

export const getStaticProps = async ({ params: { identificador }}) => {
  const query = `*[_type == "produto" && identificador.current == '${identificador}'][0]`;
  const productsQuery = '*[_type == "produto"]';
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product }
  }
}

export default ProductDetails