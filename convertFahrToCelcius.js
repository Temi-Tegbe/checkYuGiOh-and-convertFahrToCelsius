const convertFahrToCelcius = (deg) =>
{
    let changeToInt;
    changeToInt = parseInt(deg);
    if (isNaN(changeToInt)) {
        return `${JSON.stringify(deg)} is not a number but a/an ${Array.isArray(deg) ? "array" : typeof deg}`;
    }

    let celcius = ((deg - 32) * 5) / 9;
    return celcius.toFixed(4);
    }

