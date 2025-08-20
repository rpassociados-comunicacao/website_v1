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



/* ********************************************* FETCH DETALHES ARTIGO ****************************************** */

/*

// js/destaques-detalhe.js

// Obter o ID da query string (?id=ivg)
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id) {
  fetch("/assets/json-files/articles.json")  // https://www.rpaadvogados.com/assets/json-files/articles.json
    .then(response => response.json())
    .then(data => {
      const artigo = data[id];

      if (!artigo) {
        document.body.innerHTML = "<p>Artigo não encontrado.</p>";
        return;
      }

      document.getElementById("titulo").textContent = artigo.titulo;
      document.getElementById("data").textContent = artigo.data;
      document.getElementById("fonte").textContent = artigo.fonte;
      document.getElementById("fonteURL").href = artigo.fonteURL;
      document.getElementById("imagem").src = artigo.imagem;
      document.getElementById("imageSource").textContent = artigo.imageSource;
      document.getElementById("writerImg").src = artigo.writerImg;
      document.getElementById("writerName").textContent = artigo.writerName;
      document.getElementById("writerLink").href = artigo.writerLink;
      document.getElementById("texto").innerHTML = artigo.texto;
    })
    .catch(() => {
      document.body.innerHTML = "<p>Erro ao carregar o artigo.</p>";
    });
} else {
  document.body.innerHTML = "<p>Artigo não especificado.</p>";
}

*/



document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const loader = document.getElementById("mainLoader");
  const container = document.getElementById("articleContent");

  function hideLoader() {
    if (loader) loader.style.display = "none";
  }

  if (!id) {
    hideLoader();
    container.innerHTML = "<p>Artigo não especificado.</p>";
    return;
  }

  // Função para transformar texto com quebras de linha em <p>
  function formatText(text) {
    if (!text) return "";
    // Divide o texto por linhas em branco (\n\n ou \r\n\r\n)
    const paragraphs = text.split(/\r?\n\s*\r?\n/).map(p => p.trim()).filter(p => p);
    // Envolve cada parágrafo em <p> e junta tudo
    return paragraphs.map(p => `<p>${p}</p>`).join("");
  }

  fetch("https://sheetdb.io/api/v1/f1yqo8yye7aw3")
    .then(response => response.json())
    .then(data => {
      const artigo = data[id];

      hideLoader();

      if (!artigo) {
        container.innerHTML = "<p>Artigo não encontrado.</p>";
        return;
      }

      // Aplica a formatação automática ao texto
      const textoFormatado = formatText(artigo.texto);

      container.innerHTML = `
        <div class="col">
          <div class="text-center">
            <img src="${artigo.imagem}" class="news-img img-fluid w-100" alt="${artigo.titulo}">
            ${artigo.imageSource ? `
              <p class="text-muted mb-4 mb-lg-5 mt-1 mt-lg-2">
                <small class="general-font">${artigo.imageSource}</small>
              </p>` : ''
            }
          </div>

          <h1 class="general-font mb-3 mb-lg-5">${artigo.titulo}</h1>

          <div class="writer-id d-flex align-items-center mb-3 mb-lg-5">
            <a href="${artigo.writerLink}" class="text-center text-decoration-none d-flex align-items-center">
              <img src="${artigo.writerImg}" class="rounded-circle me-2 mb-lg-2" alt="${artigo.writerName}" style="width: 133px; height: 133px;">
              <p class="general-txt mb-0 ms-3" style="color: #000000">${artigo.writerName}</p>
            </a>
          </div>

          <div class="general-font lead">${textoFormatado}</div>

          <p class="text-muted mb-4 mb-lg-5">
            <small><span class="general-font">${artigo.data}</span> | 
              <a href="${artigo.fonteURL}" target="_blank" rel="noopener noreferrer" class="general-font">${artigo.fonte}</a>
            </small>
          </p>
        </div>
      `;
    })
    .catch(() => {
      hideLoader();
      container.innerHTML = "<p>Erro ao carregar o artigo.</p>";
    });
});




/* ********************************************* FETCH DETALHES ARTIGO FIM **************************************** */


// Captura os parâmetros da URL atual
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Se houver um ID, adicione-o ao link de troca de idioma
if (id) {
  const langToggle = document.getElementById("langToggle");
  langToggle.href = `/destaques/detalhe/?id=${id}`;
}