const set = (name, value) => {
    try {
        const type = typeof value;

        switch (type) {
        case 'string':
            sessionStorage.setItem(name, value);
            break;
        case 'object':
            // JSON.stringify is used to convert the object to a string
            sessionStorage.setItem(name, JSON.stringify(value));
            break;
        // Add more cases for other types as needed
        default:
            throw new Error('Unsupported data type');
        }
    } catch (error) {
        console.error(`Error saving to session storage: ${error.message}`);
    }
};

const get = (name) => {
    try {
        const storedValue = sessionStorage.getItem(name);

        if (storedValue === null) {
            return null;
        }

        let parsedValue;

        try {
        parsedValue = JSON.parse(storedValue);
        } catch (error) {
        parsedValue = storedValue;
        }

        return parsedValue;
    } catch (error) {
        console.error(`Error retrieving from session storage: ${error.message}`);
        return null;
    }
};


const local = {
    get, set
}

export default local