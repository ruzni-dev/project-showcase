const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const historyList = document.getElementById("historyList");
const themeSwitch = document.getElementById("themeSwitch");
const copyBtn = document.getElementById("copy");
const downloadCSV = document.getElementById("downloadCSV");
const downloadHistory = document.getElementById("downloadHistory");
const clearHistory = document.getElementById("clearHistory");
const clearAllButLast = document.getElementById("clearAllButLast");
const undoDelete = document.getElementById("undoDelete");

let lastDeleted = null;

window.onload = () => {
    const saved = localStorage.getItem("calcHistory");
    if (saved) {
      historyList.innerHTML = saved;
      bindDeleteEvents();
    }
  };
  
  function updateHistory(expr, result) {
    const item = document.createElement("li");
    item.innerHTML = `
      <span>${expr} = ${result}</span>
      <button class="delete-item">×</button>
    `;
    historyList.prepend(item);
    bindDeleteEvents();
    saveHistory();
  }
  
  function saveHistory() {
    localStorage.setItem("calcHistory", historyList.innerHTML);
  }
  
  function bindDeleteEvents() {
    document.querySelectorAll(".delete-item").forEach(btn => {
      btn.onclick = () => {
        lastDeleted = btn.parentElement.cloneNode(true);
        btn.parentElement.remove();
        saveHistory();
      };
    });
  }

  function evaluateExpression(expr) {
    try {
      expr = expr
        .replace(/π/g, Math.PI)
        .replace(/e/g, Math.E)
        .replace(/sqrt/g, "Math.sqrt")
        .replace(/log/g, "Math.log10")
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
        .replace(/\^/g, "");
  
      const result = eval(expr);
      updateHistory(display.value, result);
      display.value = result;
    } catch {
      display.value = "Error";
    }
  }
  
  buttons.forEach(button => {
    const val = button.textContent;
  
    if (val === "=") {
      button.addEventListener("click", () => evaluateExpression(display.value));
    } else if (button.id === "clear") {
      button.addEventListener("click", () => display.value = "");
    } else if (button.id === "copy") {
      button.addEventListener("click", () => {
        navigator.clipboard.writeText(display.value);
        copyBtn.textContent = "Copied!";
        setTimeout(() => copyBtn.textContent = "Copy", 1000);
      });
    } else {
      button.addEventListener("click", () => display.value += val);
    }
  });
  
  document.addEventListener("keydown", (e) => {
    if (/[\d+\-*/().^]/.test(e.key)) {
      display.value += e.key;
    } else if (e.key === "Enter") {
      evaluateExpression(display.value);
    } else if (e.key === "Backspace") {
      display.value = display.value.slice(0, -1);
    } else if (e.key === "Escape") {
      display.value = "";
    }
  });
  
  themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark", themeSwitch.checked);
  });
  
  downloadHistory.addEventListener("click", () => {
    const items = Array.from(historyList.querySelectorAll("li")).map(li => li.textContent);
    const content = items.join("\n");
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
  
    link.href = URL.createObjectURL(blob);
    link.download = "calculator_history.txt";
    link.click();
  });
  
  downloadCSV.addEventListener("click", () => {
    const items = Array.from(historyList.querySelectorAll("li")).map(li => {
      const span = li.querySelector("span");
      if (!span) return '';
      const [expression, result] = span.textContent.split(" = ");
      return "${expression.trim()}","${result.trim()}";
    });
    const csv = "Expression,Result\n" + items.filter(Boolean).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "calculator_history.csv";
    link.click();
  });
  
  clearHistory.addEventListener("click", () => {
    if (confirm("Clear all history?")) {
      historyList.innerHTML = "";
      localStorage.removeItem("calcHistory");
    }
  });
  
  clearAllButLast.addEventListener("click", () => {
    const items = historyList.querySelectorAll("li");
    if (items.length > 1) {
      for (let i = 1; i < items.length; i++) {
        items[i].remove();
      }
      saveHistory();
    }
  });
  
  undoDelete.addEventListener("click", () => {
    if (lastDeleted) {
      historyList.prepend(lastDeleted);
      bindDeleteEvents();
      saveHistory();
      lastDeleted = null;
    } else {
      alert("Nothing to undo.");
    }
  });    

const toggle = document.getElementById('themeSwitch');
const label = document.getElementById('modeLabel');

toggle.addEventListener('change', () => {
 label.innerText = toggle.checked ? 'DARK MODE' : 'LIGHT MODE';
});
