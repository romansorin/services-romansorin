import React from 'react'
import { Link } from 'gatsby'

import Button from '../components/Button'
import Hero from '../components/hero'
import Background from '../components/Background'
import PricingCard from '../components/PricingCard'
import FAQCard from '../components/FAQCard'
import Header from '../components/header'
import Footer from '../components/footer'

import Image from '../components/image'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'

import '../css/styles.css'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <Background className="hero-svg">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Hero
          title="Unlimited sites. Unlimited storage."
          subtitle="And so much more, all for one price."
        >
          <p class="text-center text-softwhite italic font-body text-sm font-light">
            Get your first month completely free.
          </p>
        </Hero>
      </Background>
      <div className="container mx-auto">
        <PricingCard
          name="Standard plan"
          price="100"
          details="sdaasddsasda"
          buttonText="dsads"
        />
        <FAQCard />
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div> */}
      </div>
      <Footer />
    </>
  )
}

export default IndexPage
