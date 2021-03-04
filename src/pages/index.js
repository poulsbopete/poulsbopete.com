import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Products from '../components/Products/Products'

const AdvancedExamplePage = () => (
  <Layout>
    <SEO title="Store in Stripe" />
    <h1>Welcome to the store, see our amazing items:</h1>
    <Products />
  </Layout>
)

export default AdvancedExamplePage
