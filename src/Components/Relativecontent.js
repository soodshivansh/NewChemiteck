import '../styles/relativecontent.css'

export default function(){
    return(
        <div className="articles">
            <div className="container header-articles">
                <h1>Relative Content<hr style={{ height: "0.5vh", backgroundColor: "white" }} /></h1>
            </div>
            <div className="normal active">
                <div className="cards">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="../photos/Angle_valve-removebg-preview-removebg-preview.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">The Innovation of Angle Body Piston Actuated Valves by ALBI Fluid Controls</h5>
                            <p className="card-text">Explore ALBI Fluid Controls' Angle Body Piston Actuated Valve: a pinnacle of fluid control innovation. Discover its features, applications, and how ALBI enables optimal flow management.</p>
                            <a href="./catalogues/Angle Body Piston Valves.pdf" target="_blank" class="btn btn-primary">View Full Documentation</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-of-cards">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-inner-cards">
                        <div className="carousel-card active card" style={{width: "15rem"}}>
                            <img src="../photos/Angle_valve-removebg-preview-removebg-preview.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">The Innovation of Angle Body Piston Actuated Valves by ALBI Fluid Controls</h5>
                                <p className="card-text">Explore ALBI Fluid Controls' Angle Body Piston Actuated Valve: a pinnacle of fluid control innovation. Discover its features, applications, and how ALBI enables optimal flow management.</p>
                                <a href="./catalogues/Angle Body Piston Valves.pdf" target="_blank" class="btn btn-primary">View Full Documentation</a>
                            </div>
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{ color: 'black'}}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{ color: 'black'}}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
            </div>      
        </div>
    )
}
