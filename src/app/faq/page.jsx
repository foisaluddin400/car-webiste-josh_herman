import Faq from '@/components/faq/FaqForm'
import SharedBannar from '@/components/shared/SharedBannar'
import React from 'react'

const page = () => {
  //d
  return (
    <div>
        <SharedBannar    title="FAQ"
        description="Step aboard a private floating villa for an unforgettable event surrounded by sweeping 360° water views. Designed with luxury, comfort, and exclusivity in mind, these villas redefine what it means to host on the water."></SharedBannar>
        <Faq></Faq>
    </div>
  )
}

export default page