import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { desconto, textoGrande1, textoGrande2, prazoDaPromocao, textoPequeno, textoDoMeio, desc, produto, textoDoBotao, imagem} }) => {
  return (
    <div className='footer-banner-container'>
        <div className='banner-desc'>
            <div className='left'>
            <p>{desconto}</p>
            <h3>{textoGrande1}</h3>
            <h3>{textoGrande2}</h3>
            <p>{prazoDaPromocao}</p>
            </div>
            <div className='right'>
            <p>{textoPequeno}</p>
            <h3>{textoDoMeio}</h3>
            <p>{desc}</p>
            <Link href={`/produto/${produto}`}>
                <button type='button'>{textoDoBotao}</button>
            </Link>
            </div>
            
            <img src={urlFor(imagem)} className='footer-banner-image' alt="" />
        </div>
    </div>
  )
}

export default FooterBanner