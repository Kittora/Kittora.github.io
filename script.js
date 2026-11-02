/* Kittora — sitio web oficial (compartido por todas las páginas) */

// Version de respaldo: la pagina pide la ultima release a GitHub al cargar
// (ver loadLatestRelease) y solo usa esta si la API no responde.
const LIQUIDCAT_VERSION = "0.4.6";
const LIQUIDCAT_REPO = "Kittora/LiquidCat";
const RELEASES = `https://github.com/${LIQUIDCAT_REPO}/releases`;
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE_POINTER = matchMedia("(pointer: fine)").matches;

/* ---------------- Traducciones al español ----------------
   El HTML está en inglés (idioma base). Aquí solo van las cadenas en
   español; al cambiar a EN se restaura el texto original cacheado. */
const I18N_ES = {
  // Compartido
  "nav.home":"Inicio", "nav.liquidcat":"LiquidCat", "nav.meowgnify":"Meowgnify", "nav.credits":"Créditos",
  "status.available":"Disponible", "status.dev":"En desarrollo", "status.stable":"Estable", "status.experimental":"Experimental",
  "btn.download":"Descargar", "btn.learn":"Saber más", "btn.source":"Ver código", "btn.github_follow":"Seguir en GitHub",
  "ba.before":"Antes", "ba.after":"Después",
  "foot.tagline":"Herramientas de escritorio gratuitas y de código abierto para creadores, hechas con cariño.",
  "foot.products":"Productos", "foot.resources":"Recursos", "foot.releases":"Versiones", "foot.bug":"Reportar un error",
  "foot.note":"© 2026 Kittora · Código abierto, hecho con cariño.",
  "foot.legal":"Sin afiliación con los proyectos que integramos.",
  "notice.legal":"Kittora no está afiliado ni respaldado por los proyectos que integra. Cada producto los usa como dependencias según sus respectivas licencias.",

  // Inicio
  "home.kicker":"Ya salió LiquidCat <span data-version></span>",
  "home.h1":"<span class=\"line\"><span>Software de escritorio</span></span><span class=\"line\"><span><span class=\"serif accent\">hecho con cariño.</span></span></span>",
  "home.lede":"Kittora es un pequeño estudio independiente que crea apps gratuitas y de código abierto para creadores. Nativas, ligeras y privadas, cuidando cada detalle.",
  "home.cta_products":"Ver nuestras apps",
  "home.note":"Gratis · Código abierto · Sin telemetría ·",
  "stat.apps":"apps, una misma filosofía", "stat.themes":"temas, cada uno con su gato",
  "stat.langs":"idiomas de serie", "stat.trackers":"rastreadores, anuncios o cuentas",
  "home.products_label":"Productos",
  "home.products_h":"Dos apps, <span class=\"serif\">una filosofía.</span>",
  "home.products_sub":"Potentes por dentro, sencillas por fuera. Cada app hace un trabajo y lo hace de maravilla.",
  "home.lc_p":"Descarga, convierte y reencodea video y audio en una app nativa, con el poder de yt-dlp y FFmpeg.",
  "home.lc_list":"<li>Codificación por GPU con NVENC, AMF, Quick Sync, VAAPI y VideoToolbox</li><li>Importación en lote, cola, historial y presets</li><li>15 temas y 6 idiomas, en Windows, Linux y macOS</li>",
  "home.mw_p":"Reescala video e imágenes con IA y shaders por GPU, y compara el resultado lado a lado.",
  "home.mw_list":"<li>Real-ESRGAN, Real-CUGAN, Waifu2x, Anime4K y Upscayl</li><li>Comparación con deslizador o lupa de antes/después</li><li>Funciona en la GPU con Vulkan; los motores se descargan al usarlos</li>",
  "home.values_label":"Principios",
  "home.values_h":"Herramientas pequeñas, <span class=\"serif\">listón alto.</span>",
  "home.values_sub":"Lo que prometemos en todo lo que publicamos, por pequeño que sea.",
  "home.v1_h":"Código abierto", "home.v1_p":"Todo el código es público. Léelo, compílalo tú mismo o ayúdanos a mejorarlo.",
  "home.v2_h":"Privado por defecto", "home.v2_p":"Sin cuentas, sin anuncios y sin telemetría. Tus archivos nunca salen de tu equipo.",
  "home.v3_h":"Nativo y rápido", "home.v3_p":"Escrito en Rust y dibujado por la GPU. Sin WebView, sin Electron y sin esperas.",
  "home.v4_h":"Pensado para disfrutarse", "home.v4_p":"Interfaces cuidadas, temas para todos los gustos y un gato en cada rincón.",
  "home.team_label":"Equipo",
  "home.team_h":"Dos amigos, <span class=\"serif\">un estudio.</span>",
  "home.team_sub":"Hacemos las herramientas que queremos usar cada día y las compartimos con todos.",
  "home.cta_h":"Listo cuando <span class=\"serif accent\">tú lo estés.</span>",
  "home.cta_p":"LiquidCat es gratis para Windows, Linux y macOS. Sin instalador, sin cuenta y sin Python.",
  "team.xjuan_role":"Fundador y desarrollador principal",
  "team.xjuan_p":"Creador de LiquidCat y Meowgnify. Producto, arquitectura y desarrollo.",
  "team.notao_role":"Desarrollador · optimización · temas",
  "team.notao_p":"Optimización del código, corrección de errores, temas y soporte de los motores de reescalado.",

  // LiquidCat
  "lc.h1":"<span class=\"line\"><span>Descarga. Convierte.</span></span><span class=\"line\"><span><span class=\"serif accent\">Ronronea.</span></span></span>",
  "lc.sub":"De un enlace a un MP4 o MP3 terminado. LiquidCat se encarga de la descarga, la conversión y el reencode en una app nativa, con el poder de yt-dlp y FFmpeg.",
  "lc.dl_btn":"Descargar LiquidCat",
  "lc.dl_win":"Descargar para Windows", "lc.dl_linux":"Descargar para Linux", "lc.dl_mac":"Descargar para macOS",
  "lc.meta_all":"Todas las descargas",
  "lc.feat_label":"Funciones",
  "lc.feat_h":"Todo lo multimedia, <span class=\"serif\">en un solo sitio.</span>",
  "lc.feat_sub":"El poder de yt-dlp y FFmpeg sin línea de comandos, dentro de una app que da gusto usar.",
  "lc.t_dl_h":"Descarga lo que sea",
  "lc.t_dl_p":"Video o audio de YouTube y cientos de sitios más. Pega muchos enlaces a la vez o cárgalos desde un .txt.",
  "lc.t_gpu_h":"Acelerado por GPU", "lc.t_gpu_p":"Detecta tu tarjeta gráfica sola, con la CPU como respaldo.",
  "lc.t_conv_h":"Convierte y recorta", "lc.t_conv_p":"Reencodea archivos locales, extrae el audio y recorta un fragmento exacto.",
  "lc.t_lang_h":"Habla tu idioma", "lc.t_lang_p":"Inglés, español, portugués, francés, alemán e italiano. Sigue el de tu sistema.",
  "lc.t_native_h":"Nativo y ligero", "lc.t_native_p":"Rust y Slint, dibujado por la GPU. Sin WebView ni Electron.",
  "lc.t_native_idle":"en reposo", "lc.t_native_where":"Administrador de tareas de Windows",
  "lc.t_queue_h":"Cola, historial y presets",
  "lc.t_queue_p":"Encola todos los trabajos que quieras y síguelos en la tarjeta flotante de Actividad. Te avisa con una notificación al terminar.",
  "lc.shots_label":"De cerca",
  "lc.shots_h":"Diseñado hasta <span class=\"serif\">el último píxel.</span>",
  "lc.shots_sub":"Con Catppuccin Mocha, el tema predeterminado. Haz clic en una captura para verla en grande.",
  "lc.shot1":"Descargador", "lc.shot2":"Archivos locales", "lc.shot3":"Cola y actividad", "lc.shot4":"Ajustes",
  "lc.cap1":"Pega un enlace para ver la vista previa, elige el formato y descarga.",
  "lc.cap2":"Convierte varios archivos a la vez y síguelos en la tarjeta flotante de Actividad.",
  "lc.cap3":"Sigue los trabajos en curso y vuelve a todo lo que ya terminaste.",
  "lc.cap4":"Temas, idiomas, dependencias y actualizaciones en un solo lugar.",
  "lc.themes_label":"Temas",
  "lc.themes_h":"Quince temas, <span class=\"serif\">quince gatos.</span>",
  "lc.themes_sub":"Cada tema trae su gato, y Material y Fluent siguen el acento de tu sistema. Prueba uno: esta página también lo seguirá.",
  "lc.themes_hint":"Tu elección se recuerda en toda la web.",
  "lc.dl_label":"Descarga",
  "lc.dl_h":"Consigue LiquidCat <span class=\"serif accent\"><span data-version></span>.</span>",
  "lc.dl_p":"Gratis y de código abierto. Sin instalador, sin cuenta y sin Python: yt-dlp se descarga y actualiza solo.",
  "lc.rec":"Recomendado para ti",
  "lc.note_win":"Un único .exe portable. FFmpeg se configura en el primer arranque. Si SmartScreen avisa, elige Más información → Ejecutar de todas formas.",
  "lc.note_linux":"Descomprime y ejecuta <code>./LiquidCat</code>. Instala FFmpeg con tu gestor de paquetes.",
  "lc.note_mac":"Aún no está notarizada: la primera vez haz clic derecho sobre la app y elige <b>Abrir</b>. Instala FFmpeg con <code>brew install ffmpeg</code>.",
  "lc.legal":"LiquidCat está pensado para contenido propio o que tengas permiso para descargar. Eres responsable de respetar los derechos de autor y los términos de cada plataforma.",
  "lc.new_label":"Novedades",
  "lc.new_list":"<li><span><b>Tema Material 3</b> generado a partir de tu color de acento con el algoritmo de color de Google, con botones en píldora y colores tonales.</span></li><li><span><b>Color de acento del sistema</b> para Material (en todos los sistemas) y Fluent (Windows), en vivo.</span></li><li><span><b>Busca actualizaciones en cada arranque</b>, así las versiones nuevas aparecen al momento.</span></li><li><span><b>El icono de la barra de tareas vuelve a seguir el tema</b>, y la barra de desplazamiento usa el acento del tema.</span></li>",
  "lc.new_all":"Notas completas en GitHub",

  // Meowgnify
  "mw.kicker":"En desarrollo · Muy pronto",
  "mw.h1":"<span class=\"line\"><span>Cada píxel,</span></span><span class=\"line\"><span><span class=\"serif accent\">más nítido.</span></span></span>",
  "mw.sub":"Meowgnify reescala video e imágenes con IA y shaders por GPU. Suelta un archivo, elige la escala y compara el resultado antes y después.",
  "mw.follow":"Sigue el progreso en GitHub", "mw.try_lc":"Mientras, prueba LiquidCat",
  "mw.drag":"Arrastra el control para comparar →",
  "mw.feat_label":"Lo que hará",
  "mw.feat_h":"Resultados más nítidos, <span class=\"serif\">sin configurar nada.</span>",
  "mw.feat_sub":"Los mejores reescaladores de código abierto detrás de una sola ventana.",
  "mw.f1_h":"Video", "mw.f1_p":"Real-ESRGAN, Real-CUGAN y Waifu2x para contenido general, fotograma a fotograma.",
  "mw.f2_h":"Anime", "mw.f2_p":"Anime4K y modelos especializados en anime, con vista previa de antes y después.",
  "mw.f3_h":"Imágenes", "mw.f3_p":"Upscayl y Clarity para reescalar fotos y arte digital hasta 16×.",
  "mw.f4_h":"Comparación", "mw.f4_p":"Vista de deslizador o lupa con zoom ajustable para comparar el original con el resultado.",
  "mw.f5_h":"GPU por defecto", "mw.f5_p":"Redes neuronales y shaders sobre Vulkan, con ncnn-vulkan y libplacebo.",
  "mw.f6_h":"Todo en uno", "mw.f6_p":"Los motores se descargan al usarlos. No hay que instalar nada más.",
  "mw.cta_h":"Sé el primero <span class=\"serif accent\">en saberlo.</span>",
  "mw.cta_p":"Sigue a Kittora en GitHub para ver la primera versión en cuanto se publique.",

  // Créditos
  "cr.kicker":"Créditos y licencias",
  "cr.h1":"<span class=\"line\"><span>A hombros</span></span><span class=\"line\"><span><span class=\"serif accent\">de gigantes.</span></span></span>",
  "cr.sub":"Las personas que hacen Kittora y los proyectos de código abierto que hacen posibles nuestras apps.",
  "cr.team_label":"Equipo", "cr.oss_label":"Código abierto",
  "cr.oss_h":"Hecho con <span class=\"serif\">grandes proyectos.</span>",
  "cr.oss_sub":"Cada uno se usa bajo su propia licencia. Gracias a todas las personas que los mantienen.",
  "cr.all":"Todos", "cr.web":"Web",
  "cr.ytdlp_p":"Descargador de medios para YouTube y cientos de sitios más.",
  "cr.ffmpeg_p":"Conversión, reencode y recorte. Se descarga de compilaciones oficiales, nunca va incluido.",
  "cr.slint_p":"Toolkit de interfaz nativa con el que está hecho LiquidCat.",
  "cr.skia_p":"Motor gráfico 2D que dibuja la interfaz de LiquidCat en la GPU.",
  "cr.rust_p":"El lenguaje y el ecosistema de crates en los que está escrito LiquidCat.",
  "cr.catppuccin_p":"Paletas de los temas predeterminados y del acento de esta web.",
  "cr.material_p":"Sistema de diseño y algoritmo de color (material-color-utilities) del tema Material.",
  "cr.poppins_p":"Tipografía de toda la interfaz de LiquidCat.",
  "cr.anime4k_p":"Shaders de reescalado y reducción de ruido de anime en tiempo real.",
  "cr.esrgan_p":"Modelos de reescalado con IA y su versión ncnn-vulkan.",
  "cr.cugan_p":"Versiones ncnn-vulkan de Real-CUGAN y Waifu2x.",
  "cr.upscayl_p":"Motores y modelos de reescalado de imágenes con IA.",
  "cr.geist_p":"Tipografía de esta web, con Instrument Serif para los acentos.",
  "cr.thanks":"Gracias por apoyar a <span class=\"serif accent\">Kittora.</span>",

  // 404
  "lost.p":"Esta página se escapó como un gato curioso. Volvamos a un sitio conocido.",
  "lost.home":"Volver al inicio"
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
function storageGet(key) { try { return localStorage.getItem(key); } catch { return null; } }
function storageSet(key, value) { try { localStorage.setItem(key, value); } catch {} }
const cssVar = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

/* ---------------- Idioma ---------------- */
function t(key) {
  const el = document.querySelector(`[data-i18n="${key}"]`);
  return el ? el.textContent : "";
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => {
    if (el.dataset.en === undefined) el.dataset.en = el.textContent;
    const es = I18N_ES[el.dataset.i18n];
    el.textContent = (lang === "es" && es) ? es : el.dataset.en;
  });
  $$("[data-i18n-html]").forEach(el => {
    if (el.dataset.enHtml === undefined) el.dataset.enHtml = el.innerHTML;
    const es = I18N_ES[el.dataset.i18nHtml];
    el.innerHTML = (lang === "es" && es) ? es : el.dataset.enHtml;
  });
  const b = document.body;
  if (lang === "es" && b.dataset.titleEs) { if (!b.dataset.titleEn) b.dataset.titleEn = document.title; document.title = b.dataset.titleEs; }
  else if (b.dataset.titleEn) { document.title = b.dataset.titleEn; }
  const btn = $("#langBtn span");
  if (btn) btn.textContent = lang === "es" ? "EN" : "ES";
  // El HTML traducido puede traer huecos de version (data-version) vacios.
  fillVersion(currentVersion);
  document.dispatchEvent(new Event("langchange"));
}

/* ---------------- Ultima version y enlaces de descarga ---------------- */
let currentVersion = LIQUIDCAT_VERSION;

function fillVersion(v) { $$("[data-version]").forEach(el => { el.textContent = v; }); }
function formatSize(bytes) { return `${Math.round(bytes / 1048576)} MB`; }

// Enlaza cada archivo (data-asset="windows-x86_64.exe", ...) con su descarga
// directa de la version indicada, y pone su tamano si se conoce.
function fillDownloads(version, sizes) {
  currentVersion = version;
  fillVersion(version);
  $$("[data-asset]").forEach(a => {
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

/* ---------------- Visibilidad ----------------
   Un solo IntersectionObserver: anima la entrada de [data-reveal] y
   arranca/para las demos segun esten en pantalla. */
const onVisible = new Map();
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    const fn = onVisible.get(e.target);
    if (fn) fn(e.isIntersecting);
    if (e.isIntersecting && e.target.matches("[data-reveal], [data-meter]")) e.target.classList.add("in");
  });
}, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });

function watch(el, fn) { if (fn) onVisible.set(el, fn); io.observe(el); }

function setupReveal() {
  // Escalona hermanos que aparecen juntos (maximo 8 pasos).
  const groups = new Map();
  $$("[data-reveal]").forEach(el => {
    const list = groups.get(el.parentElement) || [];
    list.push(el); groups.set(el.parentElement, list);
  });
  groups.forEach(list => list.forEach((el, i) => { if (list.length > 1) el.style.setProperty("--i", Math.min(i, 8)); }));
  $$("[data-reveal], [data-meter]").forEach(el => watch(el));
}

/* ---------------- Contadores ---------------- */
function setupCounters() {
  $$("[data-count]").forEach(el => {
    const target = +el.dataset.count;
    const from = target === 0 ? 99 : 0;   // el 0 llega contando hacia atras
    el.textContent = REDUCED ? target : from;
    let done = false;
    watch(el, vis => {
      if (!vis || done || REDUCED) return;
      done = true;
      const t0 = performance.now(), dur = 1600;
      const step = now => {
        const p = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(2, -10 * p);
        el.textContent = Math.round(from + (target - from) * (p === 1 ? 1 : e));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  });
}

/* ---------------- Navegacion ---------------- */
function setupNav() {
  const nav = $(".nav");
  if (!nav) return;
  const progress = $(".progress");
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 30);
    if (progress) {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.setProperty("--scroll", max > 0 ? scrollY / max : 0);
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Indicador que se desliza bajo el enlace con el raton y vuelve al activo.
  const links = $(".nav-links");
  const ind = $(".nav-ind");
  const moveTo = a => {
    if (!a || !ind || innerWidth <= 760) { if (ind) ind.style.opacity = 0; return; }
    ind.style.width = a.offsetWidth + "px";
    ind.style.transform = `translateX(${a.offsetLeft}px)`;
    ind.style.opacity = 1;
  };
  const active = $(".nav-links a.active");
  if (links) {
    $$("a", links).forEach((a, i) => {
      a.style.setProperty("--i", i);
      a.addEventListener("mouseenter", () => moveTo(a));
    });
    links.addEventListener("mouseleave", () => moveTo(active));
    requestAnimationFrame(() => moveTo(active));
    document.fonts && document.fonts.ready.then(() => moveTo(active));
    addEventListener("resize", () => moveTo(active));
    document.addEventListener("langchange", () => requestAnimationFrame(() => moveTo(active)));
  }

  const burger = $(".burger");
  if (burger) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
    });
    $$(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
    document.addEventListener("keydown", e => { if (e.key === "Escape") nav.classList.remove("open"); });
  }
}

/* ---------------- Interacciones con el puntero ---------------- */
function setupPointer() {
  if (!FINE_POINTER || REDUCED) return;

  // Botones magneticos: siguen un poco al cursor y vuelven con rebote.
  $$("[data-magnetic]").forEach(el => {
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      el.style.transform = `translate(${x * 10}px, ${y * 8}px)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });

  // Ventanas con inclinacion 3D y reflejo.
  $$("[data-tilt]").forEach(stage => {
    const win = $(".window", stage);
    if (!win) return;
    stage.addEventListener("pointermove", e => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      win.style.setProperty("--ry", `${(x - .5) * 10}deg`);
      win.style.setProperty("--rx", `${(.5 - y) * 8}deg`);
      win.style.setProperty("--gx", `${x * 100}%`);
      win.style.setProperty("--gy", `${y * 100}%`);
    });
    stage.addEventListener("pointerleave", () => {
      win.style.setProperty("--ry", "0deg"); win.style.setProperty("--rx", "0deg");
    });
  });

  // Foco de luz que sigue al raton en tarjetas.
  $$(".tile, .product").forEach(el => {
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  // El nombre gigante del pie se ilumina donde esta el cursor.
  const wm = $(".wordmark");
  if (wm) {
    addEventListener("pointermove", e => {
      const r = wm.getBoundingClientRect();
      if (e.clientY < r.top - 200) return;
      wm.style.setProperty("--wx", `${e.clientX - r.left}px`);
      wm.style.setProperty("--wy", `${e.clientY - r.top}px`);
    }, { passive: true });
  }
}

/* ---------------- Captura principal que se endereza al hacer scroll ---------------- */
function setupShowcase() {
  const sc = $("[data-showcase]");
  if (!sc) return;
  const win = $(".window", sc);
  const update = () => {
    const r = sc.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, 1 - (r.top - innerHeight * .2) / (innerHeight * .7)));
    win.style.setProperty("--tilt", `${(1 - p) * 18}deg`);
    win.style.setProperty("--sc", (.92 + p * .08).toFixed(3));
  };
  if (REDUCED) { win.style.setProperty("--tilt", "0deg"); win.style.setProperty("--sc", 1); return; }
  addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);
  update();
}

/* ---------------- Antes / despues ---------------- */
function setupCompare() {
  $$("[data-ba]").forEach(box => {
    const canvas = $("canvas", box);
    const img = new Image();
    img.src = box.dataset.src;
    let auto = !REDUCED, played = false;

    // "Antes": la imagen reducida a 28 px y ampliada sin suavizado.
    const draw = () => {
      if (!img.complete || !img.naturalWidth) return;
      const w = box.clientWidth, h = box.clientHeight, dpr = devicePixelRatio || 1;
      canvas.width = w * dpr; canvas.height = h * dpr;
      const ctx = canvas.getContext("2d");
      const pad = Math.min(w, h) * .08 * 2;
      const size = Math.min(w - pad, h - pad) * dpr;
      const small = document.createElement("canvas");
      small.width = small.height = 28;
      small.getContext("2d").drawImage(img, 0, 0, 28, 28);
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(small, (canvas.width - size) / 2, (canvas.height - size) / 2, size, size);
    };
    img.onload = draw;
    addEventListener("resize", draw);

    const setPos = pct => box.style.setProperty("--pos", `${Math.min(100, Math.max(0, pct))}%`);
    const fromEvent = e => {
      const r = box.getBoundingClientRect();
      setPos((e.clientX - r.left) / r.width * 100);
    };
    box.addEventListener("pointerdown", e => {
      auto = false; box.classList.remove("animating");
      box.setPointerCapture(e.pointerId); fromEvent(e);
      const move = ev => fromEvent(ev);
      const up = () => { box.removeEventListener("pointermove", move); box.removeEventListener("pointerup", up); };
      box.addEventListener("pointermove", move);
      box.addEventListener("pointerup", up);
    });
    box.tabIndex = 0;
    box.addEventListener("keydown", e => {
      const cur = parseFloat(getComputedStyle(box).getPropertyValue("--pos")) || 50;
      if (e.key === "ArrowLeft") setPos(cur - 5);
      if (e.key === "ArrowRight") setPos(cur + 5);
    });

    // Al aparecer, el control hace un pequeño barrido para invitar a usarlo.
    watch(box, async vis => {
      if (!vis || played || !auto) return;
      played = true;
      box.classList.add("animating");
      for (const p of [78, 26, 50]) { if (!auto) break; setPos(p); await sleep(1000); }
      box.classList.remove("animating");
    });
  });
}

/* ---------------- Demos de la pagina de LiquidCat ---------------- */
function loopWhileVisible(el, run) {
  let visible = false, running = false;
  watch(el, async vis => {
    visible = vis;
    if (!vis || running) return;
    running = true;
    while (visible) await run(() => visible);
    running = false;
  });
}

function setupDemos() {
  if (REDUCED) return;

  const dl = $('[data-demo="download"]');
  if (dl) {
    const typed = $(".typed", dl), row = $(".dl-row", dl), bar = $(".bar i", row), title = $(".meta b", row);
    const items = [
      ["youtube.com/watch?v=lofi-beats", "Lofi beats to code to · 1080p MP4"],
      ["soundcloud.com/artist/night-drive", "Night Drive · MP3 320k"],
      ["vimeo.com/76979871", "Short film · 4K WebM"]
    ];
    let n = 0;
    loopWhileVisible(dl, async alive => {
      const [url, name] = items[n++ % items.length];
      row.classList.remove("show", "done"); bar.style.width = "0%";
      typed.textContent = "";
      for (const ch of url) { if (!alive()) return; typed.textContent += ch; await sleep(38); }
      await sleep(350);
      title.textContent = name; row.classList.add("show");
      for (let p = 0; p <= 100; p += 4) { if (!alive()) return; bar.style.width = p + "%"; await sleep(70); }
      row.classList.add("done");
      await sleep(2000);
    });
  }

  const enc = $('[data-demo="encoders"]');
  if (enc) {
    const chips = $$("span", enc); let i = 0;
    loopWhileVisible(enc, async () => {
      chips.forEach((c, j) => c.classList.toggle("on", j === i));
      i = (i + 1) % chips.length;
      await sleep(1100);
    });
  }

  const fmt = $('[data-demo="formats"]');
  if (fmt) {
    const pairs = [["MKV", "MP4"], ["WEBM", "GIF"], ["WAV", "FLAC"], ["MOV", "MP4"], ["MP4", "M4A"], ["MP4", "MP3"]];
    let i = 0;
    const swap = (box, text) => { const s = document.createElement("span"); s.className = "swap"; s.textContent = text; box.replaceChildren(s); };
    loopWhileVisible(fmt, async () => {
      await sleep(1800);
      const [a, b] = pairs[i++ % pairs.length];
      swap($(".from", fmt), a);
      await sleep(140);
      swap($(".to", fmt), b);
    });
  }

  const words = $('[data-demo="words"]');
  if (words) {
    const list = $$("span", words); let i = 0;
    loopWhileVisible(words, async () => {
      await sleep(1600);
      const cur = list[i], next = list[(i + 1) % list.length];
      cur.classList.remove("on"); cur.classList.add("out");
      next.classList.remove("out"); next.classList.add("on");
      setTimeout(() => cur.classList.remove("out"), 800);
      i = (i + 1) % list.length;
    });
  }

  const queue = $('[data-demo="queue"]');
  if (queue) {
    const rows = $$(".q", queue);
    loopWhileVisible(queue, async alive => {
      rows.forEach(r => { r.classList.remove("run", "ok"); $(".bar i", r).style.width = "0%"; });
      for (const r of rows) {
        r.classList.add("run");
        for (let p = 0; p <= 100; p += 5) { if (!alive()) return; $(".bar i", r).style.width = p + "%"; await sleep(55); }
        r.classList.remove("run"); r.classList.add("ok");
        await sleep(250);
      }
      await sleep(2200);
    });
  }
}

/* ---------------- Galeria con pestanas ---------------- */
function setupGallery() {
  const tabs = $("[data-tabs]"), gallery = $("[data-gallery]");
  if (!tabs || !gallery) return;
  const pill = $(".pill", tabs), buttons = $$("button", tabs), shots = $$(".window", gallery), cap = $("#galleryCap");
  let current = 0;
  const place = () => {
    const b = buttons[current];
    pill.style.width = b.offsetWidth + "px";
    pill.style.transform = `translateX(${b.offsetLeft - 4}px)`;
  };
  const select = i => {
    current = i;
    buttons.forEach((b, j) => b.setAttribute("aria-selected", j === i));
    shots.forEach((s, j) => s.classList.toggle("on", j === i));
    cap.textContent = t(shots[i].dataset.cap);
    place();
  };
  buttons.forEach((b, i) => b.addEventListener("click", () => select(i)));
  tabs.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { select((current + 1) % buttons.length); buttons[current].focus(); }
    if (e.key === "ArrowLeft") { select((current - 1 + buttons.length) % buttons.length); buttons[current].focus(); }
  });
  addEventListener("resize", place);
  document.addEventListener("langchange", () => requestAnimationFrame(() => select(current)));
  document.fonts && document.fonts.ready.then(place);
  select(0);
}

/* ---------------- Selector de temas (acento de la web) ---------------- */
function setupThemes() {
  const grid = $("[data-themes]");
  const saved = storageGet("kittora_accent");
  if (!grid) return;
  const items = $$(".theme", grid);
  items.forEach(b => {
    b.style.setProperty("--c", b.dataset.accent);
    b.setAttribute("aria-pressed", (saved ? b.dataset.accent === saved : b === items[0]) ? "true" : "false");
    b.addEventListener("click", () => {
      items.forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
      document.documentElement.style.setProperty("--accent", b.dataset.accent);
      storageSet("kittora_accent", b.dataset.accent);
      b.classList.remove("bounce"); void b.offsetWidth; b.classList.add("bounce");
    });
  });
}

/* ---------------- Lightbox que nace desde la miniatura ---------------- */
function setupLightbox() {
  const box = $("#lightbox");
  if (!box) return;
  const big = $("img", box);
  let thumb = null;

  const rectTransform = (from, to) =>
    `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width}, ${from.height / to.height})`;

  const open = img => {
    thumb = img;
    big.src = img.currentSrc || img.src; big.alt = img.alt;
    box.classList.add("open");
    big.style.transition = "none"; big.style.opacity = 1; big.style.transform = "none";
    const finish = () => {
      const to = big.getBoundingClientRect(), from = thumb.getBoundingClientRect();
      big.style.transform = rectTransform(from, to);
      big.getBoundingClientRect();
      big.style.transition = REDUCED ? "none" : `transform ${cssVar("--t-spring")} ${cssVar("--spring")}`;
      big.style.transform = "none";
    };
    big.complete ? finish() : (big.onload = finish);
  };
  const close = () => {
    if (!box.classList.contains("open")) return;
    const to = big.getBoundingClientRect(), from = thumb.getBoundingClientRect();
    big.style.transition = REDUCED ? "none" : `transform .45s ${cssVar("--out")}, opacity .45s`;
    big.style.transform = rectTransform(from, to);
    box.classList.remove("open");
    setTimeout(() => { big.style.opacity = 0; }, REDUCED ? 0 : 380);
  };
  $$("[data-zoom]").forEach(img => img.addEventListener("click", () => open(img)));
  box.addEventListener("click", close);
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

/* ---------------- Filtro de creditos con FLIP ---------------- */
function setupFilters() {
  const bar = $("[data-filters]"), list = $("[data-credits]");
  if (!bar || !list) return;
  const rows = $$(".credit", list);
  $$("button", bar).forEach(btn => btn.addEventListener("click", () => {
    $$("button", bar).forEach(b => b.setAttribute("aria-pressed", b === btn));
    const f = btn.dataset.filter;
    const before = new Map(rows.filter(r => !r.classList.contains("hide")).map(r => [r, r.getBoundingClientRect()]));
    rows.forEach(r => r.classList.toggle("hide", f !== "all" && !r.dataset.tags.split(" ").includes(f)));
    if (REDUCED) return;
    rows.filter(r => !r.classList.contains("hide")).forEach((r, i) => {
      const prev = before.get(r);
      if (prev) {
        const now = r.getBoundingClientRect();
        r.animate([{ transform: `translateY(${prev.top - now.top}px)` }, { transform: "none" }],
          { duration: 700, easing: cssVar("--soft") });
      } else {
        r.animate([{ opacity: 0, transform: "translateY(16px) scale(.98)" }, { opacity: 1, transform: "none" }],
          { duration: 700, delay: i * 35, easing: cssVar("--soft"), fill: "backwards" });
      }
    });
  }));
}

/* ---------------- Marquesina infinita ---------------- */
function setupMarquee() {
  $$(".marquee-track").forEach(track => {
    $$(":scope > *", track).forEach(el => { const c = el.cloneNode(true); c.setAttribute("aria-hidden", "true"); c.tabIndex = -1; track.appendChild(c); });
  });
}

/* ---------------- Arranque ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Descargas: enlaces de la version de respaldo hasta que responda GitHub.
  fillDownloads(LIQUIDCAT_VERSION, null);
  const os = detectOS();
  const card = os && $(`.platform[data-os="${os}"]`);
  if (card) card.classList.add("current");
  const label = $("#primaryLabel");
  if (label && os) {
    label.dataset.i18n = { windows: "lc.dl_win", linux: "lc.dl_linux", mac: "lc.dl_mac" }[os];
    label.textContent = { windows: "Download for Windows", linux: "Download for Linux", mac: "Download for macOS" }[os];
  }
  // En Windows hay un solo archivo: el boton lo descarga directamente.
  const primary = $("#primaryDownload"), winFile = $('[data-asset="windows-x86_64.exe"]');
  if (primary && winFile && os === "windows") primary.addEventListener("click", e => { e.preventDefault(); location.href = winFile.href; });
  if ($("[data-asset], [data-version]")) loadLatestRelease();

  // Idioma: el guardado, o el del navegador la primera vez.
  const saved = storageGet("kittora_lang") || ((navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en");
  applyLang(saved);
  const langBtn = $("#langBtn");
  if (langBtn) langBtn.addEventListener("click", async () => {
    const next = document.documentElement.lang === "es" ? "en" : "es";
    const main = $("main");
    langBtn.classList.remove("flip"); void langBtn.offsetWidth; langBtn.classList.add("flip");
    if (main && !REDUCED) { main.classList.add("swapping"); await sleep(200); }
    applyLang(next);
    storageSet("kittora_lang", next);
    if (main) requestAnimationFrame(() => main.classList.remove("swapping"));
  });

  setupNav();
  setupReveal();
  setupCounters();
  setupPointer();
  setupShowcase();
  setupCompare();
  setupDemos();
  setupGallery();
  setupThemes();
  setupLightbox();
  setupFilters();
  setupMarquee();
});
