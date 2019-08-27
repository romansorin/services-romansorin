import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Hero, Background, PricingCard, Header, SEO } from '../components'

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

  const pricingPlans = {
    standard: {
      classes: 'ml-auto',
      styles: { zIndex: 1 },
      name: 'Standard plan',
      buttonText: 'try for free'.toUpperCase(),
      buttonClasses: 'bg-themeGreen text-softwhite',
      price: '$100/month',
      link: 'https://www.romansorin.com/contact',
      features: [
        'Unlimited sites w/ SSL',
        'Unlimited storage',
        '24/7 support',
        '99.99%',
        'Managed and deployed by us'
      ]
    },
    custom: {
      classes: 'mr-auto my-auto',
      styles: { paddingTop: '2rem', paddingBottom: '2rem' },
      name: 'Custom plan',
      buttonText: 'contact us'.toUpperCase(),
      buttonClasses: 'border-lightgrey text-lightgrey',
      price: "Let's chat",
      link: 'https://www.romansorin.com/contact',
      features:
        'Flexible options and pricing for businesses, startups, or users with advanced needs and stricter budgets.'
    }
  }

  return (
    <>
      <SEO title='Home' />
      <div className='mb-64'>
        <Background className='hero-svg'>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Hero
            title='Unlimited sites. Unlimited storage.'
            subtitle='And so much more, all for one price.'
          >
            <p className='text-center text-softwhite italic font-body text-sm font-light'>
              Get your first month completely free.
            </p>
            <div className='mt-24 container mx-auto flex flex-row'>
              <PricingCard {...pricingPlans.standard}>
                <ul>
                  {pricingPlans.standard.features.map(feature => (
                    <li key={feature}>- {feature}</li>
                  ))}
                </ul>
              </PricingCard>
              <PricingCard {...pricingPlans.custom}>
                {pricingPlans.custom.features}
              </PricingCard>
            </div>
          </Hero>
        </Background>
      </div>
      <div className='container mx-auto mb-16'>
        <h1 className='text-4xl font-bold'>More coming soon.</h1>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default IndexPage
