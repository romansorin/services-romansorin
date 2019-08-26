import React from 'react'
import { Link } from 'gatsby'

import plans from '../images/plans.svg'

import {
  Button,
  Hero,
  Background,
  PricingCard,
  FAQCard,
  Header,
  Footer,
  SEO,
} from '../components'
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
          <p className="text-center text-softwhite italic font-body text-sm font-light">
            Get your first month completely free.
          </p>
          <div className="mt-8 container mx-auto flex flex-row">
            <img className="mx-auto" src={plans} alt="Pricing plans" />
            <PricingCard name="Standard plan" price="$100/month">Flexible options and pricing for businesses, startups, or users with advanced needs and stricter budgets.</PricingCard>
          </div>
        </Hero>
      </Background>
      <div className="container mx-auto">
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
