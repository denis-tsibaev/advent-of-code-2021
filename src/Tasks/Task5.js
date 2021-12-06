const data = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
];

export const Task5 = () => {
    const newArr = [];

    let quantityOfZeros = 0;
    let quantityOfOnes = 0;
    data.forEach(element => {
        const cifer = element.slice(0, 1);
        // console.log('cifer: ', cifer);
        if (cifer === '1') quantityOfOnes += 1;
        else quantityOfZeros += 1;
    });
    if (quantityOfZeros > quantityOfOnes) newArr.push(0);
    else newArr.push(1);
    console.log(newArr);

    let secondZeros = 0;
    let SecondOnes = 0;
    data.forEach(element => {
        const secondCifer = element.slice(1, 2);
        // console.log('secondCifer: ', secondCifer);
        if (secondCifer === '1') SecondOnes += 1;
        else secondZeros += 1;
    });
    if (secondZeros > SecondOnes) newArr.push(0);
    else newArr.push(1);
    console.log(newArr);

    let thirdZeros = 0;
    let thirdOnes = 0;
    data.forEach(element => {
        const thirdCifer = element.slice(2, 3);
        // console.log('thirdCifer: ', thirdCifer);
        if (thirdCifer === '1') thirdOnes += 1;
        else thirdZeros += 1;
    });
    if (thirdZeros > thirdOnes) newArr.push(0);
    else newArr.push(1);
    console.log(newArr);

    let forthZeros = 0;
    let forthOnes = 0;
    data.forEach(element => {
        const forthCifer = element.slice(3, 4);
        // console.log('forthCifer: ', forthCifer);
        if (forthCifer === '1') forthOnes += 1;
        else forthZeros += 1;
    });
    if (forthZeros > forthOnes) newArr.push(0);
    else newArr.push(1);
    console.log(newArr);

    let fifthZeros = 0;
    let fifthOnes = 0;
    data.forEach(element => {
        const fifthCifer = element.slice(4, 5);
        console.log('fifthCifer: ', fifthCifer);
        if (fifthCifer === '1') fifthOnes += 1;
        else fifthZeros += 1;
    });
    if (fifthZeros > fifthOnes) newArr.push(0);
    else newArr.push(1);
    console.log(newArr);

    const gammaBin = newArr.join('');
    console.log('gammaBin: ', gammaBin);
    const gammaDec = parseInt(gammaBin, 2);
    console.log('gammaDec: ', gammaDec);

    const epsilonArr = newArr;
    for (let i = 0; i < epsilonArr.length; i += 1) {
        epsilonArr[i] ^= 1;
    }

    const epsilonBin = epsilonArr.join('');
    console.log('epsilonBin: ', epsilonBin);
    const epsilonDec = parseInt(epsilonBin, 2);
    console.log('epsilonDec: ', epsilonDec);

    return (
        <div>
            <p> gamma: {gammaDec}</p>
            <p> epsilon: {epsilonDec}</p>
            <p> multiply: {gammaDec * epsilonDec}</p>
        </div>
    );
};
