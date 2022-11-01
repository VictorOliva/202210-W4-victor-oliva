const strictEquals = (a, b) => {
    if (Object.is(a, b)) {
        if (Object.is(a, NaN)) {
            return !Object.is(a, b);
        }
        return Object.is(a, b);
    }
    if (
        (Object.is(a, 0) && Object.is(b, -0)) ||
        (Object.is(a, -0) && Object.is(b, 0))
    ) {
        return !Object.is(a, b);
    }
    return Object.is(a, b);
};

export default strictEquals;
