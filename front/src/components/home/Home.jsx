import React from 'react'
import { Helmet } from "react-helmet";
import HomeFirstSection from './HomeFirstSection';
import HomeCenterSection from './HomeCenterSection';
import HomeSecondSection from './HomeSecondSection';
import HomeEnd from './HomeEnd';
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
<HomeFirstSection/>
<HomeCenterSection/>
<HomeSecondSection/>
<HomeEnd/>
    </div>
  )
}

export default Home
