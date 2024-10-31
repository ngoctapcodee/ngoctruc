import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ad dolor, possimus vitae dignissimos totam voluptate beatae corporis amet illo commodi at, ex dolorum molestiae ipsa ipsam. Ipsa, porro. Fugiat?
        </p>
      </div>

      <div>
        <p className='text-x1 font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
      </div>

      <div>
        <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>0382685400</li>
            <li>ngoc492005@gmail.com</li>
            <li>Instagram: https://www.instagram.com/conjgbugerror.495/</li>
            <li>Facebook: https://www.facebook.com/tibberrr</li>
        </ul>
      </div>
    </div>

    <div>
        <hr />
        <p className='py-5 text-sm text-center font-medium'>BI&U STORE | CHUẨN ĐAM MÊ - ĐỈNH PHONG CÁCH</p>
    </div>

</div>
  )
}

export default Footer
