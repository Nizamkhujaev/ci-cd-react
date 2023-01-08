import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux'
import TodosForm from "./TodosForm";
import { store } from '../../redux/configStore'

describe('Todos form test', () => {
    test('check input', () => {
        render(
            <Provider store = {store}>
                <TodosForm />
            </Provider>
        )

        const inputElement = screen.getByPlaceholderText(/add todo/i)
        expect(inputElement).toBeTruthy();
    });

    test('shoud able to type in input', () => {
        render(
            <Provider store = {store}>
                <TodosForm/>
            </Provider>
        )

        const inputElement = screen.getByPlaceholderText(/add todo/i)
        fireEvent.change(inputElement, {target: { value: "Smth" }})
        expect(inputElement.value).toBe("Smth")
    });

    test('should have empty input when submit form', () => {
        render(
            <Provider store = {store}>
                <TodosForm/>
            </Provider>
        )

        const inputElement = screen.getByPlaceholderText(/add todo/i)
        const todoBtn = screen.getByRole("button", { name: /add/i })

        fireEvent.change(inputElement, { target: { value: "Doing smth"} })
        fireEvent.click(todoBtn)
        expect(inputElement.value).toBe('');
    })
})