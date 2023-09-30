import Slideshow from './slideshow'
import '../styles/front-page.css'

export default function(){
    return(
        <div className="background" id="home">
            <div className="container container-1">
                <div className="heading-title">
                    <h1 className="animatetyping">Products & Solution Provider</h1>
                    <p className="para my-4"> Chemiteck Engineering Enterprises,
                    a one stop products and solution provider in the field of
                    Manual & Automated Valves, Flow level measurement field instruments,
                    Instrument Air & Process Filters.
                    </p> 
                </div>
                <Slideshow/>
            </div>
        </div>
    )
}