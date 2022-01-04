

function Place(x){
    
    return (
        <div className="place">
            <img className="image" src={`/images/${x.item.image}`}/>
           
            <span className="location">{x.item.location}</span>
            <div className="click-box">
                <i class="marker fas fa-map-marker-alt"></i>
                <span className="country">{x.item.country}</span>
                <a href={`${x.item.map}`}><span className="map">View on Google Maps</span></a>
            </div>
            
            <p>
                {x.item.description}
            </p>
        </div>
        
    )
}

export default Place

