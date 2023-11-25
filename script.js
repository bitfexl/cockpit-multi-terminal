function addTerminal() {
    document.getElementById("terminals").appendChild(newTerminal());
    document.getElementById("selectTerminal").appendChild(newSelectButton());
    selectTerminal(selectIndex - 1);
}

function newTerminal() {
    // <iframe class="terminal-frame" src="../../@localhost/system/terminal.html" frameborder="0"></iframe>
    const terminal = document.createElement("iframe");
    terminal.src = "../../@localhost/system/terminal.html";
    terminal.style.border = "none";
    terminal.classList.add("terminal-frame");
    return terminal;
}

let selectIndex = 0;

function newSelectButton() {
    const button = document.createElement("button");
    const thisIndex = selectIndex++;
    button.innerText = "Terminal " + thisIndex;
    button.ondblclick = () => {
        const newName = window.prompt("Enter new name:", button.innerText);
        if (newName != null && newName.length > 0) {
            button.innerText = newName;
        }
    };
    button.onclick = () => selectTerminal(thisIndex);
    return button;
}

function selectTerminal(i) {
    document.querySelectorAll(".terminal-frame").forEach((frame, n) => {
        frame.style.display = i == n ? "block" : "none";
    });
    document.querySelectorAll("#selectTerminal button").forEach((button, n) => {
        if (i == n) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }
    });
}

addTerminal();
document.getElementById("addTerminal").onclick = addTerminal;
