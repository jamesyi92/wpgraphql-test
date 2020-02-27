import React from 'react'
import Layout from "../components/layout"
import Hero from '../components/Hero'
import CardSection from '../sections/CardSection'


const CustomPage = (props) => {

  const section = props.pageContext.node.sectionBlocks.sectionBlocks;
  
  return(
    <Layout>
    <>
      <h1>Custom Page Header</h1>
        {
            section.map((section,i) => {
              
              const typeName = section.fieldGroupName;

              switch(typeName) {
                case 'customPage_Sectionblocks_SectionBlocks_HeroSection':
                  return <Hero key={i} {...section} />

                case 'customPage_Sectionblocks_SectionBlocks_CardsSection':
                  return <CardSection key={i} {...section} />

                default: 
                  return <h3>No Sections Found</h3>
              }

            })
        }
        </>
    </Layout>
  )
}

export default CustomPage;