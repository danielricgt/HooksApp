import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Login Page test', () => {
    test('should render user on null by default', () => {
        render(<UserContext.Provider value={{ user: null }}>
            <LoginPage />
        </UserContext.Provider>);
        screen.debug();

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe('null');
    });

    test('should render user with the setuser established when isclicked', () => {
        const setUserMock = jest.fn();
        render(<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
            <LoginPage />
        </UserContext.Provider>);
        const loginButton = screen.getByRole('button', { name: 'Set User' });
        fireEvent.click(loginButton);
        expect(setUserMock).toHaveBeenCalledWith({"email": "danielricgt@gmail.com", "id": 123, "name": "pedro"});

    })
});
