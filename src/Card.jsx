import Placeholder from './images/Placeholder.png';
function Card(){
    return(
        <div className="card">
            <img className="card-image"src={Placeholder}alt="placehloder"></img>
            <h2 className="card-title">placeholder name</h2>
            <p className="card-text">doctor</p>
            <p className="card-text">phone number</p>
            <p className="card-text">email</p>

        </div>
    )
}

export default Card