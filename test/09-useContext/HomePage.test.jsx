import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('test on home page', () => {

    const user = {
        name: 'daniel',
        id : 1,
    }
    test('should show the component without the user', () => {

        render(<UserContext.Provider value={{ user: null }}><HomePage />
        </UserContext.Provider>);

        const preTag = screen.getByLabelText("pre"); // aria label
        expect(preTag.innerHTML).toBe('null'); 

    });


    test('should show the component with the user', () => { 
        render(<UserContext.Provider value={{ user }}><HomePage />
        </UserContext.Provider>);
        const preTag = screen.getByLabelText("pre");
        console.log(preTag.innerHTML) // aria label
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString()); 
    
     })

});
