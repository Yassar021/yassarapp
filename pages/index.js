import Head from "next/head"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Pricing from "../components/pricing"
import Project from "../components/project"
import Question from "../components/question"
import Whatido from "../components/whatido"

const index = () => {
  return(
    <>
    <Head>
      <title>Yassar</title>
    </Head>
    <Hero />
    <Whatido />
    <Project />
    <Pricing />
    <Question />
    <Footer />
    </>
  )
}

export default index