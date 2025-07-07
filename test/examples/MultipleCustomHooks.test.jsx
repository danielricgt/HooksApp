import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import "isomorphic-fetch"; 
import { renderHook } from "@testing-library/react-hooks"

describe('multiple custom hook test', () => { 
    test('should return default values', () => { 
        render(<MultipleCustomHooks />);
        screen.debug();

        expect(screen.getByText('Is Loading'));
        expect(screen.getByText('Pokemon Information'));

        const nextButton = screen.getByRole('button',{name: 'Next'});
        console.log(nextButton.disabled);

        expect(nextButton.disabled).toBeFalsy();
     })
 })