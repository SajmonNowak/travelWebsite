import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"


const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Trips />
      <Testimonials/>
    </Layout>
  )
}

export default IndexPage
