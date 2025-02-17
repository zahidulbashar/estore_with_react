import React from 'react'
import Hero from '../components/Hero'
import ProductGallory from '../components/ProductGallory'
import Products from '../components/Products'
import ProductsGrid from '../components/ProductsGrid'
import Promotion from '../components/Promotion'
import Category from '../components/Category'
import Discounts from '../components/Discounts'

const Home = () => {
  return (
  <>
  <Hero/>
  <ProductGallory/>
  <Products/>
  <ProductsGrid/>
  <Promotion/>
  <Category/>
  <Discounts/>
  </>
  )
}

export default Home