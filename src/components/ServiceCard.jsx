

const ServiceCard = ({imgURL , label  , subtext}) => {
  return (
    <section>
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hover:scale-95 transform transition-transform duration-300 ease-in-out ">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img 
                src={imgURL}
                alt={label}
                width={24}
                height={24}
            />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
            {label}
        </h3>
        <p className="text-slat-grey mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
            {subtext}
        </p>
      </div>
    </section>
  )
}

export default ServiceCard