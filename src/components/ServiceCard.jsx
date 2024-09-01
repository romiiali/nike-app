
import { services } from "../constants"

const ServiceCard = () => {
  return (
    <div className=" gap-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {services.map(({imgURL,label,subtext})=>(
        <div className="shadow-3xl flex flex-col items-start gap-5 rounded-3xl py-16 px-10" key={label}>
            <div className="w-11 h-11 bg-coral-red rounded-full flex justify-center items-center">
            <img src={imgURL} alt="icon" width={24} height={24} />
            </div>
        <h2 className="font-bold text-2xl">{label}</h2>
        <p className="text-slate-gray font-montserrat text-lg">{subtext}</p>
        </div>
      ))}
    </div>
  )
}

export default ServiceCard
