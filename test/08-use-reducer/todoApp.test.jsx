import { render, screen } from "@testing-library/react"
import { ToDoApp } from "../../src/08-UseReducer/ToDoApp"
import { useTodos } from "../../src/hooks/UseTodos";


jest.mock('../../src/hooks/UseTodos');


describe('test on todo app should show the component correctly', () => {


    beforeEach(() => {
        useTodos.mockReturnValue({
            todos: [
                {
                    id: 1,
                    description: 'Todo  1',
                    done: false
                },
                {
                    id: 2,
                    description: 'Taodo 2',
                    done: true
                }
            ],
            todosCount: 2,
            pendingTodosCount: 1,
            handleDeleteTodo: jest.fn(),
            handleNewTodo: jest.fn(),
            handleToggleToDo: jest.fn()
        });
    });

    test(' should show the component correctly', () => {

        render(<ToDoApp />);

        expect(screen.getByText((content) =>
            content.includes('ToDo') && content.includes('2')
        )).toBeTruthy();

        expect(screen.getByText((content) =>
            content.includes('Pendientes') && content.includes('1')
        )).toBeTruthy();


        expect(screen.getByRole('textbox')).toBeTruthy();


    })
});
