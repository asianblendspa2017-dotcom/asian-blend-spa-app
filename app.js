const SPA_PHONE = "27840377167";
const SPA_EMAIL = "info@asianblendspa.com";
const FRESHA_URL = "https://www.fresha.com/en-GB/a/asian-blend-spa-home-of-tranquility-cape-town-55-porterfield-road-wdeh2u6j/booking?menu=true&pId=757613";

const THERAPIES = [
  {
    id: "hilot",
    name: "Philippine Hilot",
    category: "Massage",
    duration: "30 min – 2 hrs",
    price: "From R350",
    desc: "\"Hilot\" refers to rubbing and pressure on the muscles and joints — a traditional Filipino way to promote body healing.",
    tiers: [
      { label: "30 min (except back)", price: "R350" },
      { label: "60 min", price: "R600" },
      { label: "90 min", price: "R800" },
      { label: "2 hours", price: "R950" },
    ],
    benefits: ["Deep muscle relaxation", "Improved circulation", "Pain relief", "Balanced energy flow", "Enhanced digestion"],
  },
  {
    id: "sports-deep-tissue",
    name: "Sports Deep Tissue Massage",
    category: "Massage",
    duration: "60 min – 2 hrs",
    price: "From R850",
    desc: "A targeted deep tissue approach for the areas that need it most — muscle recovery, range of motion, and injury prevention.",
    tiers: [
      { label: "For Her — 60 min", price: "R850" },
      { label: "For Her — 90 min", price: "R950" },
      { label: "For Her — 2 hours", price: "R1150" },
      { label: "For Him — 60 min", price: "R950" },
      { label: "For Him — 90 min", price: "R1200" },
      { label: "For Him — 2 hours", price: "R1500" },
    ],
    benefits: ["Enhanced muscle recovery", "Increased flexibility", "Pain relief", "Reduced injury risk", "Better posture"],
  },
  {
    id: "thai-traditional",
    name: "Traditional Thai Massage",
    category: "Massage",
    duration: "Ask in-store",
    price: "Ask for pricing",
    desc: "No oils or lotions — you stay fully clothed. Rather than rubbing, the body is compressed, pulled, stretched, and rocked for deep release.",
    tiers: [],
    benefits: [],
  },
  {
    id: "quick-fix",
    name: "30-Minute Quick Fix",
    category: "Massage",
    duration: "30 min · specific area",
    price: "From R350",
    desc: "A focused massage on one specific area of tension — fast relief when you're short on time.",
    tiers: [
      { label: "Back", price: "R400" },
      { label: "Neck & Shoulders", price: "R400" },
      { label: "Legs & Feet", price: "R400" },
      { label: "Scalp Massage", price: "R350" },
      { label: "Abdominal Detox Reset Massage", price: "R450" },
    ],
    benefits: ["Rapid tension relief", "Improved posture", "Reduced pain", "Increased flexibility", "Relief from headaches"],
  },
  {
    id: "holistic",
    name: "Holistic Massage",
    category: "Massage",
    duration: "50 min",
    price: "R650",
    desc: "A balanced full-body massage that nurtures the body, calms the mind, and restores natural harmony.",
    tiers: [],
    benefits: [],
  },
  {
    id: "back-neck-focus",
    name: "Back & Neck Focus Massage",
    category: "Massage",
    duration: "60 min",
    price: "R550",
    desc: "Targets tightness and tension in the back, neck, and shoulders to restore mobility and relieve stress.",
    tiers: [],
    benefits: [],
  },
  {
    id: "reflexology",
    name: "Reflexology",
    category: "Massage",
    duration: "40 min",
    price: "R550",
    desc: "Stimulates pressure points on the feet to support natural healing and improve overall wellness.",
    tiers: [],
    benefits: [],
  },
  {
    id: "head-massage",
    name: "Head Massage",
    category: "Massage",
    duration: "30 min",
    price: "R350",
    desc: "Relieves stress, eases tension, and promotes deep relaxation.",
    tiers: [],
    benefits: [],
  },
  {
    id: "gua-sha",
    name: "Gua Sha Facial Massage",
    category: "Facial",
    duration: "45 min · face & neck only",
    price: "R450",
    desc: "A smooth-edged tool gently scrapes the skin in specific patterns, stimulating circulation and lymphatic drainage for a lifted, radiant glow.",
    tiers: [],
    benefits: ["Reduced puffiness", "Enhanced skin tone", "Lifted, firmer skin", "Fewer fine lines", "Detoxification"],
  },
  {
    id: "dry-cupping",
    name: "Dry Cupping Therapy",
    category: "Body",
    duration: "30 min · back only",
    price: "R450",
    desc: "Specialized suction cupping focused on the back to boost circulation, ease muscle tension, and support lymphatic flow.",
    tiers: [],
    benefits: ["Enhanced circulation", "Detoxification", "Muscle pain relief", "Improved lymphatic flow", "Pairs well with other therapies"],
  },
  {
    id: "herbal-compress",
    name: "Thai Herbal Hot Compress",
    category: "Massage",
    duration: "75 min – 2 hrs",
    price: "From R950",
    desc: "A rejuvenating treatment combining warm herbal compresses with rhythmic massage — relieves muscle tension, improves circulation, detoxifies, and restores balance. Hot Stone Massage available as an add-on.",
    tiers: [
      { label: "For Her — 75 min", price: "R950" },
      { label: "For Her — 2 hours", price: "R1200" },
      { label: "For Him — 75 min", price: "R1100" },
      { label: "For Him — 2 hours", price: "R1300" },
    ],
    benefits: ["Deep relaxation", "Improved circulation", "Muscle tension relief", "Enhanced mood", "Skin hydration"],
  },
  {
    id: "thai-oil",
    name: "Thai Oil Massage",
    category: "Massage",
    duration: "60 min · light or medium pressure",
    price: "R450",
    desc: "A traditional oil massage with your choice of light or medium pressure — relaxing, hydrating, and adaptable to your needs.",
    tiers: [],
    benefits: ["Relaxation & stress relief", "Improved circulation", "Skin hydration", "Increased flexibility", "Emotional well-being"],
  },
  {
    id: "tmj-relief",
    name: "TMJ Relief (Add-on)",
    category: "Add-on",
    duration: "Add-on to any 60 min session",
    price: "R150",
    desc: "Relieves jaw tension, reduces headaches, and improves overall jaw comfort.",
    tiers: [],
    benefits: [],
  },
];

const SPECIALS = [
  { badge: "New Client", title: "First Visit Discount", body: "10% off for new clients — bookings essential." },
  {
    badge: "The ENTERTAINER",
    title: "App-Exclusive Deals",
    body: "Available via The ENTERTAINER app. Advance booking required. Valid until 30 Dec 2026.",
    items: [
      "30% off 60-min Deep Tissue Sports Massage",
      "30% off Oil & Philippine Hilot Massage",
      "30% off 60-min Sports Massage",
      "60-min Hot Stone Massage — Buy One Get One Free",
      "30% off Thai Massage",
      "30% off Swedish Massage",
    ],
    link: "https://www.theentertainerme.com/outlets/asian-blend-spa/detail?m=62963&o=121344",
  },
];

const state = { therapyFilter: "All" };

function $(sel) { return document.querySelector(sel); }
function $all(sel) { return Array.from(document.querySelectorAll(sel)); }

function showView(name) {
  $all(".view").forEach(v => v.classList.add("hidden"));
  $(`#view-${name}`).classList.remove("hidden");
  $all(".tab").forEach(t => t.classList.toggle("active", t.dataset.goto === name));
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.add("hidden"), 2200);
}

function renderTherapyFilters() {
  const cats = ["All", ...new Set(THERAPIES.map(t => t.category))];
  $("#therapyFilters").innerHTML = cats.map(c =>
    `<button class="filter-chip ${c === state.therapyFilter ? "active" : ""}" data-filter="${c}">${c}</button>`
  ).join("");
}

function renderTherapies() {
  const list = state.therapyFilter === "All"
    ? THERAPIES
    : THERAPIES.filter(t => t.category === state.therapyFilter);

  $("#therapyList").innerHTML = list.map(t => `
    <div class="therapy-card">
      <div class="row-top">
        <h4>${t.name}</h4>
        <span class="therapy-price">${t.price}</span>
      </div>
      <p class="therapy-meta">${t.duration} · ${t.category}</p>
      <p class="therapy-desc">${t.desc}</p>
      ${t.tiers.length ? `
        <ul class="tier-list">
          ${t.tiers.map(tier => `<li><span>${tier.label}</span><span>${tier.price}</span></li>`).join("")}
        </ul>
      ` : ""}
      ${t.benefits.length ? `<p class="therapy-benefits">${t.benefits.join(" · ")}</p>` : ""}
    </div>
  `).join("");
}

function renderSpecials() {
  $("#specialsList").innerHTML = SPECIALS.map(s => `
    <div class="special-card">
      <span class="badge">${s.badge}</span>
      <h4>${s.title}</h4>
      <p>${s.body}</p>
      ${s.items ? `<ul class="special-items">${s.items.map(item => `<li>${item}</li>`).join("")}</ul>` : ""}
      ${s.link ? `<a class="pill-btn special-link" href="${s.link}" target="_blank" rel="noopener">View Offer</a>` : ""}
    </div>
  `).join("") + `
    <div class="special-card note-card">
      <p>Monthly specials rotate — ask your therapist or check your booking confirmation for the latest promotions.</p>
    </div>
  `;
}

function populateServiceSelect() {
  $("#serviceSelect").innerHTML = THERAPIES.map(t =>
    `<option value="${t.id}">${t.name} — ${t.price}</option>`
  ).join("");
}

function getBookings() {
  try { return JSON.parse(localStorage.getItem("abs_bookings") || "[]"); }
  catch { return []; }
}
function saveBookings(list) {
  localStorage.setItem("abs_bookings", JSON.stringify(list));
}

function renderBookings() {
  const bookings = getBookings().sort((a, b) => b.createdAt - a.createdAt);
  $("#noBookings").classList.toggle("hidden", bookings.length > 0);
  $("#myBookingsList").innerHTML = bookings.map(b => {
    const therapy = THERAPIES.find(t => t.id === b.service);
    return `
      <div class="booking-card" data-id="${b.id}">
        <div class="row-top">
          <h4>${therapy ? therapy.name : b.service}</h4>
          <span class="status-pill">Requested</span>
        </div>
        <p>${b.date} at ${b.time}${b.therapist ? " · " + b.therapist : ""}</p>
        <p>${b.name} · ${b.phone}</p>
        ${b.notes ? `<p>Note: ${b.notes}</p>` : ""}
        <div class="booking-actions">
          <button class="pill-btn" data-whatsapp="${b.id}">💬 Send via WhatsApp</button>
          <button class="pill-btn" data-email="${b.id}">✉️ Send via Email</button>
          <button class="pill-btn danger" data-cancel="${b.id}">Remove</button>
        </div>
      </div>
    `;
  }).join("");
}

function buildMessage(b) {
  const therapy = THERAPIES.find(t => t.id === b.service);
  return [
    `New booking request — Asian Blend Spa`,
    `Name: ${b.name}`,
    `Phone: ${b.phone}`,
    b.email ? `Email: ${b.email}` : null,
    `Therapy: ${therapy ? therapy.name : b.service}`,
    `Date: ${b.date}`,
    `Time: ${b.time}`,
    b.therapist ? `Therapist preference: ${b.therapist}` : null,
    b.notes ? `Notes: ${b.notes}` : null,
  ].filter(Boolean).join("\n");
}

function sendBookingByWhatsApp(b) {
  const message = buildMessage(b);
  const waText = encodeURIComponent(message);
  window.open(`https://wa.me/${SPA_PHONE}?text=${waText}`, "_blank");
}

function sendBookingByEmail(b) {
  const message = buildMessage(b);
  const subject = encodeURIComponent(`Booking Request: ${b.name}`);
  const body = encodeURIComponent(message);
  window.location.href = `mailto:${SPA_EMAIL}?subject=${subject}&body=${body}`;
}

function init() {
  renderTherapyFilters();
  renderTherapies();
  renderSpecials();
  populateServiceSelect();
  renderBookings();
  showView("home");

  $all("[data-goto]").forEach(el => {
    el.addEventListener("click", () => showView(el.dataset.goto));
  });

  $("#therapyFilters").addEventListener("click", e => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    state.therapyFilter = btn.dataset.filter;
    renderTherapyFilters();
    renderTherapies();
  });

  const freshaBtn = $("#freshaBtn");
  if (FRESHA_URL) freshaBtn.href = FRESHA_URL;
  freshaBtn.addEventListener("click", e => {
    if (!FRESHA_URL) {
      e.preventDefault();
      toast("Add your Fresha booking link in app.js (FRESHA_URL)");
    }
  });

  $("#bookingForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    const booking = { id: Date.now().toString(36), createdAt: Date.now(), ...data };
    const bookings = getBookings();
    bookings.push(booking);
    saveBookings(bookings);
    renderBookings();
    form.reset();
    toast("Booking saved — send it to us below");
    showView("bookings");
  });

  $("#myBookingsList").addEventListener("click", e => {
    const waId = e.target.closest("[data-whatsapp]")?.dataset.whatsapp;
    const emailId = e.target.closest("[data-email]")?.dataset.email;
    const cancelId = e.target.closest("[data-cancel]")?.dataset.cancel;
    if (waId) {
      const b = getBookings().find(x => x.id === waId);
      if (b) sendBookingByWhatsApp(b);
    }
    if (emailId) {
      const b = getBookings().find(x => x.id === emailId);
      if (b) sendBookingByEmail(b);
    }
    if (cancelId) {
      const remaining = getBookings().filter(x => x.id !== cancelId);
      saveBookings(remaining);
      renderBookings();
      toast("Booking removed");
    }
  });

  const today = new Date().toISOString().split("T")[0];
  $('input[name="date"]').setAttribute("min", today);
}

document.addEventListener("DOMContentLoaded", init);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  $("#installBtn").classList.remove("hidden");
});
$("#installBtn")?.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  $("#installBtn").classList.add("hidden");
});
window.addEventListener("appinstalled", () => {
  $("#installBtn").classList.add("hidden");
});
