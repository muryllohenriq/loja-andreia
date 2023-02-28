import React from 'react'

import { client } from '../lib/client';
import { Product, FooterBanner, Banner } from '../components'

const Home = ({ products, bannerData }) => {
  return (
    <>
    <Banner banner={bannerData.length && bannerData[0]}/>

    <div className='products-heading'>
      <h2>Produtos mais vendidos</h2>
      <p>Roupas femininas para todos os gostos</p>
    </div>

    <div className='products-container'>
      {products?.map((product) => product.name)}
    </div>

    <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home
