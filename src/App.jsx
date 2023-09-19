import {Hero , CustomerReviews , Footer , PopularProducts , Services , Subscribe , SpecialOffer , SuperQuality ,
} from './sections';
import {Nav} from './components';

const App = () =>{
  return(
  <main className="relative">
    <Nav />
  <section className="xl:padding-l wide:padding-r padding-b"> 
  {/* What was that xl:padding-1 or padding-b well , xl is for xtralarge screen and padddind-1 or b is we define inside the index.css as we talk about the derevites in our tailwind class exactly the same {must have a look inside the index.css file} */}
    <Hero />
  </section>

  <section className="padding">
    <PopularProducts />
  </section>

  <section className="padding">
    <SuperQuality/>
  </section>

  <section className="padding-x">
    <Services/>
  </section>

  <section className="padding">
    <SpecialOffer/> 
  </section>

  <section className="bg-pale-blue padding">
    <CustomerReviews />
  </section>

  <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe />
  </section>

  <section className="bg-black padding-x padding-t pb-8">
    <Footer />
  </section>
  </main>
  )
}

export default App;