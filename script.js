// JavaScript Object payload 

let wowClasses = {"classes": [
    {"name": "Warrior", "Tank": "Yes", "DPS": "Yes", "Healing": "No", "Type": "Plate"},
    {"name": "Paladin", "Tank": "Yes", "DPS": "Yes", "Healing": "Yes", "Type": "Plate"},
    {"name": "Death Knight", "Tank": "Yes", "DPS": "Yes", "Healing": "No", "Type": "Plate"},
    {"name": "Hunter", "Tank": "No", "DPS": "Yes", "Healing": "No", "Type": "Mail"},
    {"name": "Shaman", "Tank": "No", "DPS": "Yes", "Healing": "Yes", "Type": "Mail"},
    {"name": "Evoker", "Tank": "No", "DPS": "Yes", "Healing": "Yes", "Type": "Mail"},
    {"name": "Rogue", "Tank": "No", "DPS": "Yes", "Healing": "No", "Type": "Leather"},
    {"name": "Druid", "Tank": "Yes", "DPS": "Yes", "Healing": "Yes", "Type": "Leather"},
    {"name": "Demon Hunter", "Tank": "Yes", "DPS": "Yes", "Healing": "No", "Type": "Leather"},
    {"name": "Monk", "Tank": "Yes", "DPS": "Yes", "Healing": "Yes", "Type": "Leather"},
    {"name": "Mage", "Tank": "No", "DPS": "Yes", "Healing": "No", "Type": "Cloth"},
    {"name": "Priest", "Tank": "No", "DPS": "Yes", "Healing": "Yes", "Type": "Cloth"},
    {"name": "Warlock", "Tank": "No", "DPS": "Yes", "Healing": "No", "Type": "Cloth"}
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

    if (wowClasses.classes[i].Type == "Plate") {
        row.classList.add("Plate")
    }
    if (wowClasses.classes[i].Type == "Mail") {
        row.classList.add("Mail")
    }
    if (wowClasses.classes[i].Type == "Leather") {
        row.classList.add("Leather")
    }
    if (wowClasses.classes[i].Type == "Cloth") {
        row.classList.add("Cloth")
    }

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    table.appendChild(row);
}