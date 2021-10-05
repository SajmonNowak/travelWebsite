import * as React from "react"
import Email from "../components/Email"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"


const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <Trips/>
      <Testimonials/>
      <Stats/>
      <Email/>
    </Layout>
  )
}

export default IndexPage
