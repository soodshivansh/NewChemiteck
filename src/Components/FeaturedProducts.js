import '../styles/Featuredproducts.css'

export default function(){
    return(
        <div className="container-for-products" id="product-range">
        <div className = "headerfor">
            <h1>Product Range<hr style={{ height: "0.5vh", backgroundColor: "white" }} /></h1>
        </div>
        <div className="above800">
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
        // <div className='below800'>
        //     <div className="cardforproduct">
        //         {/* <div className="icons"> 
        //             <button className="save">
        //             <svg class="save__icon" viewBox="0 0 20 20"><path d="M8.416,3.943l1.12-1.12v9.031c0,0.257,0.208,0.464,0.464,0.464c0.256,0,0.464-0.207,0.464-0.464V2.823l1.12,1.12c0.182,0.182,0.476,0.182,0.656,0c0.182-0.181,0.182-0.475,0-0.656l-1.744-1.745c-0.018-0.081-0.048-0.16-0.112-0.224C10.279,1.214,10.137,1.177,10,1.194c-0.137-0.017-0.279,0.02-0.384,0.125C9.551,1.384,9.518,1.465,9.499,1.548L7.76,3.288c-0.182,0.181-0.182,0.475,0,0.656C7.941,4.125,8.234,4.125,8.416,3.943z M15.569,6.286h-2.32v0.928h2.32c0.512,0,0.928,0.416,0.928,0.928v8.817c0,0.513-0.416,0.929-0.928,0.929H4.432c-0.513,0-0.928-0.416-0.928-0.929V8.142c0-0.513,0.416-0.928,0.928-0.928h2.32V6.286h-2.32c-1.025,0-1.856,0.831-1.856,1.856v8.817c0,1.025,0.832,1.856,1.856,1.856h11.138c1.024,0,1.855-0.831,1.855-1.856V8.142C17.425,7.117,16.594,6.286,15.569,6.286z"></path></svg>
        //             Save 
        //             </button>
        //             <button className="see-more">
        //             <svg viewBox="0 0 20 20" className="see-more__icon">
        //                 <path d="M3.936,7.979c-1.116,0-2.021,0.905-2.021,2.021s0.905,2.021,2.021,2.021S5.957,11.116,5.957,10
        //                     S5.052,7.979,3.936,7.979z M3.936,11.011c-0.558,0-1.011-0.452-1.011-1.011s0.453-1.011,1.011-1.011S4.946,9.441,4.946,10
        //                     S4.494,11.011,3.936,11.011z M16.064,7.979c-1.116,0-2.021,0.905-2.021,2.021s0.905,2.021,2.021,2.021s2.021-0.905,2.021-2.021
        //                     S17.181,7.979,16.064,7.979z M16.064,11.011c-0.559,0-1.011-0.452-1.011-1.011s0.452-1.011,1.011-1.011S17.075,9.441,17.075,10
        //                     S16.623,11.011,16.064,11.011z M10,7.979c-1.116,0-2.021,0.905-2.021,2.021S8.884,12.021,10,12.021s2.021-0.905,2.021-2.021
        //                     S11.116,7.979,10,7.979z M10,11.011c-0.558,0-1.011-0.452-1.011-1.011S9.442,8.989,10,8.989S11.011,9.441,11.011,10
        //                     S10.558,11.011,10,11.011z"></path>
        //             </svg>
        //             </button>
        //         </div> */}
        //         <div className="image part011">
        //             <img src="../photos/p2-removebg.png"/>
        //         </div>
        //         <div className="card__info">
        //             <a className="title">VALVES</a>
        //         </div>
        //     </div>
        //     <div className="cardforproduct">
        //         <div className="image part022">
        //             <img src="../photos/Capture-removebg.png"/>
        //         </div>
        //         <div className="card__info">
        //             <a className="title">VALVE AUTOMATION</a>
        //         </div>
        //     </div>
        //     <div className="cardforproduct">
        //         <div className="image part031">
        //             <img src="../photos/Capture5-removebg.png"/>
        //         </div>
        //         <div className="card__info">
        //             <a className="title">STAINLESS STEEL TC ENDS CLAMP FITTINGS AND VALVES</a>
        //         </div>
        //     </div>
        // </div>
    </div>
    )
}
