const listCard = document.querySelector('.list-card');

const cardTemplate = `
        <div class="card">
            <div class="list-user">
                <input type="text">
            </div>
            <i class="fa-solid fa-plus"></i>
        </div>`;

function addCard() {
    document.querySelector("#add-card").addEventListener("click", () => {
        listCard.innerHTML = cardTemplate + listCard.innerHTML;
        addCard();
    });
    const listButton = document.querySelectorAll(".card i");
    for (let button of listButton) {
        button.addEventListener('click', () => {
            let input = document.createElement('input');
            input.type = "text";
            button.closest(".card").querySelector('.list-user').appendChild(input);
        })
    }
}

document.querySelector('#start-game').addEventListener('click', () => {
    let cardList = document.querySelectorAll('.card:not(#add-card)');
    let groupeId = 1;
    let groupList = [];
    for (let card of cardList) {
        let group = {
            name: "Groupe " + groupeId,
            listPlayer: []
        }
        let playerList = card.querySelectorAll('input');
        for (let player of playerList) {
            if (player.value.trim().length > 0) {
                group.listPlayer.push(player.value);
            }
        }
        groupList.push(group);
        groupeId++;
    }
    let game = {
        groupList: groupList,
        height: document.querySelector('#height').value,
        width: document.querySelector('#width').value
    }
    localStorage.setItem("game",JSON.stringify(game));
    window.location.assign("game.html");
})

addCard();