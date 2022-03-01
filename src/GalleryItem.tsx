import { Character} from "./model";

interface GalleryItemprops {
    character : Character

}
export default function GalleryItem (props: GalleryItemprops){
    return(
        <div className="card">
            <div className="box">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img_card" src={props.character.image} alt="Character" />
                        </div>
                        <div className="flip-card-back">
                            <h1 className="card_name">{props.character.name}</h1>
            <h1 className={'cardHeader'}>{props.character.name}</h1>
            <img src={props.character.image} className={'cardPic'}/>
                <ul>
                    <li>Name: {props.character.name}</li>
                    <li>Status:{props.character.status} </li>
                </ul>
                       </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

