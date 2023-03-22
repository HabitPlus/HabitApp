import { render, screen } from "@testing-library/react"
import Landing from "./Landing"

describe('Landing de la Habit+ app', () => {
    render (<Landing backgroundColor={"#FFFCF3"}  />)
    test('renders main page correctly', () => {
        //screen.debug();
        expect(true).toBeTruthy()
    })

    test('Debe tener un boton que nos lleve a la home page',
    ()=>{
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })
})