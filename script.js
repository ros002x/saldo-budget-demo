const budget = {
  currentBalance: 1666,
  income: [
    { title: "Giuseppe", detail: "Saldo", amount: 80, timing: "breve", icon: "person" },
    { title: "Stipendio luglio", detail: "Parziale", amount: 520, timing: "luglio", icon: "wallet" },
    { title: "Stipendio agosto", detail: "Mese completo", amount: 1500, timing: "agosto", icon: "wallet" },
    { title: "Stipendio settembre", detail: "Stima", amount: 480, timing: "settembre", icon: "wallet" },
    { title: "TFR", detail: "Previsto", amount: 200, timing: "fine rapporto", icon: "briefcase" },
    { title: "Rimborso fratello", detail: "Credito", amount: 600, timing: "da ricevere", icon: "receipt" },
    { title: "Rimborso ex", detail: "Credito", amount: 600, timing: "da ricevere", icon: "receipt" },
    { title: "Rimborso 730", detail: "Dicembre", amount: 863, timing: "dicembre", icon: "document" }
  ],
  expenses: [
    { title: "Patente", detail: "Uscita prevista", amount: 700, timing: "estate", icon: "car" },
    { title: "Bari", detail: "Ottobre - dicembre", amount: 1150, timing: "Q4", icon: "home" }
  ],
  forecasts: [
    { title: "Fine estate", detail: "Dopo settembre e patente", amount: 4950, icon: "sun" },
    { title: "Fine 2026", detail: "Dopo Bari", amount: 4650, icon: "calendar" },
    { title: "Inizio 2027", detail: "Con NASpI", amount: 6000, icon: "target" }
  ],
  watchlist: [
    { title: "MacBook Air M5", detail: "Possibile acquisto", amount: 1250, icon: "laptop" },
    { title: "Vestiti", detail: "Budget da tenere sotto controllo", amount: 600, icon: "shirt" }
  ],
  naspi: [
    { title: "Minimo", amount: 1800, icon: "shield" },
    { title: "Realistico", amount: 2000, icon: "target" },
    { title: "Ottimistico", amount: 2500, icon: "spark" }
  ],
  projects: [
    { title: "BeerBQ", min: 700, max: 1200, icon: "burger" },
    { title: "Ristorante Al Viale", min: 700, max: 1200, icon: "utensils" },
    { title: "Tunnel 2.0", min: 900, max: 1500, icon: "burger" },
    { title: "Respect Tattoo Art", min: 1500, max: 1500, icon: "tattoo" },
    { title: "Cinema", min: 1500, max: 2000, icon: "film" },
    { title: "Giuseppe", min: 4000, max: 4000, icon: "person" }
  ],
  maintenance: [
    { title: "BeerBQ", min: 50, max: 50, icon: "burger" },
    { title: "Al Viale", min: 50, max: 50, icon: "utensils" },
    { title: "Tunnel 2.0", min: 50, max: 50, icon: "burger" },
    { title: "Respect Tattoo Art", min: 50, max: 50, icon: "tattoo" },
    { title: "Cinema", min: 100, max: 150, icon: "film" }
  ]
};

const formatEuro = (value) =>
  `€ ${new Intl.NumberFormat("it-IT", {
    maximumFractionDigits: 0
  }).format(value)}`;

const icons = {
  person: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2Z"/><path d="M4.7 20.2c.8-4 3.4-6 7.3-6s6.5 2 7.3 6"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 7.5h13.8c1.2 0 2.2 1 2.2 2.2v7.1c0 1.2-1 2.2-2.2 2.2H5.7a2.2 2.2 0 0 1-2.2-2.2V6.9c0-1.4 1.2-2.4 2.5-2.1l10.2 2.1"/><path d="M16.5 13.2h4"/><path d="M17.9 13.2h.1"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.2 7V5.8c0-1 .8-1.8 1.8-1.8h4c1 0 1.8.8 1.8 1.8V7"/><path d="M4.5 7h15v11.5h-15z"/><path d="M4.5 12h15"/><path d="M10 12.2h4"/></svg>',
  receipt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 4.5h11v15l-2-1.2-2 1.2-2-1.2-2 1.2-3-1.8z"/><path d="M9.2 9h5.6"/><path d="M9.2 12h5.6"/><path d="M9.2 15h3.2"/></svg>',
  document: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5h7l3 3V19.5H7z"/><path d="M14 4.5v3h3"/><path d="M9.5 12h5"/><path d="M9.5 15h5"/></svg>',
  car: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 13.5 7 8.8c.3-.8 1-1.3 1.9-1.3h6.2c.9 0 1.6.5 1.9 1.3l1.8 4.7"/><path d="M4.5 13.5h15v4h-15z"/><path d="M7.3 17.5v1.2"/><path d="M16.7 17.5v1.2"/><path d="M7.5 14.8h.1"/><path d="M16.4 14.8h.1"/></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4.5 11.5 7.5-6 7.5 6"/><path d="M6.5 10.5v8h11v-8"/><path d="M10 18.5v-5h4v5"/></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"/><path d="M12 3.5v2"/><path d="M12 18.5v2"/><path d="m5.9 5.9 1.4 1.4"/><path d="m16.7 16.7 1.4 1.4"/><path d="M3.5 12h2"/><path d="M18.5 12h2"/><path d="m5.9 18.1 1.4-1.4"/><path d="m16.7 7.3 1.4-1.4"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 6.5h13v13h-13z"/><path d="M8.5 4.5v4"/><path d="M15.5 4.5v4"/><path d="M5.5 10h13"/><path d="M8.7 13.3h.1"/><path d="M12 13.3h.1"/><path d="M15.3 13.3h.1"/></svg>',
  target: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M12 12h.1"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5c4-1.9 6.5-5.2 6.5-10V6.2L12 3.8 5.5 6.2v4.6c0 4.8 2.5 8.1 6.5 9.7Z"/></svg>',
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.8 13.9 9l5.3 1.9-5.3 1.9L12 18.2l-1.9-5.4-5.3-1.9L10.1 9Z"/><path d="m18 16 .7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7Z"/></svg>',
  burger: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11.2c.4-3 3.1-5 7-5s6.6 2 7 5Z"/><path d="M4.5 13h15"/><path d="M5.5 16.5h13"/><path d="M6.5 18.2h11"/><path d="M8.3 9.2h.1"/><path d="M12 8.4h.1"/><path d="M15.7 9.2h.1"/></svg>',
  utensils: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v6"/><path d="M4.8 4.5v6"/><path d="M9.2 4.5v6"/><path d="M4.8 10.5h4.4L7 13v6.5"/><path d="M16.5 4.5c2 1.6 2.8 4.8.8 7.6l-1 1.4v6"/><path d="M14.7 4.5v15"/></svg>',
  tattoo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 19 2.2-6.2 6-6 4 4-6 6Z"/><path d="m13.2 6.8 1.8-1.8 4 4-1.8 1.8"/><path d="M7.2 12.8 11.2 17"/><path d="M5 19l4.2-1.8"/></svg>',
  film: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5h14v13H5z"/><path d="M8 5.5v13"/><path d="M16 5.5v13"/><path d="M5 9h3"/><path d="M5 15h3"/><path d="M16 9h3"/><path d="M16 15h3"/></svg>',
  laptop: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 6.5h13v8h-13z"/><path d="M3.8 17.5h16.4l-1.4 2H5.2z"/><path d="M10 17.5h4"/></svg>',
  shirt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 5.2 12 7l3.5-1.8 3.8 2.4-2 3.2-1.8-.9v9.3h-7V9.9l-1.8.9-2-3.2z"/><path d="M10 5.8c.4 1 1.1 1.5 2 1.5s1.6-.5 2-1.5"/></svg>'
};

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
            <span class="token ${options.token || "blue"}">${icons[item.icon] || icons.target}</span>
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
renderList("#expenseListSpese", budget.expenses, { token: "red", tone: "expense", negative: true });
renderList("#forecastList", budget.forecasts, { token: "blue" });
renderList("#forecastListSpese", budget.forecasts, { token: "blue" });
renderList("#projectList", budget.projects, { token: "purple", tone: "income", range: true });
renderList("#maintenanceList", budget.maintenance, { token: "orange", tone: "expense", range: true });
renderList("#naspiList", budget.naspi, { token: "blue" });

const renderFocus = () => {
  const list = document.querySelector("#watchList");
  if (!list) return;

  list.innerHTML = budget.watchlist
    .map(
      (item) => `
        <article>
          <span class="focus-token">${icons[item.icon]}</span>
          <div>
            <span>${item.detail}</span>
            <strong>circa ${formatEuro(item.amount)}</strong>
            <p>${item.title}</p>
          </div>
        </article>
      `
    )
    .join("");
};

renderFocus();

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
