
const Card = function({image, name, cost}) {
    return(
        <div className="card">
            <img src = {image} alt = {name}/>
            <div className = 'name'>{name}</div>
            <div className='price'>${cost}</div>
        </div>
    );
}

export default Card;