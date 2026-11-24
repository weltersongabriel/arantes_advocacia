/*
  Configuração central: preencha todos os campos entre colchetes antes da publicação.
  Os links também podem ser preenchidos diretamente no HTML se preferir.
*/
const SITE_CONFIG = {
  phone: "[NUMERO]",
  whatsapp: "[WHATSAPP_URL]",
  instagram: "[INSTAGRAM_URL]",
  robsonWhatsApp: "[WHATSAPP_ROBSON]",
  larissaWhatsApp: "[WHATSAPP_LARISSA]"
};

document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  window.setTimeout(() => preloader.classList.add("is-hidden"), 1500);
  window.setTimeout(() => preloader.remove(), 2200);

  const header = document.getElementById("header");
  const progress = document.getElementById("readingProgress");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const backToTop = document.getElementById("backToTop");

  function updateScrollUI() {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 30);
    backToTop.classList.toggle("visible", y > 700);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
  }
  window.addEventListener("scroll", updateScrollUI, {passive:true});
  updateScrollUI();

  menuToggle.addEventListener("click", () => {
    const open = menuToggle.classList.toggle("active");
    navMenu.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav__link")];
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, {rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(section => spy.observe(section));

  backToTop.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        window.setTimeout(() => entry.target.classList.add("is-visible"), Math.min(index * 60, 180));
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
  document.querySelectorAll(".brush-divider").forEach(el => {
    const brushObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        el.classList.add("is-visible");
        brushObserver.disconnect();
      }
    }, {threshold:.8});
    brushObserver.observe(el);
  });

  const serviceList = [
    {file:"servico-aposentadoria.jpg", title:"Aposentadoria", alt:"Advogado em ambiente profissional representando informações sobre aposentadoria"},
    {file:"servico-cancer.jpg", title:"Direitos em caso de câncer", alt:"Pessoa com laço rosa simbolizando direitos em caso de câncer"},
    {file:"servico-pensaoalimenticia.jpg", title:"Pensão alimentícia", alt:"Advogado em ambiente profissional representando questões de pensão alimentícia"},
    {file:"servico-salariomaternidade.jpg", title:"Salário-maternidade", alt:"Mãe com bebê representando informações sobre salário-maternidade"},
    {file:"servico-seguranca.jpg", title:"Segurança jurídica", alt:"Advogada representando orientação e segurança jurídica"},
    {file:"servico-servidorpublico.jpg", title:"Servidor público", alt:"Servidor público em ambiente de trabalho representando aposentadoria e direitos"},
    {file:"servico-trabalhounaroca.jpg", title:"Trabalhador rural", alt:"Trabalhador rural ao pôr do sol representando direitos previdenciários rurais"},
    {file:"servicos-carteiraassinada.jpg", title:"Carteira assinada", alt:"Advogada representando orientação sobre registro e vínculos de trabalho"}
  ];
  const slidesContainer = document.getElementById("servicesSlides");
  serviceList.forEach((service, index) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <img src="img/${service.file}" width="1080" height="1350" alt="${service.alt}" ${index === 0 ? "" : 'loading="lazy"'}>
      <div class="service-overlay"><h3>${service.title}</h3></div>`;
    slide.dataset.src = `img/${service.file}`;
    slide.dataset.alt = service.alt;
    slide.classList.add("lightbox-trigger");
    slidesContainer.appendChild(slide);
  });

  if (window.Swiper) {
    new Swiper(".services-swiper", {
      effect:"coverflow",
      grabCursor:true,
      centeredSlides:true,
      slidesPerView:"auto",
      loop:true,
      speed:800,
      autoplay:{delay:4000,disableOnInteraction:false,pauseOnMouseEnter:true},
      coverflowEffect:{rotate:8,stretch:-20,depth:140,modifier:1,slideShadows:false},
      pagination:{el:"."+ "swiper-pagination",clickable:true},
      navigation:{nextEl:"."+ "swiper-button-next",prevEl:"."+ "swiper-button-prev"}
    });
  }

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = lightbox.querySelector("img");
  let lightboxItems = [];
  let lightboxIndex = 0;
  function openLightbox(items, index) {
    lightboxItems = items;
    lightboxIndex = index;
    lightboxImage.src = items[index].src;
    lightboxImage.alt = items[index].alt;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
  }
  function moveLightbox(direction) {
    if (!lightboxItems.length) return;
    lightboxIndex = (lightboxIndex + direction + lightboxItems.length) % lightboxItems.length;
    lightboxImage.src = lightboxItems[lightboxIndex].src;
    lightboxImage.alt = lightboxItems[lightboxIndex].alt;
  }
  document.querySelectorAll(".gallery-photo").forEach((trigger, index, all) => {
    trigger.addEventListener("click", () => openLightbox([...all].map(el => ({src:el.dataset.src,alt:el.dataset.alt})), index));
  });
  document.querySelectorAll(".services-swiper .swiper-slide").forEach((trigger, index, all) => {
    trigger.addEventListener("click", () => openLightbox([...all].map(el => ({src:el.dataset.src,alt:el.dataset.alt})), index));
  });
  lightbox.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".lightbox__nav--prev").addEventListener("click", () => moveLightbox(-1));
  lightbox.querySelector(".lightbox__nav--next").addEventListener("click", () => moveLightbox(1));
  lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", event => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  });
  let touchStart = 0;
  lightbox.addEventListener("touchstart", event => { touchStart = event.changedTouches[0].clientX; }, {passive:true});
  lightbox.addEventListener("touchend", event => {
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 45) moveLightbox(distance > 0 ? -1 : 1);
  }, {passive:true});

  document.querySelector(".map-color-toggle").addEventListener("click", event => {
    const map = document.querySelector(".location__map iframe");
    map.classList.toggle("color-restored");
    event.currentTarget.textContent = map.classList.contains("color-restored") ? "Mapa escuro" : "Cor do mapa";
  });

  document.querySelectorAll(".ripple").forEach(button => {
    button.addEventListener("pointerdown", event => {
      const rect = button.getBoundingClientRect();
      const wave = document.createElement("span");
      const size = Math.max(rect.width,rect.height);
      wave.className = "ripple-wave";
      wave.style.width = wave.style.height = `${size}px`;
      wave.style.left = `${event.clientX - rect.left - size/2}px`;
      wave.style.top = `${event.clientY - rect.top - size/2}px`;
      button.appendChild(wave);
      window.setTimeout(() => wave.remove(), 600);
    });
  });
  document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').forEach(link => {
    link.addEventListener("click", () => {
      if (navigator.vibrate) navigator.vibrate(20);
    });
  });

  const tooltip = document.querySelector(".whatsapp-float__tooltip");
  window.setTimeout(() => tooltip.classList.add("visible"), 3500);
  window.setTimeout(() => tooltip.classList.remove("visible"), 8500);

  const canvas = document.getElementById("heroParticles");
  const ctx = canvas.getContext("2d");
  let particles = [];
  function sizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.clientWidth * ratio;
    canvas.height = canvas.clientHeight * ratio;
    ctx.setTransform(ratio,0,0,ratio,0,0);
  }
  function createParticles() {
    particles = Array.from({length: window.innerWidth < 768 ? 22 : 38}, () => ({
      x:Math.random()*canvas.clientWidth,y:Math.random()*canvas.clientHeight,
      r:Math.random()*1.2+.3,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12,a:Math.random()*0.28+.05
    }));
  }
  function drawParticles() {
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    particles.forEach(p => {
      p.x += p.vx;p.y += p.vy;
      if(p.x<0)p.x=canvas.clientWidth;if(p.x>canvas.clientWidth)p.x=0;
      if(p.y<0)p.y=canvas.clientHeight;if(p.y>canvas.clientHeight)p.y=0;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(217,217,217,${p.a})`;ctx.fill();
    });
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) requestAnimationFrame(drawParticles);
  }
  sizeCanvas();createParticles();drawParticles();
  window.addEventListener("resize", () => {sizeCanvas();createParticles();});

  if (window.matchMedia("(pointer:fine)").matches) {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    document.addEventListener("mousemove", event => {
      dot.style.left = `${event.clientX}px`;dot.style.top = `${event.clientY}px`;
      ring.animate({left:`${event.clientX}px`,top:`${event.clientY}px`},{duration:120,fill:"forwards"});
    });
    document.querySelectorAll("a,button").forEach(el => {
      el.addEventListener("mouseenter", () => ring.classList.add("hovered"));
      el.addEventListener("mouseleave", () => ring.classList.remove("hovered"));
    });
  }

  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    if (window.scrollY < window.innerHeight) {
      hero.style.setProperty("--scroll", `${window.scrollY * .12}px`);
      document.querySelector(".hero__watermark").style.transform = `translateY(${window.scrollY * .08}px)`;
    }
  }, {passive:true});

  /*
    A função abaixo deve ser chamada após preencher os links reais.
    Mantém o link com mailto/tel coerente fora do SITE_CONFIG.
  */
  const phoneDigits = SITE_CONFIG.phone.replace(/\D/g,"");
  if (!SITE_CONFIG.phone.startsWith("[")) {
    document.querySelectorAll('a[href="tel:[NUMERO]"]').forEach(link => link.href = `tel:${phoneDigits}`);
  }
});
