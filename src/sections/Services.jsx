import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service)=> (
        <ServiceCard key={service.label} 
          {...service}
          
          // Certainly! Think of the service object as a box with different items inside it. Each item represents some information about a service, like its label and description.
          // Now, imagine you have a component called Services that needs to know about these items inside the box (the properties of the service object) to do its job.
          // To make it easy for the Services component to get these items, we use the {...service} syntax. It's like taking all the items from the service box and spreading them out on the table, so each item becomes easily accessible.
        />
      ))}
    </section>
  )
}

export default Services