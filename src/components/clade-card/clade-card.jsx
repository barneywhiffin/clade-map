import './clade-card.css'
import Sarcopterygii from '/src/assets/sarcopterygii.png'

function CladeCard() {
    return (
        <>
            <div className="clade-card">
                <h3>Sarcopterygii</h3>
                <p style={{fontStyle: "italic", marginTop: "10px"}}>'Lobe finned fish'</p>
                <img className="clade-img" src={Sarcopterygii} width="200px" alt="A lobe finned fish" />
            </div>
        </>
    );
}

export default CladeCard;