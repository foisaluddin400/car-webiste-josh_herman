import BookingForm from '@/components/BookingForm/BookingForm'
import SharedBannar from '@/components/shared/SharedBannar'
import React from 'react'

const page = () => {
  return (
    <div>
       <SharedBannar
        title="Exotic Cars Booking"
        description="Step aboard a private floating villa for an unforgettable event surrounded by sweeping 360° water views. Designed with luxury, comfort, and exclusivity in mind, these villas redefine what it means to host on the water."
      ></SharedBannar>
      <BookingForm></BookingForm>
    </div>
  )
}

export default page