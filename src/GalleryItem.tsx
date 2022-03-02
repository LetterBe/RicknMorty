import {Character} from "./model";

interface GalleryItemprops {
    character: Character

}

export default function GalleryItem(props: GalleryItemprops) {
    return (
    <div className="flip-card-back">
        <img data-testid="character-image" src={props.character.image} className={'cardPic'}/>
        <ul>
            <li data-testid="character-name">Name: {props.character.name}</li>
            <li data-testid="character-status">Status:{props.character.status} </li>
        </ul>
    </div>

)
}

