import ReviewCard from "../components/ReviewCard"
import {reviews} from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
     <h3 className="font-palanquin text-center text-4xl font-bold">
      What Our 
      <span className="text-coral-red ">Customers</span>
      Say?
     </h3>
     <p className="info-text m-auto mt-4 max-w-lg text-center">
      Hear genuie stories from our satisfied customers about their exceptionals experiences with us.
     </p>

     <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review)=>{
          return <ReviewCard 
            key={review.customerName} 
            // {...review} we have to choose here by using spread we can spread the data and
            //dedine that props to another components and uese it right! or define it manually 
            //let me watch how i am doing this 
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          /> 
        })}
     </div>
    </section>
  )
}

export default CustomerReviews

