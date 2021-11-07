const likesFormat = num => {
    let flag = 0;
    while (num > 1000) {
        num /= 1000;
        flag++;
    }
    return +num.toFixed(1) + (["", "k", "m", "b", "t"][flag] || "");
}

export default likesFormat;
