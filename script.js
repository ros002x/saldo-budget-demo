const budget = {
  currentBalance: 1666,
  income: [
    { title: "Giuseppe", detail: "Saldo", amount: 80, timing: "breve" },
    { title: "Stipendio luglio", detail: "Parziale", amount: 520, timing: "luglio" },
    { title: "Stipendio agosto", detail: "Mese completo", amount: 1500, timing: "agosto" },
    { title: "Stipendio settembre", detail: "Stima", amount: 480, timing: "settembre" },
    { title: "TFR", detail: "Previsto", amount: 200, timing: "fine rapporto" },
    { title: "Rimborso fratello", detail: "Credito", amount: 600, timing: "da ricevere" },
    { title: "Rimborso ex", detail: "Credito", amount: 600, timing: "da ricevere" },
    { title: "Rimborso 730", detail: "Dicembre", amount: 863, timing: "dicembre" }
  ],
  expenses: [
    { title: "Patente", detail: "Uscita prevista", amount: 700, timing: "estate" },
    { title: "Bari", detail: "Ottobre - dicembre", amount: 1150, timing: "Q4" }
  ],
  forecasts: [
    { title: "Fine estate", detail: "Dopo settembre e patente", amount: 4950 },
    { title: "Fine 2026", detail: "Dopo Bari", amount: 4650 },
    { title: "Inizio 2027", detail: "Con NASpI", amount: 6000 }
  ],
  naspi: [
    { title: "Minimo", amount: 1800 },
    { title: "Realistico", amount: 2000 },
    { title: "Ottimistico", amount: 2500 }
  ],
  projects: [
    { title: "BeerBQ", min: 700, max: 1200 },
    { title: "Ristorante Al Viale", min: 700, max: 1200 },
    { title: "Tunnel 2.0", min: 900, max: 1500 },
    { title: "Studio Tattoo", min: 1500, max: 1500 },
    { title: "Cinema", min: 1500, max: 2000 },
    { title: "Giuseppe", min: 4000, max: 4000 }
  ],
  maintenance: [
    { title: "BeerBQ", min: 50, max: 50 },
    { title: "Al Viale", min: 50, max: 50 },
    { title: "Tunnel 2.0", min: 50, max: 50 },
    { title: "Tattoo", min: 50, max: 50 },
    { title: "Cinema", min: 100, max: 150 }
  ]
};

const formatEuro = (value) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }).format(value);

const totalIncome = budget.income.reduce((sum, item) => sum + item.amount, 0);
const totalExpenses = budget.expenses.reduce((sum, item) => sum + item.amount, 0);
const projectedAvailable = budget.currentBalance + totalIncome - totalExpenses;
const projectMin = budget.projects.reduce((sum, item) => sum + item.min, 0);
const projectMax = budget.projects.reduce((sum, item) => sum + item.max, 0);
const maintenanceMin = budget.maintenance.reduce((sum, item) => sum + item.min, 0);
const maintenanceMax = budget.maintenance.reduce((sum, item) => sum + item.max, 0);

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

setText("[data-current-balance]", formatEuro(budget.currentBalance));
setText("[data-total-income]", formatEuro(totalIncome));
setText("[data-total-expenses]", formatEuro(totalExpenses));
setText("[data-projected-available]", formatEuro(projectedAvailable));
setText("[data-project-range]", `${formatEuro(projectMin)} - ${formatEuro(projectMax)}`);
setText("[data-maintenance-month]", `${formatEuro(maintenanceMin)} - ${formatEuro(maintenanceMax)}`);
setText("[data-maintenance-year]", `${formatEuro(maintenanceMin * 12)} - ${formatEuro(maintenanceMax * 12)}`);

const renderList = (selector, items, options = {}) => {
  const list = document.querySelector(selector);
  if (!list) return;

  list.innerHTML = items
    .map((item) => {
      const amount = options.range
        ? item.min === item.max
          ? formatEuro(item.min)
          : `${formatEuro(item.min)} - ${formatEuro(item.max)}`
        : `${options.negative ? "- " : ""}${formatEuro(item.amount)}`;

      return `
        <article class="list-row ${options.tone || ""}">
          <div class="item-meta">
            <span class="token ${options.token || "blue"}"></span>
            <div>
              <strong>${item.title}</strong>
              <small>${item.detail || item.timing || ""}</small>
            </div>
          </div>
          <em>${amount}</em>
        </article>
      `;
    })
    .join("");
};

renderList("#incomeList", budget.income, { token: "green", tone: "income" });
renderList("#expenseList", budget.expenses, { token: "red", tone: "expense", negative: true });
renderList("#forecastList", budget.forecasts, { token: "blue" });
renderList("#projectList", budget.projects, { token: "purple", tone: "income", range: true });
renderList("#maintenanceList", budget.maintenance, { token: "orange", tone: "expense", range: true });
renderList("#naspiList", budget.naspi, { token: "blue" });

const navLinks = document.querySelectorAll("[data-view-target]");
const views = document.querySelectorAll("[data-view]");

const setActiveView = (name) => {
  views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === name);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.viewTarget === name);
  });

  window.scrollTo({ top: 0, behavior: "instant" });
};

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveView(link.dataset.viewTarget);
  });
});
