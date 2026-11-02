/* Kittora — sitio web oficial (compartido por todas las páginas) */

// Version de respaldo: la pagina pide la ultima release a GitHub al cargar
// (ver loadLatestRelease) y solo usa esta si la API no responde.
const LIQUIDCAT_VERSION = "0.4.6";
const LIQUIDCAT_REPO = "Kittora/LiquidCat";
const RELEASES = `https://github.com/${LIQUIDCAT_REPO}/releases`;

/* ---------------- Traducciones al español ----------------
   El HTML está en inglés (idioma base). Aquí solo van las cadenas en
   español; al cambiar a EN se restaura el texto original cacheado. */
const I18N_ES = {
  // Navegación / pie / botones / aviso (compartidos)
  "nav.home":"Inicio", "nav.liquidcat":"LiquidCat", "nav.meowgnify":"Meowgnify",
  "nav.credits":"Créditos",
  "foot.tagline":"Herramientas de escritorio gratuitas y de código abierto para creadores, hechas con cariño.",
  "foot.products":"Productos", "foot.resources":"Recursos",
  "foot.releases":"Versiones", "foot.bug":"Reportar un error",
  "foot.note":"© 2026 Kittora. Todos los productos son de código abierto.",
  "foot.legal":"Sin afiliación con los proyectos que integramos.",
  "notice.legal":"Kittora no está afiliado ni respaldado por los proyectos que integra. Cada producto los usa como dependencias según sus respectivas licencias.",
  "btn.learn":"Saber más", "btn.source":"Ver código", "btn.github_follow":"Seguir en GitHub",
  "status.available":"Disponible", "status.dev":"En desarrollo",
  "status.stable":"Estable", "status.experimental":"Experimental",
  "badge.oss":"Código abierto", "badge.free":"Gratis, sin anuncios", "badge.notelemetry":"Sin telemetría",
  "tag.download":"Descarga", "tag.convert":"Conversión", "tag.gpu":"Codificación por GPU",
  "tag.upscale":"Reescalado con IA", "tag.vulkan":"GPU con Vulkan", "tag.media":"Imágenes y video",

  // Home
  "home.h1":"Software de escritorio útil y bonito.",
  "home.lede":"Kittora es un pequeño estudio independiente que crea apps gratuitas y de código abierto para creadores. Nativas, ligeras y sin telemetría, cuidando cada detalle.",
  "home.cta_products":"Ver nuestras apps",
  "home.products_eyebrow":"Productos",
  "home.products_h":"Dos apps, <span class=\"hl\">una filosofía</span>",
  "home.products_sub":"Potentes por dentro, sencillas por fuera.",
  "home.lc_p":"Descarga, convierte y reencodea video y audio en una app nativa escrita en Rust. Con yt-dlp y FFmpeg, aceleración por GPU, cola de trabajos, 15 temas y 6 idiomas.",
  "home.mw_p":"Reescala video e imágenes con IA y shaders por GPU: Real-ESRGAN, Real-CUGAN, Waifu2x, Anime4K y Upscayl, con comparación antes/después.",
  "home.values_eyebrow":"Cómo trabajamos",
  "home.values_h":"Herramientas pequeñas, <span class=\"hl\">hechas con cariño</span>",
  "home.v1":"<h3>Código abierto</h3><p>Todo el código es público. Léelo, compílalo tú mismo o ayúdanos a mejorarlo.</p>",
  "home.v2":"<h3>Privado por defecto</h3><p>Sin cuentas, sin anuncios y sin telemetría. Tus archivos nunca salen de tu equipo.</p>",
  "home.v3":"<h3>Nativo y rápido</h3><p>Escrito en Rust, dibujado por la GPU y ligero en memoria. Sin WebView ni Electron.</p>",
  "home.v4":"<h3>Pensado para disfrutarse</h3><p>Interfaces cuidadas, temas para todos los gustos y un gato en cada rincón.</p>",
  "home.team_eyebrow":"Equipo",
  "home.team_h":"Las personas <span class=\"hl\">detrás de Kittora</span>",
  "home.team_sub":"Dos amigos construyendo software que la gente usa a diario.",
  "home.cta_h":"Prueba LiquidCat",
  "home.cta_p":"Gratis para Windows, Linux y macOS. Sin instalador, sin cuenta y sin Python.",

  // Team
  "team.xjuan_role":"Fundador y desarrollador principal",
  "team.xjuan_p":"Creador de LiquidCat y Meowgnify. Idea, arquitectura y desarrollo de los productos.",
  "team.notao_role":"Desarrollador · optimización · temas",
  "team.notao_p":"Optimización del código, corrección de errores, temas y soporte de los motores de reescalado.",

  // LiquidCat page
  "lc.h":"Descarga, convierte y reencodea medios en una app nativa.",
  "lc.sub":"De un enlace a un MP4 o MP3 terminado: LiquidCat se encarga de la descarga, la conversión y el reencode en un solo lugar, con yt-dlp y FFmpeg.",
  "lc.meta":"Versión", "lc.meta_all":"Todas las plataformas",
  "lc.dl_btn":"Descargar LiquidCat",
  "lc.dl_win":"Descargar para Windows", "lc.dl_linux":"Descargar para Linux", "lc.dl_mac":"Descargar para macOS",
  "lc.feat_eyebrow":"Funciones",
  "lc.feat_h":"Todo lo que necesitas para <span class=\"hl\">bajar y convertir</span> medios",
  "lc.c1":"<h3>Descarga lo que sea</h3><p>Video o audio de YouTube y cientos de sitios más. Pega muchos enlaces a la vez o cárgalos desde un .txt.</p>",
  "lc.c2":"<h3>Convierte y recorta</h3><p>MP3, M4A, FLAC, WAV, AAC, Opus u Ogg. Reencodea archivos locales y recorta un fragmento exacto.</p>",
  "lc.c3":"<h3>Acelerado por GPU</h3><p>NVENC, AMF, Intel Quick Sync, VAAPI o VideoToolbox, detectados automáticamente, con CPU como respaldo.</p>",
  "lc.c4":"<h3>Cola, historial y presets</h3><p>Encola trabajos, síguelos en la tarjeta flotante de Actividad y empieza con ocho presets incluidos.</p>",
  "lc.c5":"<h3>15 temas, 6 idiomas</h3><p>Catppuccin, Material 3, Fluent, Tokyo Night, Nord y más, cada uno con su gato. Sigue el color de acento del sistema.</p>",
  "lc.c6":"<h3>Nativo y se actualiza solo</h3><p>Rust + Slint con renderizado por GPU, unos 60 MB en reposo. yt-dlp y FFmpeg se instalan y actualizan solos.</p>",
  "lc.shots_eyebrow":"Capturas",
  "lc.shots_h":"Echa un <span class=\"hl\">vistazo</span>",
  "lc.shots_sub":"Catppuccin Mocha, el tema predeterminado. Haz clic en una captura para ampliarla.",
  "lc.shot1":"Descargador", "lc.shot2":"Archivos locales", "lc.shot3":"Cola y actividad", "lc.shot4":"Ajustes",
  "lc.themes_h":"Quince <span class=\"hl\">temas</span>, quince gatos",
  "lc.themes_sub":"Cada tema trae su propio gato. Material y Fluent lo tiñen con tu color de acento.",
  "lc.dl_eyebrow":"Descarga",
  "lc.dl_h":"Obtén <span class=\"hl\">LiquidCat</span> <span data-version></span>",
  "lc.dl_p":"Gratis y de código abierto. Sin instalador, sin cuenta y sin Python: yt-dlp se descarga y actualiza solo.",
  "lc.note_win":"Un único .exe portable. FFmpeg se configura en el primer arranque.",
  "lc.note_linux":"Descomprime y ejecuta <code>./LiquidCat</code>. Instala FFmpeg con tu gestor de paquetes.",
  "lc.note_mac":"No está notarizada: la primera vez haz clic derecho sobre la app y elige <b>Abrir</b>. Instala FFmpeg con <code>brew install ffmpeg</code>.",
  "lc.legal":"LiquidCat está pensado para contenido propio o que tengas permiso para descargar. Eres responsable de respetar los derechos de autor y los términos de cada plataforma.",
  "lc.new_eyebrow":"Novedades",
  "lc.new_h":"Nuevo en <span class=\"hl\">0.4.6</span>",
  "lc.new_list":"<li><span><b>Tema Material 3</b> generado a partir de tu color de acento con el algoritmo de color de Google, con botones en píldora y colores tonales.</span></li><li><span><b>Color de acento del sistema</b> para Material (en todos los sistemas) y Fluent (Windows), en vivo.</span></li><li><span><b>Busca actualizaciones en cada arranque</b>, así las versiones nuevas aparecen al momento.</span></li><li><span><b>El icono de la barra de tareas vuelve a seguir el tema</b>, y la barra de desplazamiento usa el acento del tema.</span></li>",
  "lc.new_all":"Notas completas en GitHub →",
  "lc.tech_eyebrow":"Hecho con",
  "lc.tech_h":"Construido sobre gran <span class=\"hl\">código abierto</span>",
  "lc.tech_sub":"LiquidCat usa estos proyectos según sus respectivas licencias.",

  // Meowgnify page
  "mw.h":"Reescala video e imágenes con IA.",
  "mw.sub":"Suelta un archivo, elige la escala y deja que la IA haga el resto. Compara el resultado con un deslizador o una lupa de antes/después.",
  "mw.follow":"Sigue el progreso en GitHub", "mw.try_lc":"Mientras, prueba LiquidCat",
  "mw.feat_eyebrow":"Lo que hará",
  "mw.feat_h":"Píxeles más nítidos, <span class=\"hl\">sin configurar nada</span>",
  "mw.c1":"<h3>Video</h3><p>Real-ESRGAN, Real-CUGAN y Waifu2x para contenido general, fotograma a fotograma.</p>",
  "mw.c2":"<h3>Anime</h3><p>Anime4K y modelos especializados en anime, con vista previa antes/después.</p>",
  "mw.c3":"<h3>Imágenes</h3><p>Upscayl y Clarity para reescalar fotos y arte digital hasta 16×.</p>",
  "mw.c4":"<h3>Comparación</h3><p>Vista deslizador o lupa con zoom ajustable para comparar el original con el resultado.</p>",
  "mw.c5":"<h3>GPU por defecto</h3><p>Redes neuronales y shaders sobre Vulkan (ncnn-vulkan y libplacebo).</p>",
  "mw.c6":"<h3>Todo en uno</h3><p>Los motores se descargan bajo demanda; no hay que instalar nada aparte.</p>",
  "mw.tech_h":"Impulsado por gran <span class=\"hl\">código abierto</span>",
  "mw.tech_sub":"Meowgnify integra estos proyectos según sus respectivas licencias.",
  "mw.cta_h":"¿Quieres saber cuándo sale?",
  "mw.cta_p":"Sigue a Kittora en GitHub para ver la primera versión en cuanto se publique.",

  // Credits
  "cr.eyebrow":"Créditos", "cr.h":"Créditos y <span class=\"hl\">agradecimientos</span>",
  "cr.sub":"Las personas y los proyectos de código abierto detrás de Kittora.",
  "cr.people_h":"El <span class=\"hl\">equipo</span>",
  "cr.oss_h":"Proyectos de <span class=\"hl\">código abierto</span>",
  "cr.oss_sub":"Nuestras apps se apoyan en estos proyectos. Cada uno se usa bajo su propia licencia.",
  "cr.thanks":"¡Gracias por apoyar a Kittora! 💜",
  "cr.ytdlp_p":"Descargador de medios para YouTube y cientos de sitios más.",
  "cr.ffmpeg_p":"Conversión, reencode y recorte. Se descarga de compilaciones oficiales, nunca va incluido.",
  "cr.slint_p":"Toolkit de interfaz nativa con el que está hecho LiquidCat.",
  "cr.skia_p":"Motor gráfico 2D que dibuja la interfaz de LiquidCat en la GPU.",
  "cr.rust_p":"El lenguaje y el ecosistema de crates en los que está escrito LiquidCat.",
  "cr.catppuccin_p":"Paleta de colores de los temas predeterminados y de esta web.",
  "cr.material_p":"Sistema de diseño y algoritmo de color (material-color-utilities) del tema Material.",
  "cr.poppins_p":"Tipografía de toda la interfaz de LiquidCat.",
  "cr.anime4k_p":"Shaders de reescalado y reducción de ruido de anime en tiempo real.",
  "cr.esrgan_p":"Modelos de reescalado con IA y su versión ncnn-vulkan.",
  "cr.cugan_p":"Versiones ncnn-vulkan de Real-CUGAN y Waifu2x.",
  "cr.upscayl_p":"Motores y modelos de reescalado de imágenes con IA.",

  // 404
  "lost.p":"Esta página se escapó como un gato curioso. Volvamos a un sitio conocido.",
  "lost.home":"Volver al inicio"
};

function storageGet(key) { try { return localStorage.getItem(key); } catch { return null; } }
function storageSet(key, value) { try { localStorage.setItem(key, value); } catch {} }

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
  // El HTML traducido puede traer huecos de version (data-version) vacios.
  fillVersion(currentVersion);
}

/* ---------------- Ultima version y enlaces de descarga ---------------- */
let currentVersion = LIQUIDCAT_VERSION;

function fillVersion(v) {
  document.querySelectorAll("[data-version]").forEach(el => { el.textContent = v; });
}

function formatSize(bytes) { return `${Math.round(bytes / 1048576)} MB`; }

// Enlaza cada archivo (data-asset="windows-x86_64.exe", ...) con su descarga
// directa de la version indicada, y pone su tamano si se conoce.
function fillDownloads(version, sizes) {
  currentVersion = version;
  fillVersion(version);
  document.querySelectorAll("[data-asset]").forEach(a => {
    const name = `LiquidCat-${version}-${a.dataset.asset}`;
    a.href = `${RELEASES}/download/v${version}/${name}`;
    const size = sizes && sizes[name];
    const label = a.querySelector("[data-size]");
    if (size && label) label.textContent = formatSize(size);
  });
}

// Una consulta a la API por sesion (sessionStorage): sobra para el limite de
// 60 consultas por hora e IP que GitHub da sin autenticar.
async function loadLatestRelease() {
  let data = null;
  try { data = JSON.parse(sessionStorage.getItem("kittora_lc_release") || "null"); } catch {}
  if (!data) {
    try {
      const r = await fetch(`https://api.github.com/repos/${LIQUIDCAT_REPO}/releases/latest`, { headers: { Accept: "application/vnd.github+json" } });
      if (!r.ok) return;
      const json = await r.json();
      data = { version: String(json.tag_name || "").replace(/^v/, ""), sizes: {} };
      (json.assets || []).forEach(x => { data.sizes[x.name] = x.size; });
      try { sessionStorage.setItem("kittora_lc_release", JSON.stringify(data)); } catch {}
    } catch { return; }
  }
  if (data && /^\d+\.\d+\.\d+$/.test(data.version)) fillDownloads(data.version, data.sizes);
}

// Sistema del visitante, para el boton principal y resaltar su tarjeta.
function detectOS() {
  const p = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || navigator.userAgent;
  if (/win/i.test(p)) return "windows";
  if (/mac|iphone|ipad/i.test(p)) return "mac";
  if (/linux|x11|cros/i.test(p) && !/android/i.test(navigator.userAgent)) return "linux";
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }

  // Descargas: enlaces de la version de respaldo hasta que responda GitHub.
  fillDownloads(LIQUIDCAT_VERSION, null);
  const os = detectOS();
  const card = os && document.querySelector(`.platform[data-os="${os}"]`);
  if (card) card.classList.add("current");
  const label = document.getElementById("primaryLabel");
  if (label && os) label.dataset.i18n = { windows: "lc.dl_win", linux: "lc.dl_linux", mac: "lc.dl_mac" }[os];
  if (label && os) label.textContent = { windows: "Download for Windows", linux: "Download for Linux", mac: "Download for macOS" }[os];
  // En Windows hay un solo archivo: el boton lo descarga directamente.
  const primary = document.getElementById("primaryDownload");
  const winFile = document.querySelector('[data-asset="windows-x86_64.exe"]');
  if (primary && winFile && os === "windows") {
    primary.addEventListener("click", e => { e.preventDefault(); location.href = winFile.href; });
  }
  if (document.querySelector("[data-asset], [data-version]")) loadLatestRelease();

  // Idioma: el guardado, o el del navegador la primera vez.
  const saved = storageGet("kittora_lang") || ((navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en");
  applyLang(saved);
  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.addEventListener("click", () => {
    const next = document.documentElement.lang === "es" ? "en" : "es";
    applyLang(next);
    storageSet("kittora_lang", next);
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
