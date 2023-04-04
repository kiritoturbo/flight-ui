import '../../main.css'

import img from '../../Assets/image1.jpg'
import img1 from '../../Assets/image2.jpg'
import img2 from '../../Assets/image3.jpg'
import img5 from '../../Assets/image5.jpg'
import img4 from '../../Assets/image4.jpg'

function Travelers() {
    const tranvelers=[
        {
            id:1,
            destinationImage: img,
            travelerImage:img1,
            travelerName:'truong',
            socialLink:'@kiritoturbo'
        },
        {
            id:2,
            destinationImage: img1,
            travelerImage:img2,
            travelerName:'truong',
            socialLink:'@kiritoturbo'
        },
        {
            id:3,
            destinationImage: img2,
            travelerImage:img1,
            travelerName:'truong1',
            socialLink:'@kiritoturbo1'
        },
        {
            id:4,
            destinationImage: img4,
            travelerImage:img5,
            travelerName:'truong1',
            socialLink:'@kiritoturbo1'
        }

    ]


    return ( 
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2>
                    Top travelers of this month!
                </h2>

                <div className="travelersContainer grid"> 
                    {/* single pasanger card */}
                    {tranvelers.map(({id,destinationImage,travelerImage,travelerName,socialLink})=>{
                        return (
                            <div className="singleTraveler">
                                <img src={destinationImage} className='destinationImage' alt="" />

                                <div className="travelerPicture">
                                    <img src={img1} alt="" />
                                    <div className="travelerDetails">
                                        <div className="travelerPicture">
                                            <img src={travelerImage} className='travelerImage' alt="" />
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
}

export default Travelers;