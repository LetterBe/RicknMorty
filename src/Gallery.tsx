import GalleryItem from './GalleryItem'
import {useState, useEffect} from "react";
import {Character, Response } from "./model";


export default function Gallery (){

    const [characterName, setCharacterName]=useState("");
    const [items, setItems]= useState([] as Array<Character>)
    const [errorMessage, setErrorMessage]= useState('')

    useEffect (() => {
        fetch ('https://rickandmortyapi.com/api/character')
            .then (response => {
                if(response.status ===200) {
                    return response.json()
                }
                throw new Error("Didn't work, soorry")
            })
            .then ((response : Response) => response.results)
            .then (filteredItems => setItems(filteredItems))
            .catch((e: Error) => setErrorMessage(e.message))
    }, []);



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
            <div>{errorMessage}</div>
        </div>
    )
}