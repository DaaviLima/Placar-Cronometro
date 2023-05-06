import Placar from "./Placar.js";

let TimeApontos = 0;
let TimeBpontos = 0;
const root = document.querySelector("#app");
const view = new Placar(root, "Time A", "Time B", (Time, direction) => {
    const diferencia = direction === "minus" ? -1 : 1;

    if (Time === "A") {
        TimeApontos = Math.max(TimeApontos += diferencia, 0);
    } else {
        TimeBpontos = Math.max(TimeBpontos += diferencia, 0);
    }
    view.update(TimeApontos, TimeBpontos);
});
//Atualização do placar
