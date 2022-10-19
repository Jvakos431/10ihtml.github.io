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
                code +=  . . .
                code += "</td>"
            })
        });
    }
}