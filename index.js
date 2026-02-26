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
    for(let button of listButton){
        button.addEventListener('click',() => {
            let input = document.createElement('input');
            input.type = "text";
            button.closest(".card").querySelector('.list-user').appendChild(input);
        })
    }
}

addCard();