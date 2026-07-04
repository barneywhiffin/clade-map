import './clade-card.css'

function CladeCard(props) {
    return (
        <>
            <div className="clade-card">
                <h3>{props.title}</h3>
                <p style={{fontStyle: "italic", marginTop: "10px"}}>{props.description}</p>
                <img className="clade-img" src={props.img} width="200px" alt={`A picture of a ${props.description.slice(1, -1).toLowerCase()}`} />
            </div>
        </>
    );
}

export default CladeCard;