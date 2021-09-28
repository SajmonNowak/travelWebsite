import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Trips from "../components/Trips"


const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Trips />
    </Layout>
  )
}

export default IndexPage
