import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { imagem, nome, identificador, preco } }) => {
  return (
    <div>
      <Link href={`/produto/${identificador.current}`}>
        <div className='product-card'>
        <img src={urlFor(imagem && imagem[0])}
        width={250}
        height={250}
        className="product-image"
        />
        <p className='product-name'>{nome}</p>
        <p className='product-price'>R$ {preco}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product