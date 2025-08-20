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
function handleStickyBlock(wrapper, content, scrollCol) {
    const stickyHeight = content.offsetHeight;
    const offsetTop = wrapper.offsetTop;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const end = offsetTop + scrollCol.offsetHeight - stickyHeight - 100;
    const start = offsetTop - 100;

    if (scrollTop > start && scrollTop < end) {
    content.classList.add("fixed");
    content.classList.remove("bottom");
    } else if (scrollTop >= end) {
    content.classList.remove("fixed");
    content.classList.add("bottom");
    } else {
    content.classList.remove("fixed", "bottom");
    }
}

const wrappers = document.querySelectorAll(".sticky-wrapper");

function onScroll() {
    wrappers.forEach(wrapper => {
    const content = wrapper.querySelector(".sticky-content");
    const scrollCol = wrapper.querySelector(".scrolling-column");
    handleStickyBlock(wrapper, content, scrollCol);
    });
}

window.addEventListener("scroll", onScroll);
window.addEventListener("resize", onScroll);
onScroll(); // Executa na carga inicial
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
    const targetElement = document.getElementById("termos");
    const targetElementPriv = document.getElementById("privacidade");
    const targetElementRal = document.getElementById("ral");
    const mediaQuery = window.matchMedia("(min-width: 768px)");
  
    function updateClasses(e) {
      if (!targetElement) return;
  
      if (e.matches) {
        // Largura >= 768px
        targetElement.classList.add("container");
        targetElementPriv.classList.add("container");
        targetElementRal.classList.add("container");
      } else {
        // Largura < 768px
        targetElement.classList.remove("container");
        targetElement.classList.remove("px-5");
        targetElementPriv.classList.remove("container");
        targetElementPriv.classList.remove("px-5");
        targetElementRal.classList.remove("container");
        targetElementRal.classList.remove("px-5");
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
    { id: "upButton", section: "indexPage" }
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

/* ****************************************** SCROLL ANIM FIM ***************************************** */

document.addEventListener("DOMContentLoaded", function () {
    const d = new Date();
    let year = d.getFullYear();
    console.log("Estamos no ano " + year);
    document.getElementById("currentYear").innerHTML = year;
});


/* ******************************************* gerar dinâmicamente cards das notícias ********************************** */

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("mainLoader");
  const container = document.getElementById("newsCards");

  const sections = [
    "geral", // especial, para o botão 'btnGeral'
    "administrativo",
    "fiscal",
    "comercial",
    "familia",
    "sucessoes",
    "consumidor",
    "civil",
    "trabalho",
    "penal",
    "executivo",
    "imobiliario",
    "rodoviario",
    "registos"
  ];

  const buttons = {};
  sections.forEach(area => {
    const btn = document.getElementById("btn" + capitalize(area));
    if (btn) {
      buttons[area] = btn;
      btn.addEventListener("click", () => {
        handleFilter(area);
        console.log(area);
      });
    }
  });

  let allArticles = {};

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function hideLoader() {
    if (loader) loader.style.display = "none";
  }

  function showLoader() {
    if (loader) loader.style.display = "flex";
  }

  function renderArticles(filteredArticles) {
    container.innerHTML = "";

    if (Object.keys(filteredArticles).length === 0) {
      container.innerHTML = `<div class="no-articles-message d-flex text-center" style="height: 100vh;">
                                <div class="text-muted">
                                  <i class="bi bi-folder-x fs-1 mb-3"></i>
                                  <p class="general-txt mb-0 fs-5">Sem artigos disponíveis para esta área.</p>
                                  <p class="general-font small">Por favor, tente outra categoria.</p>
                                </div>
                              </div>
                            `;

      return;
    }

    Object.entries(filteredArticles).forEach(([id, artigo]) => {
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="card shadow-sm news-card h-100">
          <a href="/destaques/detalhe/?id=${id}" target="_blank">
            <img src="${artigo.thumbnail}" class="card-img-top news-card-img" alt="${artigo.titulo}">
          </a>
          <div class="card-body d-flex flex-column justify-content-between">
            <div class="mb-2">
              <small class="text-body-secondary">
                por <b><a class="newspaper-link" href="${artigo.writerLink}">${artigo.writerName}</a></b>
              </small>
            </div>
            <small class="text-body-secondary">${artigo.data}</small>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function handleFilter(area) {
    const normalizedArea = area.toLowerCase().trim();

    // Atualiza classe dos botões
    Object.values(buttons).forEach(btn => btn.classList.remove("red"));
    if (buttons[normalizedArea]) buttons[normalizedArea].classList.add("red");

    if (normalizedArea === "geral") {
      renderArticles(allArticles);
      return;
    }

    const filtered = Object.fromEntries(
      Object.entries(allArticles).filter(([_, artigo]) => {
        const areas = Array.isArray(artigo.area) ? artigo.area : [artigo.area];
        return areas.some(a => a.toLowerCase().trim() === normalizedArea);
      })
    );

    renderArticles(filtered);
  }


  fetch("https://www.rpaadvogados.com/assets/json-files/articles.json") //https://www.rpaadvogados.com/assets/json-files/articles.json
    .then(response => response.json())
    .then(data => {
      allArticles = data;
      renderArticles(allArticles); // mostra todos por defeito
      hideLoader();
    })
    .catch(error => {
      console.error("Erro ao carregar artigos:", error);
      container.innerHTML = `<p>Erro ao carregar os destaques.</p>`;
      hideLoader();
    });
    
   // Carregar os artigos diretamente do JSON gerado pelos .md
// Fetch dos artigos

/*
fetch("{{ site.baseurl }}/assets/json-files/artigos.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Não foi possível carregar os artigos.");
    }
    return response.json();
  })
  .then(data => {
    // Converter array em objeto indexado pelo slug
    const articlesObj = {};
    data.forEach(artigo => {
      // Ignorar artigo de exemplo caso exista
      if (artigo.slug === "exemplo") return;
      articlesObj[artigo.slug] = artigo;
    });

    // Guardar globalmente
    allArticles = articlesObj;

    // Renderizar todos os artigos por defeito
    renderArticles(allArticles);

    // Esconde o loader depois de carregar
    hideLoader();
  })
  .catch(error => {
    console.error("Erro ao carregar artigos:", error);
    container.innerHTML = `<p>Erro ao carregar os destaques.</p>`;
    hideLoader();
  });
*/



});





/* ******************************************* gerar dinâmicamente cards das notícias FIM ********************************** */

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