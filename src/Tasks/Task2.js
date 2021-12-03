// const array = [607, 618, 618, 617, 647, 716, 769, 792];

export const Task2 = ({ array }) => {
    let counter = 0;
    for (let i = 0; i < array.length; i += 1) {
        const el = array[i];
        const next1 = array[i + 1];
        const next2 = array[i + 2];
        const next3 = array[i + 3];

        if ((el + next1 + next2) / 3 < (next1 + next2 + next3) / 3) {
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
