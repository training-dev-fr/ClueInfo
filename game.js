let data = localStorage.getItem("game");
let game = JSON.parse(data);
let grid = document.querySelector('.grid');

let gridTemplate = "";

gridTemplate += '<div class="line"><div class="case"></div>';
for (let yh = 0; yh <= game.width - 1; yh++) {
    gridTemplate += `<div class="case">${String.fromCharCode(65 + yh)}</div>`;
}
gridTemplate += '</div>'
for (let x = 0; x <= game.height - 1; x++) {
    gridTemplate +=`<div class="line"><div class="case">${x+1}</div>`
    for (let y = 0; y <= game.width - 1; y++) {
         gridTemplate += `<div class="case"></div>`;
    }
    gridTemplate += '</div>'
}

grid.innerHTML = gridTemplate;

let groupHtml = "";
for(let group of game.groupList){
    groupHtml += `<div class="group">${group.name}<div class="player-list">`;
    for(let player of group.listPlayer){
        groupHtml += `<div class="player">${player}</div>`;
    }
    groupHtml += `</div></div>`;
}

document.querySelector('.group-list').innerHTML = groupHtml;