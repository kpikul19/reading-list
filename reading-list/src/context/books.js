import { createContext, useState } from 'react';

const BooksContext = createContext();

function Provider({ children }) {
    const [count, setCount] = useState(0);

    const valueToShare = {
        count: count,
        incrementCount: () => {
            setCount(count + 1);
        }
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;

//import BooksContext, { Provider } from '/.fdjsl' - just an example of what an import would look like for both a default export and a named export