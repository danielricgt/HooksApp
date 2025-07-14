import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import "isomorphic-fetch";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/UseCounter";
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/UseCounter');


describe('multiple custom hook test', () => {

    const incrementFunctionMock = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: incrementFunctionMock,
    });

beforeEach(() => {
    jest.clearAllMocks();
});;


    test('should return default values', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
            errorMessage: null,
        });

        render(<MultipleCustomHooks />);


        expect(screen.getByText('Is Loading'));
        expect(screen.getByText('Pokemon Information'));

        const nextButton = screen.getByRole('button', { name: 'Next' });


        expect(nextButton.disabled).toBeFalsy();
    });

    test('should show a pokemon', () => {
        useFetch.mockReturnValue({
            data: [{}],
            isLoading: true,
            hasError: false,
            errorMessage: null,
        });
        render(<MultipleCustomHooks />);
        expect(screen.getAllByText('Pokemon Information')).toBeTruthy();
        expect(screen.getAllByText('Is Loading')).toBeTruthy();
        const nextButton = screen.getByRole('button', { name: 'Next' });
        expect(nextButton.disabled).toBeFalsy();

    });

    test('should call increment function', () => {


        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
            errorMessage: null,
        });


        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next' });
        fireEvent.click(nextButton);
        expect(incrementFunctionMock).toHaveBeenCalled();
    });



})