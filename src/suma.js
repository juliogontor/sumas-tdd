const suma = (a,b) => {
    if (a === undefined || b === undefined) return { error: {message: "Params are required" }}
    if (a === null || b === null) return { error: {message: "It Can't add nulls values" }}
    if (typeof(a) == 'function' || typeof(b) == 'function') return { error: {message: "It can't add functions" }}
    if (typeof(a) == 'object' || typeof(b) == 'object') return { error: {message: "It can't add objects" }}
    if (isNaN(a) || isNaN(b)) return { error: {message: "It Can't add strings" }}
    if (a<0 || b<0) return { error: {message: "It Can't add negative number" }}
    if (!Number.isInteger(a) || !Number.isInteger(b)) return { error: {message: "It Can't add float number" }}

    return a+b;
}

export default suma;