import Link from 'next/link'
import React from 'react'

import { urlFor } from '../lib/client'

const Banner = ({ banner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{banner.textoPequeno}</p>
      </div>
      <h3>{banner.textoDoMeio}</h3>
      <h1>{banner.textoGrande1}</h1>
      <img src={urlFor(banner.imagem)} alt="calça" className='hero-banner-image' />

      <div>
        <Link href={`/produto/${banner.produto}`}>
        <button type='button'>{banner.textoDoBotao}</button>
        </Link>
        <div className='desc'>
          <h5>Descrição</h5>
          <p>{banner.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner