
import { Star } from 'lucide-react'
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <section>
      <div className='flex flex-col justify-center items-center mb-24 leading-normal'>
        <h3 className='font-palanquin text-center text-4xl font-bold'>What Our <span className='text-coral-red'>Customers</span> Say?</h3>
        <p className='info-text text-center'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>
      <div className='flex flex-row justify-around items-center mt-10  w-full max-md:flex-col '>
        {reviews.map(({imgURL,customerName,rating,feedback})=>(
          <div key={customerName} className='flex flex-col justify-between items-center gap-5 text-center w-[30%] max-md:w-full'>
            <img src={imgURL} alt='customer' width={120} height={120} className='rounded-full'/>
            <p className='text-xl info-text'>{feedback}</p>
              <div className='flex flex-row'>
                <Star/>
                <p className='info-text'>({rating})</p>
            </div>
            <h3 className='font-bold text-xl'>{customerName}</h3>
            </div>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
