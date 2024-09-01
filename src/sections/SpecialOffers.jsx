import Button from "../components/Button"
import {arrowRight} from '../assets/icons'
import { offer } from "../assets/images"


const SpecialOffers = () => {
  return (
    <section className="flex flex-row-reverse justify-between max-lg:flex-col ">
      <div id="offers" className="flex flex-col justify-evenly">
        <h2 className="text-4xl font-bold font-palanquin"><span className='text-coral-red'>Special </span>Offer</h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="flex flex-row gap-4 mt-4">
        <Button label='Shop Now'iconURL={arrowRight}/>
        <Button label="View More" backgroundColor='bg-white' borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
      <div className="max-lg:mt-4 object-contain w-full">
        <img src={offer} alt="offers" width={773} height={687} className="object-contain w-full"/>
      </div>
    </section>
  )
}

export default SpecialOffers

