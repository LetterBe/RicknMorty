import './GalleryItem'
import {render} from "@testing-library/react";
import GalleryItem from "./GalleryItem";
import React from "react";

test('that compenent is rendered correctly', () => {
    // given
    const character = {
        name:'Rick',
        status:'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        id: '1',
    };

    // when
    const {getByTestId} = render(<GalleryItem character={character}/>);

    // then
    // eslint-disable-next-line jest/valid-expect,testing-library/prefer-screen-queries
    const imageTag = getByTestId('character-image') as HTMLImageElement;
    expect(imageTag.src).toEqual('https://rickandmortyapi.com/api/character/avatar/1.jpeg');
    expect(getByTestId('character-name').textContent).toEqual('Name: Rick');
    expect(getByTestId('character-status').textContent).toEqual('Status:Alive ');
})