import '../styles/slideshow.css'

export default function(){

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }else{
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenelements = document.querySelectorAll('.carousel');
    hiddenelements.forEach((el) => observer.observe(el));

    return(
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../photos/albi-logo.PNG" className="img a-block w-15" alt="..."/>
                    <div className="carousel-caption a-none a-md-block movedown text-center">
                        <h5>ALBI FLUID CONTROLS</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="../photos/p2-removebg.png" className="img a-block w-15" alt="..."/>
                    <div className="carousel-caption a-none a-md-block movedown text-center">
                        <h5>First slide label</h5>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="../photos/Capture-removebg.png" className="img a-block w-15" alt="..."/>
                    <div className="carousel-caption a-none a-md-block movedown text-center">
                        <h5>Shut down valves</h5>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="../photos/Capture6-removebg.png" className="img a-block w-15" alt="..."/>
                    <div className="carousel-caption a-none a-md-block movedown text-center">
                        <h5>Butterfly valve with Pneumatic actuators</h5>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="../photos/Capture7-removebg.png" className="img a-block w-15" alt="..."/>
                    <div className="carousel-caption a-none a-md-block movedown text-center">
                        <h5>Butterfly valve with Pneumatic actuators</h5>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="../photos/Capture3-removebg.png" className="img a-block w-15" alt="..."/>
                    <div className="carousel-caption a-none a-md-block movedown text-center">
                        <h5>Flow Meters</h5>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="../photos/Capture4-removebg.png" className="img a-block w-15" alt="..."/>
                    <div className="carousel-caption a-none a-md-block movedown text-center">
                        <h5>SPECIALIST IN ALL KIND OF FILTERS</h5>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="../photos/Capture5-removebg.png" className="img a-block w-15" alt="..."/>
                    <div className="carousel-caption a-none a-md-block movedown text-center">
                        <h5>TC Ends Butterfly Valves</h5>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="../photos/Copy_of_Chemiteck-removebg.png" className="img a-block w-15" alt="..."/>
                    <div className="carousel-caption a-none a-md-block movedown text-center">
                        <h5>Angle Piston Valves S/E</h5>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="../photos/r1.png" className="img a-block w-15" alt="..."/>
                    <div className="carousel-caption a-none a-md-block movedown text-center">
                        <h5>3 way ball valve flanged</h5>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="../photos/Capture11.png" className="img a-block w-15" alt="..."/>
                    <div className="carousel-caption a-none a-md-block movedown text-center">
                        <h5>Valve</h5>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="../photos/Capture12.png" className="img a-block w-15" alt="..."/>
                    <div className="carousel-caption a-none a-md-block movedown text-center">
                        <h5>Wafer check valve</h5>
                    </div>
                </div>
            </div>
            <div className="carousel-indicators moveup">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="btn active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="btn" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="btn" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className="btn" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" className="btn" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" className="btn" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" className="btn" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" className="btn" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" className="btn" aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" className="btn" aria-label="Slide 10"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" className="btn" aria-label="Slide 11"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" className="btn" aria-label="Slide 12"></button>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}