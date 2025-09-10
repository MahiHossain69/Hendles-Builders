import React from 'react'
import Hero from '@/components/sections/hero/heroSection'
import Local from '@/components/sections/local/localSection'
import Service from '@/components/sections/service/serviceSection'
import Project from '@/components/sections/project/projectSection'
import Stats from '@/components/sections/stats/statsSection'
import Client from '@/components/sections/client/clientSection'
import Footer from '@/components/sections/footer/footerSection'
const page = () => {
  return (
    <div>
      <Hero/>
      <Local/>
      <Service/>
      <Project/>
      <Stats/>
      <Client/>
      <Footer/>
    </div>
  )
}

export default page
