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
    const targetElement = document.getElementById("SectionManifesto");
    const mediaQuery = window.matchMedia("(min-width: 768px)");
  
    function updateClasses(e) {
      if (!targetElement) return;
  
      if (e.matches) {
        // Largura >= 768px
        
      } else {
        // Largura < 768px
        
        targetElement.classList.remove("px-5");
      }
    }
  
    // Executa à carga
    updateClasses(mediaQuery);
  
    // E ao mudar de tamanho
    mediaQuery.addEventListener("change", updateClasses);
});



//================================================== TEXT EFFECT =====================================================


document.addEventListener("DOMContentLoaded", () => {
  const blocks = Array.from(document.querySelectorAll(".line-reveal"));
  const blockQueue = [];

  blocks.forEach((block, i) => {
    // Split em linhas
    new SplitType(block, { types: 'lines' });

    // Guarda referência ao bloco e respetivas linhas
    blockQueue.push({
      el: block,
      lines: Array.from(block.querySelectorAll(".line")),
      hasAnimated: false
    });
  });

  let isAnimating = false;

  function animateBlock(blockData, onComplete) {
    const { lines } = blockData;
    isAnimating = true;

    lines.forEach((line, i) => {
      setTimeout(() => {
        line.style.transform = "translateY(0)";
        line.style.opacity = "1";

        // Última linha termina animação
        if (i === lines.length - 1) {
          setTimeout(() => {
            isAnimating = false;
            if (typeof onComplete === "function") onComplete();
          }, 600); // espera a última linha terminar
        }
      }, i * 150); // delay entre linhas
    });
  }

  function handleScroll() {
    if (isAnimating) return;

    const nextBlock = blockQueue.find(b => !b.hasAnimated && isInViewport(b.el));

    if (nextBlock) {
      nextBlock.hasAnimated = true;
      animateBlock(nextBlock, () => {
        requestAnimationFrame(handleScroll); // tenta animar o seguinte
      });
    }
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < vh && rect.bottom > 0; // está visível (mesmo que parcialmente)
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll(); // run on load
});


document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.querySelector(".grid-container");
  const bossImg1 = document.querySelector(".boss-img-1");
  const bossImg2 = document.querySelector(".boss-img-2");

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function handleScroll() {
    if (!isInViewport(gridContainer)) return;

    const isSmallScreen = window.innerWidth < 768; // ou < 992 para md

    if (isSmallScreen) {
      // Em ecrãs pequenos, adiciona atraso antes de mostrar boss-img-1
      setTimeout(() => {
        bossImg1.classList.add("visible");

        // Depois ainda mais atraso para a boss-img-2
        setTimeout(() => {
          bossImg2.classList.add("visible");
        }, 600);
      }, 3500); // pequeno atraso inicial para boss-img-1
    } else {
      // Em ecrãs grandes: sem atraso para boss-img-1, e depois para boss-img-2
      
      bossImg1.classList.add("visible");
      setTimeout(() => {
        bossImg2.classList.add("visible");
      }, 600);
      
    }

    window.removeEventListener("scroll", handleScroll);
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});


document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function handleScroll() {
    revealElements.forEach((el) => {
      if (isInViewport(el) && !el.classList.contains("visible")) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll(); // Executa logo ao carregar a página
});





//================================================== TEXT EFFECT FIM =================================================


//================================================== ANIMATION FIM =================================================

const delay = window.innerWidth <= 768 ? 3000 : 0;

setTimeout(() => {
  const containerZero = document.getElementById('lottie-animation-zero');
  //const containerOne = document.getElementById('lottie-animation-one');
  const containerTwo = document.getElementById('lottie-animation-two');
  

  const anim0 = lottie.loadAnimation({
    container: containerZero,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: './assets/json-files/mulher.json'
  });

  /*const anim1 = lottie.loadAnimation({
    container: containerOne,
    renderer: 'svg',
    loop: false, // vamos controlar o loop manualmente
    autoplay: true,
    path: './assets/json-files/mulher-2.json'
  });*/
  
  const anim2 = lottie.loadAnimation({
    container: containerTwo,
    renderer: 'svg',
    loop: false, // vamos controlar o loop manualmente
    autoplay: true,
    path: './assets/json-files/tempo.json'
  });

  

  // Função para boomerang loop
  function setupBoomerang(anim) {
    let isForward = true;

    anim.addEventListener('complete', () => {
      const totalFrames = anim.totalFrames;
      if (isForward) {
        anim.playSegments([totalFrames, 0], true); // volta atrás
      } else {
        anim.playSegments([0, totalFrames], true); // vai para frente
      }
      isForward = !isForward;
    });
  }

  // Aplica o boomerang
  setupBoomerang(anim0);
  //setupBoomerang(anim1);
  setupBoomerang(anim2);

  // Ativa o fade-in
  containerZero.classList.add("show");
  //containerOne.classList.add("show");
  containerTwo.classList.add("show");
}, delay);





//================================================== ANIMATION FIM =================================================



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

//Ao adicionar o scroll anim não esquecer de adicionar o ID no body da página correspondente --id="indexPage"


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
    { id: "upButton", section: "top" }
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