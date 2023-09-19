import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" 
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

    {/* This div is for content and button */}
    <div className="flex flex-1 flex-col">
    <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">We Provide You 
    <span className="text-coral-red"> Super</span>
    <span className="text-coral-red"> Quality</span> Shoes
    </h2>
    <p className="mt-6 lg:max-w-lg info-text">
    The level of comfort in Nike shoes can vary depending on the specific model and design. Nike offers a wide range of shoes for various sports, activities, and lifestyles, and comfort is one of the factors they prioritize in their product development.
    </p>
    <div className="mt-6">
        <Button label="View details"/>
    </div>
    </div>

    {/* Side image render, lets do it */}

    <div className="flex flex-1 justify-center items-center">
        <img 
            src={shoe8}
            alt="shoelooking8"
            width={570}
            height={522}
            className="object-contain hover:scale-95 transform transition-transform duration-300 ease-in-out"
        />
    </div>
    </section>
  )
}

export default SuperQuality