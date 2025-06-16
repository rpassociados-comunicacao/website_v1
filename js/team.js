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







//================================================== EQUIPA FIM =================================================