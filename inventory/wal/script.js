var draggedItem = null;

function Inventory(options) {
    // Setup Rows and Items
    this.init = function (options) {
        let slotSizeW = options.size.w / options.slots.w;
        let slotSizeH = options.size.h / options.slots.h;

        this.html = { inventory: options.selector };

        // Build grid
        let grid = document.createElement("grid");
        grid.style.width = options.size.w + "px";
        grid.style.height = options.size.h + "px";
        grid.style.gridTemplateColumns = "1fr ".repeat(options.slots.w);
        grid.style.gridTemplateRows = "1fr".repeat(options.slots.h);
        grid.cells = [];
        for (var i = 0; i < options.slots.w * options.slots.h; i++) {
            var cell = document.createElement("cell");
            cell.style.width = slotSizeW + "px";
            cell.style.height = slotSizeH + "px";
            grid.appendChild(cell);
            grid.cells.push(cell);
        }
        this.html.grid = grid;
        this.html.inventory.appendChild(this.html.grid);

        // Add all items
        let items = [];
        options.items.forEach(function (item, index, array) {
            items.push(item);
            let itemEl = document.createElement("item");
            itemEl.setAttribute("draggable", true);
            itemEl.style.background = item.color;
            itemEl.style.width = 100 * item.w + "%";
            itemEl.style.height = 100 * item.h + "%";

            grid.cells[options.slots.w * item.x + item.y].appendChild(itemEl);
        });
        this.html.items = items;

        let itemTags = document.querySelectorAll("item");
        for (let i = 0; i < itemTags.length; i++) {
            itemTags[i].addEventListener("dragstart", this.dragStart);
            itemTags[i].addEventListener("dragend", this.dragEnd);
        }

        let cellTags = document.querySelectorAll("cell");
        for (let i = 0; i < cellTags.length; i++) {
            cellTags[i].addEventListener("dragover", this.dragOver);
            cellTags[i].addEventListener("dragenter", this.dragEnter);
            cellTags[i].addEventListener("dragleave", this.dragLeave);
            cellTags[i].addEventListener("drop", this.dragDrop);
        }
    };

    this.dragStart = function () {
        this.classList.toggle("hold");
        window.requestAnimationFrame(() => this.classList.toggle("invisible"));
        draggedItem = this;
    };
    this.dragEnd = function () {
        this.classList.toggle("hold");
        this.classList.toggle("invisible");
    };

    this.dragOver = function (e) {
        e.preventDefault();
    };
    this.dragEnter = function (e) {
        e.preventDefault();
        this.classList.toggle("hovered");
    };
    this.dragLeave = function (e) {
        this.classList.remove("hovered");
    };
    this.dragDrop = function (e) {
        this.classList.remove("hovered");
        if (draggedItem != null) {
            draggedItem.parentElement.removeChild(draggedItem);
            this.appendChild(draggedItem);
        }
    };

    this.init(options);
}

var inventory = new Inventory({
    selector: document.querySelector("inventory"),
    size: { w: 500, h: 500 },
    slots: { w: 12, h: 14 },
    items: [
        { x: 0, y: 0, w: 2, h: 2, content: "3x3", color: "#ffd54f" },
        { x: 2, y: 0, w: 1, h: 2, content: "2x3", color: "#66bb6a" },
        { x: 3, y: 3, w: 1, h: 1, content: "5x5", color: "#e53935" }
    ]
});