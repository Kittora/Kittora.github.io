/* Kittora — sitio web oficial (compartido por todas las páginas) */
const LIQUIDCAT_VERSION = "0.4.4";
const MEOWGNIFY_VERSION = "1.0.0";
// Cambia estas URLs si los repositorios de releases cambian.
const LIQUIDCAT_DOWNLOAD = "https://github.com/Kittora/LiquidCat/releases/latest";
const MEOWGNIFY_DOWNLOAD = "https://github.com/Kittora";
const KITTORA_GH = "https://github.com/Kittora";
const KITTORA_WEB = "https://kittora.dev";

/* ---------------- Traducciones al español ----------------
   El HTML está en inglés (idioma base). Aquí solo van las cadenas en
   español; al cambiar a EN se restaura el texto original cacheado. */
const I18N_ES = {
  // Navegación / pie / botones / aviso (compartidos)
  "nav.home":"Inicio", "nav.liquidcat":"LiquidCat", "nav.meowgnify":"Meowgnify",
  "nav.credits":"Créditos",
  "foot.tagline":"Construimos herramientas de escritorio útiles y gratuitas. De código abierto.",
  "foot.note":"© 2026 Kittora — xjuanfxx & notTao. Todos los productos son open source.",
  "notice.legal":"Este software no está afiliado ni respaldado por los proyectos que integra. Cada producto utiliza sus herramientas como dependencias según sus respectivas licencias.",
  "btn.seeall":"Ver todo →", "btn.visit":"Visitar", "btn.github":"GitHub",

  // Home
  "home.eyebrow":"KITTORA · ESTUDIO DE SOFTWARE",
  "home.tagline":"Construimos herramientas de escritorio <span class=\"hl\">útiles y hermosas</span>.",
  "home.lede":"Somos un pequeño estudio que crea aplicaciones de escritorio gratis y de código abierto. Hoy presentamos dos productos: LiquidCat y Meowgnify.",
  "home.products_h":"Nuestros <span class=\"hl\">productos</span>",
  "home.products_sub":"Dos apps, una misma filosofía: poderosas por dentro, simples por fuera.",
  "home.lc_h":"LiquidCat",
  "home.lc_p":"Descarga, convierte y reencodea video y audio en una app nativa escrita en Rust. Impulsado por yt-dlp y FFmpeg, con aceleración por GPU, cola, 14 temas y 6 idiomas. Windows, Linux y macOS.",
  "home.lc_tags":"Descarga · Conversión · GPU · 14 temas",
  "home.mw_h":"Meowgnify",
  "home.mw_p":"Reescala videos e imágenes con IA y shaders por GPU. Real-ESRGAN, Real-CUGAN, Waifu2x, Anime4K y Upscayl con comparación antes/después.",
  "home.mw_tags":"Upscaler · IA · GPU · Imágenes y video",
  "home.team_h":"Nuestro <span class=\"hl\">equipo</span>",
  "home.team_sub":"Dos amigos construyendo software que la gente usa a diario.",
  "home.cta_h":"¿Quieres probar algo?",
  "home.cta_p":"Descarga LiquidCat o Meowgnify y dale un vistazo a lo que construimos.",

  // Team
  "team.xjuan_role":"Fundador y desarrollador principal",
  "team.xjuan_p":"Creador de LiquidCat y Meowgnify. Idea, arquitectura y desarrollo de los productos.",
  "team.notao_role":"Desarrollador · optimización · temas",
  "team.notao_p":"Optimización del código, corrección de errores, temas y soporte de los motores de reescalado.",

  // LiquidCat page
  "lc.eyebrow":"PRODUCTO · LIQUIDCAT",
  "lc.h":"Descarga y convierte <span class=\"hl\">medios</span> en una app",
  "lc.sub":"De un enlace de YouTube a un MP4 o MP3 terminado: LiquidCat gestiona la descarga, la conversión y el reencode en un solo lugar.",
  "lc.c1":"<h3>Descarga lo que sea</h3><p>Baja video o audio de YouTube y cientos de sitios. Pega muchos enlaces a la vez o cárgalos desde un .txt.</p>",
  "lc.c2":"<h3>Convierte y reencodea</h3><p>Pasa video a MP3, M4A, FLAC, WAV, AAC, Opus u Ogg, reencodea archivos locales y recorta un fragmento.</p>",
  "lc.c3":"<h3>Acelerado por GPU</h3><p>Codificación por hardware con NVENC, AMF, Intel Quick Sync, VAAPI o VideoToolbox, detectada automáticamente.</p>",
  "lc.c4":"<h3>Cola, historial y presets</h3><p>Encola trabajos, síguelos en la tarjeta flotante de Actividad y empieza con ocho presets incluidos.</p>",
  "lc.c5":"<h3>14 temas, 6 idiomas</h3><p>Catppuccin, Tokyo Night, Nord, Gruvbox, Neo Brutalist y más, cada uno con su propio gato. EN, ES, PT, FR, DE, IT.</p>",
  "lc.c6":"<h3>Nativo y ligero</h3><p>Reescrito en Rust con Slint y renderizado por GPU. ~60 MB en reposo, sin WebView, y yt-dlp / FFmpeg se mantienen actualizados solos.</p>",
  "lc.dl_h":"Obtén <span class=\"hl\">LiquidCat</span>",
  "lc.dl_p":"Gratis y de código abierto. Windows 10 / 11 (64 bits), con builds experimentales para Linux y macOS. No necesita Python.",
  "lc.dl_btn":"Descargar LiquidCat",
  "lc.dl_source":"¿Prefieres el código? Encuéntralo en el GitHub de los creadores.",
  "lc.tech_h":"Construido sobre gran <span class=\"hl\">open source</span>",
  "lc.tech_sub":"LiquidCat está construido con estos proyectos y los usa según sus respectivas licencias.",
  "lc.shots_h":"Echa un <span class=\"hl\">vistazo</span>",
  "lc.shots_sub":"LiquidCat 0.4 con el tema predeterminado Catppuccin Mocha; haz clic en cualquier captura para ampliarla.",
  "lc.shot1":"Descargador", "lc.shot2":"Archivos locales", "lc.shot3":"Cola y actividad", "lc.shot4":"Ajustes",
  "lc.themes_h":"Catorce <span class=\"hl\">temas</span>, catorce gatos",
  "lc.themes_sub":"Cada tema trae su propio icono de gato. Elige uno en Ajustes y toda la app lo sigue.",
  "lc.feat_h":"Todo lo que necesitas para <span class=\"hl\">bajar y convertir</span> medios",
  "lc.feat_sub":"De un enlace de YouTube a un MP4 o MP3 terminado: LiquidCat gestiona la descarga, la conversión y el reencode en un solo lugar.",

  // Meowgnify page
  "mw.eyebrow":"PRODUCTO · MEOWGNIFY",
  "mw.h":"Reescala video e imágenes con <span class=\"hl\">IA</span>",
  "mw.sub":"Arrastra tu archivo, elige la escala y deja que la IA haga el resto. Con comparación antes/después en vista Slider o Lens.",
  "mw.c1":"<h3>Videos</h3><p>Real-ESRGAN, Real-CUGAN y Waifu2x para contenido general, procesado por fotogramas.</p>",
  "mw.c2":"<h3>Anime</h3><p>Anime4K y modelos especializados en anime, con vista previa Antes/Después.</p>",
  "mw.c3":"<h3>Imágenes</h3><p>Upscayl y Clarity para reescalar fotos y arte digital hasta 16×.</p>",
  "mw.c4":"<h3>Comparación</h3><p>Vista Slider o Lens con zoom ajustable para comparar el original con el resultado.</p>",
  "mw.c5":"<h3>GPU por defecto</h3><p>Shaders y redes neuronales por Vulkan (ncnn-vulkan y libplacebo).</p>",
  "mw.c6":"<h3>Todo en uno</h3><p>Los motores se descargan bajo demanda; no hace falta instalar nada aparte.</p>",
  "mw.dl_h":"Obtén <span class=\"hl\">Meowgnify</span>",
  "mw.dl_p":"Portable, gratis y de código abierto. Windows 10 / 11 (64 bits).",
  "mw.dl_btn":"Descargar Meowgnify",
  "mw.dl_source":"¿Prefieres el código? Encuéntralo en el GitHub de Kittora.",
  "mw.tech_h":"Construido sobre gran <span class=\"hl\">open source</span>",
  "mw.tech_sub":"Meowgnify integra y distribuye estos proyectos según sus respectivas licencias.",

  // Credits
  "cr.eyebrow":"Créditos", "cr.h":"Créditos y <span class=\"hl\">agradecimientos</span>",
  "cr.sub":"Las personas y los proyectos detrás de Kittora.",
  "cr.org_h":"La <span class=\"hl\">organización</span>",
  "cr.org_p":"Kittora es nuestro pequeño estudio de software. Puedes seguirnos y ver nuestros repositorios en GitHub.",
  "cr.org_gh":"github.com/Kittora", "cr.org_web":"kittora.dev",
  "cr.people_h":"El <span class=\"hl\">equipo</span>",
  "cr.lic":"Licencia:",
  "cr.thanks":"¡Gracias por apoyar a Kittora! 💜",
  "cr.ytdlp_p":"Descargador de medios de YouTube y cientos de sitios más.",
  "cr.pywebview_p":"Ventana/base web nativa para la interfaz.",
  "cr.catppuccin_p":"Esquema de colores usado en la interfaz.",
  "cr.slint_p":"Toolkit de interfaz nativa con el que está hecho LiquidCat.",
  "cr.ffmpeg_p":"Conversión, reencode y recorte de medios. LiquidCat lo descarga desde sus fuentes oficiales."
};

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    if (el.dataset.en === undefined) el.dataset.en = el.textContent;
    const es = I18N_ES[el.dataset.i18n];
    el.textContent = (lang === "es" && es) ? es : el.dataset.en;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    if (el.dataset.enHtml === undefined) el.dataset.enHtml = el.innerHTML;
    const es = I18N_ES[el.dataset.i18nHtml];
    el.innerHTML = (lang === "es" && es) ? es : el.dataset.enHtml;
  });
  const b = document.body;
  if (lang === "es" && b.dataset.titleEs) { if (!b.dataset.titleEn) b.dataset.titleEn = document.title; document.title = b.dataset.titleEs; }
  else if (b.dataset.titleEn) { document.title = b.dataset.titleEn; }
  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = lang === "es" ? "EN" : "ES";
  localStorage.setItem("kittora_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }

  // Versiones y enlaces de descarga
  document.querySelectorAll("[data-version]").forEach(el => { el.textContent = el.dataset.product === "meowgnify" ? MEOWGNIFY_VERSION : LIQUIDCAT_VERSION; });
  document.querySelectorAll("[data-download-liquidcat]").forEach(el => {
    el.setAttribute("href", LIQUIDCAT_DOWNLOAD); el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener");
  });
  document.querySelectorAll("[data-download-meowgnify]").forEach(el => {
    el.setAttribute("href", MEOWGNIFY_DOWNLOAD); el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener");
  });

  // Idioma (persistente)
  const saved = localStorage.getItem("kittora_lang") || "en";
  applyLang(saved);
  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.addEventListener("click", () => {
    const next = (localStorage.getItem("kittora_lang") || "en") === "es" ? "en" : "es";
    applyLang(next);
  });

  // Aparición al hacer scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // Lightbox para capturas
  const box = document.getElementById("lightbox");
  if (box) {
    const boxImg = box.querySelector("img");
    document.querySelectorAll("[data-zoom]").forEach(img => {
      img.addEventListener("click", () => {
        boxImg.src = img.getAttribute("src");
        boxImg.alt = img.getAttribute("alt") || "";
        box.classList.add("open");
      });
    });
    box.addEventListener("click", () => box.classList.remove("open"));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") box.classList.remove("open"); });
  }
});
