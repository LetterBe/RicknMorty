import GalleryItem from './GalleryItem'
import React, {useState, useEffect} from "react";
import {Character, Response } from "./model";


export default function Gallery (){

    const [characterName, setCharacterName]=useState("");
    const [items, setItems]= useState([] as Character[])
    const [errorMessage, setErrorMessage]= useState('')

    useEffect (() => {
        fetch ('https://rickandmortyapi.com/api/character/')
            .then (response => {
                if(response.status ===200 || response.status ===304) {
                    return response.json()
                }
                throw new Error("Didn't work, soorry")
            })
            .then ((response : Response) => response.results)
            .then (filteredItems => setItems(filteredItems))
            .catch((e: Error) => setErrorMessage(e.message))
    }, []);


    return (
        <div>
            <h1 id="title"> Ricky and Morty Gallery</h1>
                <input type='text' data-testid="searchField" placeholder='Characters name' value={characterName} onChange={e => setCharacterName(e.target.value) }/>
            <div className={'gallery'}>
                { items.length>0
                    ?
                    items.filter(character => character.name.toLowerCase().includes(characterName.toLowerCase()))
                    .map(character => <div  data-testid="gallery-item" key={character.id}> <GalleryItem character={character}/> </div>)
                    :
                    <h1> loading </h1>
                 }
            </div>
            <div>{errorMessage}</div>
        </div>
    )
}