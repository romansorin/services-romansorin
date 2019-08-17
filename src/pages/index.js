import React from 'react'
import { Link } from 'gatsby'

import Button from '../components/Button'
import Hero from '../components/hero'
import Background from '../components/Background'
import PricingCard from '../components/PricingCard'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import '../css/styles.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Background className="bg-purple-500">
      <Hero />
      <Button>test</Button>
    </Background>
    <p>Welcome to your new Gatsby site.</p>
    <PricingCard
      name="Standard plan"
      price="100"
      details="sdaasddsasda"
      buttonText="dsads"
    />
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
