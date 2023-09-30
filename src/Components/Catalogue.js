import '../styles/catalogue.css'
import React, { useState, useEffect } from 'react';
import '../styles/popup.css';

export default function(){

    const [isPopupOpen, setPopupOpen] = useState(false);

    function openPopup() {
        setPopupOpen(true);
    }

    function closePopup() {
        setPopupOpen(false);
    }

    useEffect(() => {
        // Disable body scrolling when the popup is open
        if (isPopupOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup the effect when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isPopupOpen]);

    return(
        <>
        {isPopupOpen && (
            <div id="popup" className="blur-background">
                <div className="popup-content">
                    <div className="grid-container">
                        <div className='grid-item'>
                            <div className="box">
                                <img className="cata-photo" src="./photos/1.png" alt="Product" />
                            </div>
                            <div className="box" style={{width: "60%"}}>
                                <div className="cata-p">Chemiteck Product Range</div>
                                <a href="./catalogues/chemiteck product catalogue.pdf" target="_blank"><button className="btn btn-outline-primary" type="button">Download</button></a>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="box"><img className="cata-photo" src="./photos/2.png"/></div>
                            <div className="box" style={{width: "60%"}}>
                                <div className="cata-p">Ball Valves-Floaters & Trunion Mounted</div>
                                <a href="./catalogues/Ball Valves - Floaters & Trunion Mounted.pdf" target="_blank"><button className="btn btn-outline-primary" type="button">Download</button></a>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="box"><img className="cata-photo" src="./photos/12.png"/></div>
                            <div className="box" style={{width: "60%"}}>
                                <div className="cata-p">Engineers Combine</div>
                                <a href="./catalogues/Product catalogue - Engineers Combine.pdf"  target="_blank"><button className="btn btn-outline-primary" type="button">Download</button></a>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="box"><img className="cata-photo" src="./photos/3.png"/></div>
                            <div className="box" style={{width: "60%"}}>
                                <div className="cata-p">PHBB Double & Tripple Offset Valves</div>
                                <a href="./catalogues/PHBB Double & Tripple Offset Butterfly Valves.pdf" target="_blank"><button className="btn btn-outline-primary" type="button">Download</button></a>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="box"><img className="cata-photo" src="./photos/4.png"/></div>
                            <div className="box" style={{width: "60%"}}>
                                <div className="cata-p">PHBB Metal Seated Ball Valves</div>
                                <a href="./catalogues/PHBB Metal Seated Ball Valves.pdf" target="_blank"><button className="btn btn-outline-primary" type="button">Download</button></a>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="box"><img className="cata-photo" src="./photos/5.png"/></div>
                            <div className="box" style={{width: "60%"}}>
                                <div className="cata-p">PHBB Multiport Ball Valves</div>
                                <a href="./catalogues/PHBB Multiport Ball Valves.pdf"  target="_blank"><button className="btn btn-outline-primary" type="button">Download</button></a>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="box"><img className="cata-photo" src="./photos/6.png"/></div>
                            <div className="box" style={{width: "60%"}}>
                                <div className="cata-p">PHBB Penumatic Actuator</div>
                                <a href="./catalogues/PHBB Penumatic Actuator.pdf"  target="_blank"><button className="btn btn-outline-primary" type="button">Download</button></a>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="box"><img className="cata-photo" src="./photos/7.png"/></div>
                            <div className="box" style={{width: "60%"}}>
                                <div className="cata-p">PHBB PNEUMATIC ACTUATOR S SERIES</div>
                                <a href="./catalogues/PHBB PNEUMATIC ACTUATOR S SERIES (SCOTCH & YOKE).pdf" target="_blank"><button className="btn btn-outline-primary" type="button">Download</button></a>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="box"><img className="cata-photo" src="./photos/8.png"/></div>
                            <div className="box" style={{width: "60%"}}>
                                <div className="cata-p">PHBB Segmented Ball Valves</div>
                                <a href="./catalogues/PHBB Segmented Ball Valves.pdf" target="_blank"><button className="btn btn-outline-primary" type="button">Download</button></a>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="box"><img className="cata-photo" src="./photos/9.png"/></div>
                            <div className="box" style={{width: "60%"}}>
                                <div className="cata-p">PHBB Soft Seated Butterfly Valves</div>
                                <a href="./catalogues/PHBB Soft Seated Butterfly Valves.pdf" target="_blank"><button className="btn btn-outline-primary" type="button">Download</button></a>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="box"><img className="cata-photo" src="./photos/10.png"/></div>
                            <div className="box" style={{width: "60%"}}>
                                <div className="cata-p">PHBB Tank Bottom Ball Valves</div>
                                <a href="./catalogues/PHBB Tank Bottom Ball Valves.pdf" target="_blank"><button className="btn btn-outline-primary" type="button">Download</button></a>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="box"><img className="cata-photo" src="./photos/11.png"/></div>
                            <div className="box" style={{width: "60%"}}>
                                <div className="cata-p">PHBB V-Notch Ball Valves</div>
                                <a href="./catalogues/PHBB V-Notch Ball Valves.pdf" target="_blank"><button className="btn btn-outline-primary" type="button">Download</button></a>
                            </div>
                        </div>``
                    </div>
                </div>
                {/* Close button to close the popup */}
                <div className="close-button" onClick={closePopup}>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
        )}
        <div className="catalogue">
            <h1>Catalogue</h1>
            <div className="btn-catalogue">
                <button className="button-19" role="button" onClick={openPopup}>View Catalogue</button>
            </div>
            <hr style={{ height: "0.5vh", backgroundColor: "black" }} />
        </div>
        </>
    )
}