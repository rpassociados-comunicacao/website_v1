// ****************************************************** NAVBAR ******************************************************

function updateNavbarShadow() {
    const navbar = document.querySelector('.navbar');
    const collapse = document.querySelector('.navbar-collapse');

    if (window.scrollY > 10 || collapse.classList.contains('show')) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
}

window.addEventListener('scroll', updateNavbarShadow);


document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navColapse = document.querySelector(".navbar-collapse");

    const bsCollapse = new bootstrap.Collapse(navColapse, {
        toggle: false // Inicialmente não queremos que o menu se abra automaticamente
    });

    // Controlar a alternância do menu ao clicar no ícone de hambúrguer
    navbarToggler.addEventListener("click", function() {
        // Alterna o ícone de hambúrguer
        menuIcon.classList.toggle("active");

        // Se o menu não estiver visível, abri-lo; caso contrário, fechá-lo
        if (navColapse.classList.contains('show')) {
            bsCollapse.hide(); // Fechar o menu
        } else {
            bsCollapse.show(); // Abrir o menu
        }
    });

    // Fechar o menu quando um link for clicado
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log("Clicou num dos links da nav collapsed!");

            bsCollapse.hide(); // Fechar o menu com transição
            menuIcon.classList.remove("active"); // Voltar ao hambúrguer
            dropOpen = false;
        });
    });
});


document.getElementById("ham-btn").addEventListener("click", () => {
    const dropDown = document.getElementById("drop-menu"); 
    if (!dropOpen) {
        dropDown.classList.remove("show");
        dropOpen = true;
    } else {
        dropDown.classList.add("show");
        dropOpen = false;
    }
      
    console.log("CLICOU NO BOTÃO HAMBURGUER");
})

// *************************************************** NAVBAR FIM ********************************************************

//================================================== EQUIPA =================================================



document.addEventListener("DOMContentLoaded", function () {
  const stickySections = document.querySelectorAll(".sticky-wrapper");

  function handleStickyContent(wrapper) {
    const stickyContent = wrapper.querySelector(".sticky-content");
    const scrollCol = wrapper.querySelector(".scrolling-column");

    if (!stickyContent || !scrollCol) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const offsetTop = wrapper.offsetTop;
    const stickyHeight = stickyContent.offsetHeight;
    const end = offsetTop + scrollCol.offsetHeight - stickyHeight - 100;
    const start = offsetTop - 100;

    if (scrollTop > start && scrollTop < end) {
      stickyContent.classList.add("fixed");
      stickyContent.classList.remove("bottom");
    } else if (scrollTop >= end) {
      stickyContent.classList.remove("fixed");
      stickyContent.classList.add("bottom");
    } else {
      stickyContent.classList.remove("fixed", "bottom");
    }
  }

  function handleStickyGroup() {
    const stickyEl = document.querySelector(".sticky-content-2");
    const firstSection = document.getElementById("dAdministrativo");
    const lastSection = document.getElementById("dRegistos");

    if (!stickyEl || !firstSection || !lastSection) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const start = firstSection.offsetTop - 100;
    const end = lastSection.offsetTop + lastSection.offsetHeight - stickyEl.offsetHeight - 100;

    if (scrollY > start && scrollY < end) {
      stickyEl.style.position = "fixed";
      stickyEl.style.top = "100px";
    } else if (scrollY >= end) {
      stickyEl.style.position = "absolute";
      stickyEl.style.top = (end - firstSection.offsetTop) + "px";
    } else {
      stickyEl.style.position = "static";
      stickyEl.style.top = "auto";
    }
  }

  function onScroll() {
    stickySections.forEach(handleStickyContent);
    handleStickyGroup();
  }

  // Executar na inicialização e em scroll/resize
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll);
  onScroll();
});




document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.getElementById("SectionLeft");
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const juliaImg = document.getElementById("juliaImg");
    const carolinaImg = document.getElementById("carolinaImg");
    const joanaImg = document.getElementById("joanaImg");
    const joaoImg = document.getElementById("joaoImg");
    const veronicaImg = document.getElementById("veronicaImg");
    const britoImg = document.getElementById("britoImg");
    const ricardoImg = document.getElementById("ricardoImg");
    const joaomImg = document.getElementById("joaomImg");
    const biancaImg = document.getElementById("biancaImg");
    
  
    function updateClasses(e) {
      if (!targetElement) return;
  
      if (e.matches) {
        // Largura >= 768px
        targetElement.classList.add("container-left");
        targetElement.classList.remove("container");
        targetElement.classList.remove("px-5");
        juliaImg.src = "./assets/imgs/team/julia-bg.webp";
        carolinaImg.src = "./assets/imgs/team/carolina-bg.webp";
        joanaImg.src = "./assets/imgs/team/joana-bg.webp";
        veronicaImg.src = "./assets/imgs/team/veronica-bg.webp";
        britoImg.src = "./assets/imgs/team/brito-bg.webp";
        ricardoImg.src = "./assets/imgs/team/ricardo-bg.webp";
        joaomImg.src = "./assets/imgs/team/joaom-bg.webp";
        biancaImg.src = "./assets/imgs/team/bianca-bg.webp";
        
      } else {
        // Largura < 768px
        targetElement.classList.add("container");
        targetElement.classList.remove("container-left");
        targetElement.classList.add("px-5");
        juliaImg.src = "./assets/imgs/team/julia-bg.webp";
        carolinaImg.src = "./assets/imgs/team/carolina-bg.webp";
        joanaImg.src = "./assets/imgs/team/joana-bg.webp";
        joaoImg.src = "./assets/imgs/team/joao-bg.webp";
        veronicaImg.src = "./assets/imgs/team/veronica-bg.webp";
        britoImg.src = "./assets/imgs/team/brito-bg.webp";
        ricardoImg.src = "./assets/imgs/team/ricardo-bg.webp";
        joaomImg.src = "./assets/imgs/team/joaom-bg.webp";
        biancaImg.src = "./assets/imgs/team/bianca-bg.webp";
        
      }
    }
  
    // Executa à carga
    updateClasses(mediaQuery);
  
    // E ao mudar de tamanho
    mediaQuery.addEventListener("change", updateClasses);
});


document.addEventListener("DOMContentLoaded", function () {
    const employeeImages = document.querySelectorAll(".employee-picture");

    const observerOptions = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: [0.45, 0.5, 0.55] // 50% visível já ativa o efeito
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            } else {
                entry.target.classList.remove("in-view");
            }
        });
    }, observerOptions);

    employeeImages.forEach(img => observer.observe(img));
});


document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.getElementById("SectionLeft");
    const mediaQuery = window.matchMedia("(min-width: 768px)");
  
    function updateClasses(e) {
      if (!targetElement) return;
  
      if (e.matches) {
        // Largura >= 768px
        targetElement.classList.add("container-left");
      } else {
        // Largura < 768px
        targetElement.classList.remove("container-left");
        targetElement.classList.remove("container");
        targetElement.classList.remove("px-5");
      }
    }
  
    // Executa à carga
    updateClasses(mediaQuery);
  
    // E ao mudar de tamanho
    mediaQuery.addEventListener("change", updateClasses);
});




//================================================== EQUIPA FIM =================================================

document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;

    if (hash) {
        const target = document.querySelector(hash);
        if (!target) return;

        // Espera pequeno atraso para garantir que o layout carregou
        setTimeout(() => {
            const navbar = document.querySelector(".navbar");
            const navbarHeight = navbar ? navbar.offsetHeight : 70;

            const targetTop = target.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: targetTop - navbarHeight,
                behavior: "smooth"
            });
        }, 300); // tempo suficiente para a navbar existir e o layout estar pronto
    }
});


/* ****************************************** SCROLL ANIM ***************************************** */

//Ao adicionar o scroll anim não esquecer de adicionar o ID no body da página correspondente -- id="indexPage"


function scrollAnim(e) {
    console.log(`Clicou em ${e}`);
    const targetSelector = `#${e}`;
    const targetElement = document.querySelector(targetSelector);

    if (!targetElement) return;

    const rect = targetElement.getBoundingClientRect();
    const absoluteTop = rect.top + window.pageYOffset;

    const offset = window.innerWidth < 992 ? 50 : 0;

    window.scrollTo({
        top: absoluteTop - offset,
        behavior: 'smooth'
    });

    // Atualiza o hash da URL sem forçar scroll extra
    history.replaceState(null, '', `#${e}`);

    // Atualizar a navbar após o scroll suave (espera 1s como fallback)
    setTimeout(() => {
        updateNavbarShadow();
    }, 1000);
}

function addScrollHandler(buttonId, sectionId) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    button.addEventListener("click", (event) => {
      console.log("Clicou no botão para navegar para o topo");
        if (isIndexPage()) {
            // Estás na index — impede comportamento padrão e faz scroll
            event.preventDefault();
            scrollAnim(sectionId);
        } else {
            // Estás noutra página — deixa o link funcionar para navegar
            // nada a fazer aqui, deixar o comportamento normal do <a href> seguir
        }
    });
}

// Detecta se estás na index de forma fiável
function isIndexPage() {
    return document.body.id === "indexPage";
}

// Lista de botões
const scrollButtons = [
    { id: "upButton", section: "top" },
    { id: "btnAdministrativo", section: "dAdministrativo" },
    { id: "btnFiscal", section: "dFiscal" },
    { id: "btnComercial", section: "dComercial" },
    { id: "btnFamilia", section: "dFamilia" },
    { id: "btnSucessoes", section: "dSucessoes" },
    { id: "btnConsumidor", section: "dConsumidor" },
    { id: "btnCivil", section: "dCivil" },
    { id: "btnTrabalho", section: "dTrabalho" },
    { id: "btnPenal", section: "dPenal" },
    { id: "btnExecutivo", section: "dExecutivo" },
    { id: "btnImobiliario", section: "dImobiliario" },
    { id: "btnRodoviario", section: "dRodoviario" },
    { id: "btnRegistos", section: "dRegistos" }

];

// Aplica a todos os botões
scrollButtons.forEach(({ id, section }) => addScrollHandler(id, section));

function toggleFixedButtonVisibility() {
  const fixedButton = document.getElementById("fixed-button");
  if (!fixedButton) return;

  if (window.scrollY > 1) {
    fixedButton.classList.remove("disp-none");
  } else {
    fixedButton.classList.add("disp-none");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Aplica visibilidade correta ao carregar
  toggleFixedButtonVisibility();

  // Atualiza visibilidade em scroll
  window.addEventListener("scroll", toggleFixedButtonVisibility);
});

document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll("#stickyBtnGroup .sticky-btn");

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove 'red' de todos os botões
      btns.forEach(b => b.classList.remove("red"));

      // Adiciona 'red' ao botão clicado
      btn.classList.add("red");
    });
  });
});


/* ****************************************** SCROLL ANIM FIM ***************************************** */

document.addEventListener("DOMContentLoaded", function () {
    const d = new Date();
    let year = d.getFullYear();
    console.log("Estamos no ano " + year);
    document.getElementById("currentYear").innerHTML = year;
});


/* ************************************* higlight sticky buttns no scroll ************************************/

document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    "dAdministrativo",
    "dFiscal",
    "dComercial",
    "dFamilia",
    "dSucessoes",
    "dConsumidor",
    "dCivil",
    "dTrabalho",
    "dPenal",
    "dExecutivo",
    "dImobiliario",
    "dRodoviario",
    "dRegistos"
  ];

  const buttonMap = sections.reduce((map, id) => {
    const key = id.replace(/^d/, "btn"); // ex: dFiscal → btnFiscal
    const btn = document.getElementById(key);
    if (btn) map[id] = btn;
    return map;
  }, {});

  let currentActive = null;

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -60% 0px",
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        if (currentActive === id) return;

        currentActive = id;

        // Destaca botão
        Object.values(buttonMap).forEach(btn => btn.classList.remove("red"));
        if (buttonMap[id]) buttonMap[id].classList.add("red");

        // Atualiza hash no URL sem scroll adicional
        history.replaceState(null, "", `#${id}`);
      }
    });
  }, observerOptions);

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
});

/* ************************************* higlight sticky buttns no scroll FIM ********************************/