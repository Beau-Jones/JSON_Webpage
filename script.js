// JavaScript Object payload 

let wowClasses = {"classes": [
    {"name": "Warrior", "Tank": "Yes", "DPS": "Yes", "Healing": "No"},
    {"name": "Paladin", "Tank": "Yes", "DPS": "Yes", "Healing": "Yes"},
    {"name": "Death Knight", "Tank": "Yes", "DPS": "Yes", "Healing": "No"},
    {"name": "Hunter", "Tank": "No", "DPS": "Yes", "Healing": "No"},
    {"name": "Shaman", "Tank": "No", "DPS": "Yes", "Healing": "Yes"},
    {"name": "Evoker", "Tank": "No", "DPS": "Yes", "Healing": "Yes"},
    {"name": "Rogue", "Tank": "No", "DPS": "Yes", "Healing": "No"},
    {"name": "Druid", "Tank": "Yes", "DPS": "Yes", "Healing": "Yes"},
    {"name": "Demon Hunter", "Tank": "Yes", "DPS": "Yes", "Healing": "No"},
    {"name": "Monk", "Tank": "Yes", "DPS": "Yes", "Healing": "Yes"},
    {"name": "Mage", "Tank": "No", "DPS": "Yes", "Healing": "No"},
    {"name": "Priest", "Tank": "No", "DPS": "Yes", "Healing": "Yes"},
    {"name": "Warlock", "Tank": "No", "DPS": "Yes", "Healing": "No"}
]};

let jsonString = JSON.stringify(wowClasses);

wowClasses = JSON.parse(jsonString);

const table = document.getElementById("class-table");

for (i in wowClasses.classes) {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");

    cell1.textContent = wowClasses.classes[i].name;

    cell2.textContent = wowClasses.classes[i].Tank;
    cell2.classList.add("center");

    cell3.textContent = wowClasses.classes[i].DPS;
    cell3.classList.add("center");

    cell4.textContent = wowClasses.classes[i].Healing;
    cell4.classList.add("center");


    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    table.appendChild(row);
}