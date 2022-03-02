import './Gallery'
import {render, screen, waitFor, fireEvent} from "@testing-library/react";
import Gallery from "./Gallery";

test('that response is handled ', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            status: 200,
            json: () => Promise.resolve({
                info: {},
                results: [{
                    name: 'Rick',
                    status: 'Alive',
                    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                    id: '1',
                }, {
                    "name": 'Smith',
                    "status": 'Alive',
                    "image": 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                    "id": '2',
                }, {
                    "name": 'Morty',
                    "status": 'Alive',
                    "image": 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                    "id": '3',
                }]
            })
        } as Response);
    });

    render(<Gallery/>);

    await waitFor(() => {
        expect(screen.getAllByTestId('gallery-item').length).toBe(3);
    });

    const searchField = screen.getByTestId("searchField") as HTMLInputElement;

    fireEvent.change(searchField, {target: {value: 'r'}});

    await waitFor(() => {
        expect(screen.getAllByTestId('gallery-item').length).toBe(2);
    });
});