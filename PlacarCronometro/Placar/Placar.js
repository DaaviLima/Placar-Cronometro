export default class Placar {
    constructor(root, TimeAnome, TimeBnome, onControlButtonClick) {
        this.root = root;
        this.root.innerHTML = `
            <div class="placar">
                <div class="placar__nome placar__nome--A">${TimeAnome}</div>
                <div class="placar__nome placar__nome--B">${TimeBnome}</div>
                <div class="placar__pontuacao" data-for-Time="A">0</div>
                <div class="placar__pontuacao" data-for-Time="B">0</div>
                <div class="placar__controles" data-for-Time="A">
                    <button class="placar__controle-button">-</button>
                    <button class="placar__controle-button">+</button>
                </div>
                <div class="placar__controles" data-for-Time="B">
                    <button class="placar__controle-button">-</button>
                    <button class="placar__controle-button">+</button>
                </div>
            </div>
        `;

        this.root.querySelectorAll(".placar__controle-button").forEach(controlButton => {
            controlButton.addEventListener("click", () => {
                const direction = controlButton.textContent === "-" ? "minus" : "plus";
                const Time = controlButton.closest(".placar__controles").dataset.forTime;

                onControlButtonClick(Time, direction);
            });
        });
    }
    update(TimeApontos, TimeBpontos) {
        this.root.querySelector(".placar__pontuacao[data-for-Time='A']").textContent = TimeApontos;
        this.root.querySelector(".placar__pontuacao[data-for-Time='B']").textContent = TimeBpontos;
    }
}