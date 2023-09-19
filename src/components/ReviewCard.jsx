import { star } from "../assets/icons"

const ReviewCard = ({imgURL , customerName , rating , feedback}) => {
  return (
    <section>
        <div className="flex justify-center items-center flex-col">
            <img 
                src={imgURL}
                alt="Customer"
                className="rounded-full object-cover w-[120px] h-120px hover:scale-110 transform transition-transform"
            />
            <p className="mt-6 max:w-sm text-center info-text">{feedback}</p>
            
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img 
                    src={star}
                    width={24}
                    height={24}
                    className="object-contain m-0"
                />
                <p className="font-montserrat text-slate-gray text-xl">{rating}</p>
            </div>
            <h3 className="mt-1 font-palanquin text-2xl text-center font-bold">
                {customerName}
            </h3>
        </div>
       
    </section>
  )
}

export default ReviewCard