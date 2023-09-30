import "../styles/aboutus.css"

export default function(){
    return(
        <div className="aboutus container">
            <div className="second-aboutus">
                <h3>About Our Company<hr/></h3>
                <p className="para">
                    Chemiteck Engineering Enterprises, an Authorised Channel partner of
                    M/s PHBB Valves Pvt. Limited, M/s Engineers Combine and M/s Flowmax Engineering in North India.
                <br/><br/>
                “PHBB” specialised in special services ball & Butterfly valves with exotic
                metallurgies, complying to most modern & latest technology as well as
                compliance to latest edition international standards, meeting all your
                specified requirements in terms of quality, performance & delivery, fully
                equipped to meet all your Valve and Valve Automation related demands.
                <br/><br/>
                "Engineers Combine" specialised in gate, globe, check and duel plate check-valves. 
                </p>
                <div id="articles"></div>
            </div>
            <img className="logoalbi" src="./photos/logo-removebg.png" alt="logo"/>
        </div>
    )
}