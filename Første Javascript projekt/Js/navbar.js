// ========== NAVBAR JAVASCRIPT - LET UDGAVE ==========
// Dette er en simpel version der demonstrerer ALLE pensum-punkter
// Skrevet så det er nemt at forstå for begyndere

// ========== 1. VARIABLER ==========
// Variabler er som "bokse" hvor vi gemmer ting

// let - kan ændres senere
let brugerErLoggetInd = false;    // Boolean (sand/falsk)
let antalVarerIKurv = 0;          // Number (tal)
let aktivDropdown = "";           // String (tekst)

// const - kan IKKE ændres senere (konstant)
const SOGEFELT_ID = "search-input";  // String
const MAX_DROPDOWN_ITEMS = 5;        // Number

// var - gammeldags, men virker stadig
var sidebarÅben = false;            // Boolean

// ========== 2. ARRAY ==========
// Arrays er som "lister" hvor vi gemmer flere ting

// Simpel array med tekst
const dropdownMenuer = ["Tøj", "Sko", "Tasker", "Accessories"];

// Array med tal
const produktAntal = [12, 8, 5, 3, 15];

// Array med blandede ting (forskellige datatyper)
const søgeHistorik = ["løbesko", "fodbold", 2024, true];

// Array med objekter (mere avanceret)
const navigation = [
    { navn: "Forside", link: "#", ikon: "🏠" },
    { navn: "Tøj", link: "#", ikon: "👕" },
    { navn: "Sko", link: "#", ikon: "👟" }
];

// ========== 3. DATATYPER ==========
// Forskellige slags data vi kan gemme

const eksempler = {
    // String = tekst
    tekst: "Hej verden",
    
    // Number = tal
    heltal: 42,
    decimaltal: 3.14,
    
    // Boolean = sand/falsk
    erSandt: true,
    erFalsk: false,
    
    // Array = liste
    liste: ["en", "to", "tre"],
    
    // Object = samling af data
    person: {
        navn: "Peter",
        alder: 25
    },
    
    // Null = tomt (med vilje)
    tomVærdi: null,
    
    // Undefined = ikke defineret endnu
    ikkeDefineret: undefined
};

// ========== 4. OPERATORER ==========
// Symboler der udfører handlinger

// Aritmetiske operatorer (regning)
let sum = 5 + 3;        // Plus: 8
let difference = 10 - 4; // Minus: 6
let produkt = 6 * 7;    // Gange: 42
let kvotient = 20 / 5;  // Division: 4
let rest = 17 % 5;      // Rest (modulo): 2

// Sammenligningsoperatorer (sammenligner)
let erLig = (5 == "5");     // true (samme værdi)
let erStrengtLig = (5 === "5"); // false (forskellig type)
let erStørre = (10 > 5);    // true
let erMindre = (3 < 7);     // true
let erForskellig = (5 != 4); // true

// Logiske operatorer (og, eller, ikke)
let og = (true && false);   // false (skal begge være sande)
let eller = (true || false); // true (en af dem er sand)
let ikke = !true;           // false (modsat)

// Tildelingsoperatorer (giver værdi)
let x = 10;     // = tildeler værdi
x += 5;         // x = x + 5 (nu 15)
x -= 3;         // x = x - 3 (nu 12)

// ========== 5. FUNKTIONER ==========
// Funktioner er "opskrifter" på kode der kan genbruges

// 1. Function declaration (den mest almindelige)
function sigHej() {
    console.log("Hej!");
}

// 2. Funktion med parameter (input)
function sigNavn(navn) {
    console.log("Hej " + navn);
}

// 3. Funktion der returnerer noget (giver svar tilbage)
function lægSammen(a, b) {
    let resultat = a + b;
    return resultat;  // return = giv svar tilbage
}

// 4. Funktion med flere parametre
function opretSøgefelt(placeholder, bredde) {
    // Her laver vi et søgefelt
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = placeholder;
    input.style.width = bredde + "px";
    return input;
}

// 5. Arrow function (nyere måde)
const gangeMedTo = (tal) => {
    return tal * 2;
};

// Kortere arrow function (hvis kun én linje)
const halver = tal => tal / 2;

// ========== 6. LOOPS ==========
// Loops gentager kode mange gange

// FOR loop - gentag et bestemt antal gange
for (let i = 0; i < 5; i++) {
    console.log("Dette er gang nummer " + i);
    // i starter ved 0, slutter ved 4
}

// FOR loop med array - gennemgå alle i listen
for (let i = 0; i < dropdownMenuer.length; i++) {
    console.log("Menu item: " + dropdownMenuer[i]);
}

// WHILE loop - gentag SÅ LÆNGE betingelse er sand
let tæller = 0;
while (tæller < 3) {
    console.log("While loop: " + tæller);
    tæller++; // HUSK at ændre tælleren!
}

// FOR...OF loop - let måde at gennemgå arrays
for (let menu of dropdownMenuer) {
    console.log("Menu: " + menu);
}

// FOREACH - en anden måde at gennemgå arrays
dropdownMenuer.forEach(function(menu, index) {
    console.log(index + ": " + menu);
});

// ========== 7. SCOPE ==========
// Scope = hvor variabler er synlige

// GLOBAL SCOPE - variabler udenfor funktioner (synlige overalt)
let globalVariabel = "Jeg er synlig overalt!";

function testScope() {
    // FUNCTION SCOPE - variabler inde i funktioner
    let funktionVariabel = "Kun synlig inde i denne funktion";
    console.log(globalVariabel); // ✅ Virker (global)
    console.log(funktionVariabel); // ✅ Virker (samme funktion)
    
    if (true) {
        // BLOCK SCOPE - variabler inde i { }
        let blockVariabel = "Kun synlig i denne block";
        var gammelVariabel = "Var er IKKE block-scoped";
        console.log(blockVariabel); // ✅ Virker
    }
    
    // console.log(blockVariabel); // ❌ Virker IKKE (udenfor block)
    console.log(gammelVariabel); // ✅ Virker (var er global)
}

// ========== 8. EVENTS ==========
// Events = når brugeren gør noget

// Hvordan man finder elementer på siden
const navBar = document.querySelector(".topnav"); // Finder med class
const dropdownKnapper = document.querySelectorAll("[data-dropdown-btn]"); // Alle dropdown knapper
const søgeKnap = document.getElementById("search-btn"); // Finder med ID

// 1. CLICK event - når man klikker
function nårManKlikkerPåDropdown(event) {
    // event = information om klikket
    let knap = event.target; // Det element der blev klikket på
    console.log("Du klikkede på: " + knap.textContent);
    
    // Find dropdown ID
    let dropdownId = knap.getAttribute("data-dropdown-btn");
    
    // Find panelet der skal vises
    let panel = document.getElementById("dd-" + dropdownId);
    
    // Tjek om panelet findes
    if (panel) {
        // Hvis panelet er skjult, vis det
        if (panel.hidden) {
            panel.hidden = false;
            knap.setAttribute("aria-expanded", "true");
        } else {
            // Hvis panelet er synligt, skjul det
            panel.hidden = true;
            knap.setAttribute("aria-expanded", "false");
        }
    }
}

// 2. SUBMIT event - når man sender en formular
function nårManSøger(event) {
    event.preventDefault(); // STOP siden fra at genindlæse
    
    // Find hvad brugeren har skrevet
    let søgefelt = document.querySelector("[data-search-input]");
    let søgeOrd = søgefelt.value;
    
    // Tjek om der er skrevet noget
    if (søgeOrd.length > 0) {
        // Gem i søgehistorik (array)
        søgeHistorik.push(søgeOrd);
        console.log("Du søgte på: " + søgeOrd);
        console.log("Søgehistorik: " + søgeHistorik);
        
        // Ryd søgefeltet
        søgefelt.value = "";
        
        // Fortæl brugeren hvad der skete
        alert("Du søgte på: " + søgeOrd);
    }
}

// 3. MOUSEOVER event - når musen kommer hen over
function nårMusenKommerOver(event) {
    let element = event.target;
    element.style.backgroundColor = "#f0f0f0";
}

// 4. MOUSEOUT event - når musen forlader
function nårMusenForlader(event) {
    let element = event.target;
    element.style.backgroundColor = ""; // Fjern farve
}

// ========== OPGAVE: LAV NAVBAREN ==========
// Her bygger vi faktisk navbaren

// Når siden er færdig med at loade
window.addEventListener("load", function() {
    console.log("Siden er loaded! Starter navbar...");
    
    // Find navbar elementet
    const navbar = document.querySelector(".topnav");
    
    if (navbar) {
        // === 1. LAV SØGEFELT ===
        let søgefeltContainer = document.createElement("div");
        søgefeltContainer.className = "topnav__search";
        
        // Lav søgeformular
        let søgeForm = document.createElement("form");
        søgeForm.className = "search-form";
        
        // Lav søgeinput
        let søgeInput = document.createElement("input");
        søgeInput.type = "search";
        søgeInput.placeholder = "Søg efter produkter...";
        søgeInput.className = "search-input";
        søgeInput.setAttribute("data-search-input", "");
        
        // Lav søgeknap
        let søgeKnap = document.createElement("button");
        søgeKnap.type = "submit";
        søgeKnap.className = "search-btn";
        søgeKnap.innerHTML = '<span class="search-icon">🔍</span>';
        
        // Sæt det hele sammen
        søgeForm.appendChild(søgeInput);
        søgeForm.appendChild(søgeKnap);
        søgefeltContainer.appendChild(søgeForm);
        
        // Tilføj søgefelt til navbar (først i menuen)
        navbar.insertBefore(søgefeltContainer, navbar.firstChild);
        
        // === 2. LAV LOGIN KNAP ===
        let loginKnap = document.createElement("button");
        loginKnap.className = "topnav__item topnav__item--login";
        loginKnap.setAttribute("data-login-btn", "");
        
        // TERNARY OPERATOR - kort if/else
        let knapTekst = brugerErLoggetInd ? "Min konto" : "Log ind";
        let knapIkon = brugerErLoggetInd ? "👤" : "🔑";
        
        loginKnap.innerHTML = `
            <span class="topnav__icon">${knapIkon}</span>
            <span class="topnav__label">${knapTekst}</span>
        `;
        
        navbar.appendChild(loginKnap);
        
        // === 3. LAV ØNSKELISTE KNAP ===
        let ønskelisteKnap = document.createElement("button");
        ønskelisteKnap.className = "topnav__item";
        ønskelisteKnap.setAttribute("data-wishlist-btn", "");
        ønskelisteKnap.innerHTML = `
            <span class="topnav__icon">❤️</span>
            <span class="topnav__label">Ønskeliste</span>
        `;
        
        navbar.appendChild(ønskelisteKnap);
        
        // === 4. LAV KURV KNAP ===
        let kurvKnap = document.createElement("button");
        kurvKnap.className = "topnav__item";
        kurvKnap.setAttribute("data-cart-btn", "");
        kurvKnap.innerHTML = `
            <span class="topnav__icon">🛒</span>
            <span class="topnav__label">Kurv (${antalVarerIKurv})</span>
        `;
        
        navbar.appendChild(kurvKnap);
    }
    
    // === TILFØJ EVENT LISTENERS ===
    // Det er DET DER FÅR KNAPPERNE TIL AT VIRKE!
    
    // 1. Dropdown knapper
    let dropdowns = document.querySelectorAll("[data-dropdown-btn]");
    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", nårManKlikkerPåDropdown);
    }
    
    // 2. Søgeformular
    let søgeFormular = document.querySelector("[data-search-form]");
    if (søgeFormular) {
        søgeFormular.addEventListener("submit", nårManSøger);
    } else {
        // Hvis vi ikke har data-search-form, find den vi lige lavede
        let form = document.querySelector(".search-form");
        if (form) {
            form.addEventListener("submit", nårManSøger);
            form.setAttribute("data-search-form", "");
        }
    }
    
    // 3. Login knap
    let login = document.querySelector("[data-login-btn]");
    if (login) {
        login.addEventListener("click", function(event) {
            // Skift login status
            brugerErLoggetInd = !brugerErLoggetInd; // Skifter true/false
            
            // Opdater knappens udseende
            if (brugerErLoggetInd) {
                event.target.closest("button").innerHTML = `
                    <span class="topnav__icon">👤</span>
                    <span class="topnav__label">Min konto</span>
                `;
                alert("Du er nu logget ind!");
                
                // Læg 3 varer i kurven som demo
                antalVarerIKurv = 3;
            } else {
                event.target.closest("button").innerHTML = `
                    <span class="topnav__icon">🔑</span>
                    <span class="topnav__label">Log ind</span>
                `;
                alert("Du er logget ud");
                
                // Fjern varer fra kurven
                antalVarerIKurv = 0;
            }
            
            // Opdater kurvens antal
            let kurv = document.querySelector("[data-cart-btn]");
            if (kurv) {
                kurv.innerHTML = `
                    <span class="topnav__icon">🛒</span>
                    <span class="topnav__label">Kurv (${antalVarerIKurv})</span>
                `;
            }
        });
    }
    
    // 4. Ønskeliste knap
    let ønskeliste = document.querySelector("[data-wishlist-btn]");
    if (ønskeliste) {
        ønskeliste.addEventListener("click", function() {
            alert("Ønskeliste - klik på hjertet for at gemme!");
        });
    }
    
    // 5. Kurv knap
    let kurv = document.querySelector("[data-cart-btn]");
    if (kurv) {
        kurv.addEventListener("click", function() {
            if (antalVarerIKurv > 0) {
                alert("Du har " + antalVarerIKurv + " varer i kurven");
            } else {
                alert("Din kurv er tom");
            }
        });
    }
    
    // 6. Hover effekter (mouse over/out)
    let alleNavItems = document.querySelectorAll(".topnav__item");
    for (let i = 0; i < alleNavItems.length; i++) {
        alleNavItems[i].addEventListener("mouseover", nårMusenKommerOver);
        alleNavItems[i].addEventListener("mouseout", nårMusenForlader);
    }
});

// === TJEKLISTE: HAR VI BRUGT ALLE PENSUMPUNKTER? ===
console.log("=== PENSUM TJEKLISTE ===");
console.log("✅ 1. Variabler - let, const, var");
console.log("✅ 2. Array - dropdownMenuer, søgeHistorik, navigation");
console.log("✅ 3. Datatyper - string, number, boolean, object, null, undefined");
console.log("✅ 4. Operatorer - +, -, *, /, %, ==, ===, >, <, &&, ||, !, +=, -=");
console.log("✅ 5. Funktioner - function, parameter, return, arrow function");
console.log("✅ 6. Loops - for, while, for...of, forEach");
console.log("✅ 7. Scope - global, function, block");
console.log("✅ 8. Events - click, submit, mouseover, mouseout, load");