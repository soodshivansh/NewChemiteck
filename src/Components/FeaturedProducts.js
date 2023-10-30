import '../styles/Featuredproducts.css'

export default function(){
    return(
        <div className="container-for-products" id="product-range">
        <div className = "headerfor">
            <h1>Product Range<hr style={{ height: "0.5vh", backgroundColor: "white" }} /></h1>
        </div>
            <div className="floor floor1">
                <div className="part1 part11">
                    <img src="../photos/p2-removebg.png"/>
                </div>
                <div className="part2 part12">
                    <img src="../newphotos/new.jpg"/>
                    <h1>VALVES</h1>
                </div>
            </div>
            <div className="floor floor2">
                <div className="part2 part21">
                    <img src="../newphotos/image-from-rawpixel-id-3370633-original.jpg"/>
                    <h1>VALVE AUTOMATION</h1>
                </div>
                <div className="part1 part22">
                    <img src="../photos/Capture-removebg.png"/>
                </div>
            </div>
            <div className="floor floor3">
                <div className="part1 part31">
                    <img src="../photos/Capture5-removebg.png"/>
                </div>
                <div className="part2 part32">
                    <img src="../newphotos/valves.jpg"/>
                    <h1>STAINLESS STEEL TC ENDS CLAMP FITTINGS AND VALVES</h1>
                </div>
            </div>
    </div>
    )
}
