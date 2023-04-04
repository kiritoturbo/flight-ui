import '../../main.css'
import imageGrid from '../../Assets/cua-so2.jpg'
function Lounge() {
    return ( 
        
        <div className="lounge container section">
            <div className="sectionContainer grid">

                <div className="imgDiv">
                    <img src={imageGrid} alt="" />
                </div>

                <div className="textDiv">
                    <h2>Unaccompanined Minor Lounge</h2>

                    <div className="grids gird">

                        <div className="singleGrid">
                            <span className="gridTitle">
                                Help throungh the airport
                            </span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.
                            </p>
                        </div>

                        <div className="singleGrid">
                            <span className="gridTitle">
                                Priority Boarding
                            </span>
                            <p>
                                You can also call airlines from your phone 
                                and book a flight ticket to one of your favourite destinations.
                            </p>
                        </div>

                        <div className="singleGrid">
                            <span className="gridTitle">
                                Help throungh the airport
                            </span>
                            <p>
                                You can also call airlines from your phone 
                                and book a flight ticket to one of your favourite destinations.
                            </p>
                        </div>


                        <div className="singleGrid">
                            <span className="gridTitle">
                                Help throungh the airport
                            </span>
                            <p>
                                You can also call airlines from your phone 
                                and book a flight ticket to one of your favourite destinations.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Lounge;