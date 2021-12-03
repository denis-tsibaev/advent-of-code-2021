export const Task1 = ({ array }) => {
    let counter = 0;
    for (let i = 0; i < array.length; i += 1) {
        const el = array[i];
        const nextel = array[i + 1];

        if (el < nextel) {
            console.log('vot ono');
            counter += 1;
        }
    }
    return (
        <div>
            <h2>Task1</h2>
            <p>
                How many measurements are larger than the previous measurement?
            </p>
            <p> {counter}</p>
            <hr />
        </div>
    );
};
