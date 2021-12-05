// const data = [
//     { forward: 5 },
//     { down: 5 },
//     { forward: 8 },
//     { up: 3 },
//     { down: 8 },
//     { forward: 2 },
// ];

export const Task3 = ({ data }) => {
    let depth = 0;
    let forward = 0;

    data.forEach(element => {
        // console.log(element);
        const key = Object.keys(element);
        const value = Object.values(element);
        // const key = element[0];
        // const value = element[1];
        console.log(key);
        console.log(value);

        if (key[0] === 'forward') {
            forward += value[0];
        }
        if (key[0] === 'up') {
            depth -= value[0];
        }
        if (key[0] === 'down') {
            depth += value[0];
        }
    });
    console.log('forward: ', forward);
    console.log('depth: ', depth);
    console.log('multiply: ', depth * forward);

    return <div>data: {depth * forward}</div>;
};
