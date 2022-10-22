get = id => document.getElementById(id)
Nai = (length, func) => Array(length).fill().map(func) 

function amogus() {
    var display = get("inv").style.display
    if (display == "unset") {
        get("inv").style.display = "none"
    }
    else {
        get("inv").style.display = "unset"
    }
}

class Table {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.notes = Nai(row, (_, i) => {return Nai(col, (_, i) => {return {
                    fill: 0,
                    row: i,
                    col: j
                }
            })
        })
    }
    display() {
        var code = "";
        this.notes.forEach(row => {
            code += "<tr>"
            row.forEach(elem => {
                code += `<td id="${elem.row}${elem.col}" style="background-color:${elem.fill};">`
                code += "</td>"
            })
        });
    }
}
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }