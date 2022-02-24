import GalleryItem from './GalleryItem'
import {useState, useEffect} from "react";
import {Character, Response } from "./model";


export default function Gallery (){

    const [characterName, setCharacterName]=useState("");
    const [items, setItems]= useState([] as Array<Character>)

    useEffect (() => {
        fetch ('https://rickandmortyapi.com/api/character')
            .then (e => e.json())
            .then ((eBody : Response) => {
                  setItems(eBody.results);

        });
    }, [])



    /* const [characterName, setCharacterName] = useState('');
         const items = data
        .filter(e=> e.name.includes(characterName))
        .map(value => {
            return {name: value.name, imageUrl: value.image, status: value.status}})
        .map(c => < GalleryItem character={c}/>);*/

    return (
        <div id="site-body">
            <h1> Ricky and Morty</h1>
                <input type='text' placeholder='Characters name' value={characterName} onChange={e => setCharacterName(e.target.value) }/>
            <div className={'gallery'}>
                { items
                    .filter(character => character.name.toLowerCase().includes(characterName.toLowerCase()))
                    .map(character => <GalleryItem key={character.id} character={character}/> )
                 }
            </div>
        </div>
    )
}