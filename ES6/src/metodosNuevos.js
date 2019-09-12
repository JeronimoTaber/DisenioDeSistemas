var texto = "Hola mundo";
console.log(texto, "empieza con h:", texto.toLowerCase().startsWith("h"));
console.log(texto, "empieza con o:", texto.toLowerCase().endsWith("o"));
console.log(texto, "incluye la palabra jero:", texto.includes("jeronimo"));
var amigos = ["carlo", "Alejandro", "Cesar", "Manuel"];
console.log(amigos.includes("Manuel"));
console.log(amigos.find(function (amigo) { return amigo.length > 6; }));
console.log(amigos.findIndex(function (amigo) { return amigo === "Manuel"; }));
