const exchange = (tipo,valor) => {
    if (tipo === undefined || valor === undefined) return { error: {message: "Params are required" }}
    if (tipo === null || valor === null) return { error: {message: "It Can't add nulls values" }}
    if (typeof(tipo) == 'function' || typeof(valor) == 'function') return { error: {message: "It can't add functions" }}
    if (typeof(tipo) == 'object' || typeof(valor) == 'object') return { error: {message: "It can't add objects" }}
    if (isNaN(valor)) return { error: {message: "It Can't add strings" }}
    if (valor<0) return { error: {message: "It Can't add negative number" }}
    if (tipo !== "peso" || tipo !== "dollar") { error: {message: "only can be peso or dollar" }}
   
    if (tipo === "peso") return valor / 18;
    if (tipo === "dollar") return valor * 18;
}

export default exchange;