
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Anchor,
  Compass,
  Waves,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import './styles.css';

/* =====================================================
   DATOS
===================================================== */

const YACHTS = [
  {
    name: 'Navetta 75',
    family: 'NAVETTA',
    type: 'THE GRANDEUR OF SPACE',
    description:
      'Una nueva dimensión de amplitud, privacidad y conexión con el mar. Diseñada para disfrutar cada travesía sin renunciar al confort.',
    length: '22,82 m',
    beam: '5,61 m',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1600&q=90',
        alt: 'Yate de lujo navegando en aguas azules',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/Esterni-nav-75-6-2.jpg',
        alt: 'Vista exterior de una embarcación de lujo',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/Esterni-nav-75-3-2.jpg',
        alt: 'Embarcación de recreo sobre el mar',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/Esterni-nav-75-12-2.jpg',
        alt: 'Mar abierto y horizonte',
      },
    ],
  },
  {
    family: 'NAVETTA',
    name: 'Navetta 62',
    type: 'TIMELESS ELEGANCE',
    description:
      'Equilibrio entre líneas elegantes, espacios luminosos y soluciones inteligentes para vivir el mar con libertad.',
    length: '18 m',
    beam: 'Diseño walkaround',
    images: [
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/06/Absolute_Navetta62_3.jpg',
        alt: 'Embarcación navegando sobre aguas tranquilas',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/Absolute_Navetta62_4-3.jpg',
        alt: 'Yate de lujo visto desde el exterior',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/NAVETTA_62_ESTERNI-52-3.jpg',
        alt: 'Yate navegando en el mar',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/Absolute_Navetta62_6-3.jpg',
        alt: 'Paisaje de mar abierto',
      },
    ],
  },
  {
    family: 'NAVETTA',
    name: 'Navetta 58',
    type: 'FREEDOM, REDEFINED',
    description:
      'La esencia de la navegación contemporánea: espacios acogedores, diseño funcional y una relación única con el horizonte.',
    length: '17 m',
    beam: 'Espacios abiertos',
    images: [
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/03-gallery-esterni-yacht-navetta58-12.jpg',
        alt: 'Embarcación de lujo sobre el agua',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/03-gallery-esterni-yacht-navetta58-18.jpg',
        alt: 'Yate de lujo navegando',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/03-gallery-esterni-yacht-navetta58-19.jpg',
        alt: 'Vista de una embarcación en el mar',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/03-gallery-esterni-yacht-navetta58-06.jpg',
        alt: 'Horizonte marino',
      },
    ],
  },
  
  {
    name: '70 FLY',
    family: 'FLYBRIDGE',
    type: 'THE ABSOLUTE WONDER',
    description:
      'Arquitectura contemporánea, espacios panorámicos y una conexión fluida entre interior y exterior. Una experiencia de navegación diseñada para disfrutar cada cubierta.',
    length: '21,53 m',
    beam: '5,39 m',
    images: [
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/DJI_20250904103337_0581_D-2-3.jpg',
        alt: 'Imagen ilustrativa de una embarcación de lujo',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/DJI_20250904102221_0511_D-3.jpg',
        alt: 'Imagen ilustrativa de un yate',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/DSC0662-3.jpg',
        alt: 'Imagen ilustrativa de navegación',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/DSC0407-3.jpg',
        alt: 'Imagen ilustrativa del mar',
      },
    ],
  },
  {
    name: '60 FLY',
    family: 'FLYBRIDGE',
    type: 'THE ABSOLUTE PRISMA',
    description:
      'Volúmenes generosos, vistas panorámicas y espacios flexibles que integran salón, cocina y cockpit en una experiencia abierta y sofisticada.',
    length: '18,66 m',
    beam: '4,94 m',
    images: [
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/60-FLY-esterni-8-2.jpg',
        alt: 'Imagen ilustrativa de una embarcación de lujo',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/60-FLY-esterni-1-2.jpg',
        alt: 'Imagen ilustrativa de un yate',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/60-FLY-esterni-3-2.jpg',
        alt: 'Imagen ilustrativa de navegación',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/60-FLY-esterni-6-2.jpg',
        alt: 'Imagen ilustrativa del mar',
      },
    ],
  },
  {
    name: '56 FLY',
    family: 'FLYBRIDGE',
    type: 'THE ABSOLUTE CHARISMA',
    description:
      'Diseño distintivo, iluminación natural y espacios versátiles. Su flybridge reúne navegación, descanso y entretenimiento con vistas abiertas al mar.',
    length: '17,64 m',
    beam: '4,79 m',
    images: [
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/1400x800px-gallery_2-2.jpg',
        alt: 'Imagen ilustrativa de una embarcación de lujo',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/1400x800px-gallery_6-2.jpg',
        alt: 'Imagen ilustrativa de un yate',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/1400x800px-gallery_7-2.jpg',
        alt: 'Imagen ilustrativa de navegación',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/1400x800px-gallery_9-2.jpg',
        alt: 'Imagen ilustrativa del mar',
      },
    ],
  },
  {
    name: '52 FLY',
    family: 'FLYBRIDGE',
    type: 'ELEGANCE AND LIVABILITY',
    description:
      'Apertura panorámica, diseño inteligente y confort. Sus espacios conectan las zonas interiores y exteriores para disfrutar cada momento a bordo.',
    length: '16,76 m',
    beam: '4,67 m',
    images: [
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/ABSOLUTE-52-FLY-289-2.jpg',
        alt: 'Imagen ilustrativa de una embarcación de lujo',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/ABSOLUTE-52-FLY-LIFESTYLE-33-2.jpg',
        alt: 'Imagen ilustrativa de un yate',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/ABSOLUTE-52-FLY-226-2.jpg',
        alt: 'Imagen ilustrativa de navegación',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/ABSOLUTE-52-FLY-194-2.jpg',
        alt: 'Imagen ilustrativa del mar',
      },
    ],
  },
  {
    name: '47 FLY',
    family: 'FLYBRIDGE',
    type: 'THE ABSOLUTE GATEWAY',
    description:
      'Espacios generosos, vistas panorámicas y distribución intuitiva. Una embarcación que combina comodidad, funcionalidad y libertad para navegar.',
    length: '14,63 m',
    beam: '4,52 m',
    images: [
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/Absolute-47-FLY-04-2.jpg',
        alt: 'Imagen ilustrativa de una embarcación de lujo',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/Absolute-47-FLY-2.jpg',
        alt: 'Imagen ilustrativa de un yate',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/Absolute-47-FLY-08-2.jpg',
        alt: 'Imagen ilustrativa de navegación',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/Absolute-47-FLY-14-2.jpg',
        alt: 'Imagen ilustrativa del mar',
      },
    ],
  },

  {
    name: '48 Coupé',
    family: 'COUPÉ',
    type: 'SPORTY CHARACTER, OPEN VIEWS',
    description:
      'Una nueva forma de vivir el mar. Su diseño deportivo integra amplias superficies acristaladas, cockpit tipo terraza y espacios interiores luminosos. Los paneles solares integrados aportan innovación y mayor autonomía.',
    length: '14,90 m',
    beam: '4,52 m',
    images: [
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/48-coupe-esterni-4-2.jpg',
        alt: 'Imagen ilustrativa de un yate de lujo',
      },
      {
        src: 'https://www.absoluteyachts.com/wp-content/uploads/2026/08/48-coupe-esterni-2-2.jpg',
        alt: 'Imagen ilustrativa de una embarcación',
      },
      
    ],
  },

];

const NAV_LINKS = [
  ['MARCA', '#marca'],
  ['EMBARCACIONES', '#modelos'],
  ['EXPERIENCIA', '#experiencia'],
  ['CONTACTO', '#contacto'],
];

const VALUES = [
  {
    icon: Compass,
    title: 'Diseño con propósito',
    description:
      'Líneas equilibradas y espacios pensados para vivir el mar.',
  },
  {
    icon: Waves,
    title: 'Conexión con el mar',
    description:
      'Una experiencia que integra el entorno y cada momento a bordo.',
  },
  {
    icon: ShieldCheck,
    title: 'Ingeniería y detalle',
    description:
      'Tecnología, conocimiento y cuidado en cada decisión.',
  },
];

/* =====================================================
   IDENTIDAD DE MARCA
===================================================== */

function BrandLogo({ footer = false }) {
  return (
    <a
      className={`brand ${footer ? 'brand--footer' : ''}`}
      href="#inicio"
      aria-label="Absolute Yachts, inicio"
    >
      <svg
        className="brand-symbol"
        viewBox="0 0 100 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8 51 L48 7 L48 51 Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M52 14 C66 26 79 35 94 39 C78 43 64 43 52 39"
          stroke="#D9A441"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 57 H91"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.8"
        />
        <path
          d="M22 63 C34 59 44 59 56 63 C67 66 77 66 88 62"
          stroke="#D9A441"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>

      <span className="brand-name">
        ABSOLUTE
        <small>YACHTS</small>
      </span>
    </a>
  );
}

/* =====================================================
   NAVEGACIÓN
===================================================== */

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <BrandLogo />

      <nav
        id="main-navigation"
        className={`nav ${menuOpen ? 'nav--open' : ''}`}
        aria-label="Navegación principal"
      >
        {NAV_LINKS.map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}

        <a
          className="nav-cta"
          href="#contacto"
          onClick={() => setMenuOpen(false)}
        >
          Solicitar información
          <ArrowUpRight size={16} />
        </a>
      </nav>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((previous) => !previous)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </header>
  );
}

/* =====================================================
   ELEMENTOS REUTILIZABLES
===================================================== */

function SectionEyebrow({ children, light = false }) {
  return (
    <div className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>
      <span />
      {children}
    </div>
  );
}

/* =====================================================
   HERO
===================================================== */

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div
        className="hero-image"
        role="img"
        aria-label="Yate de lujo navegando en mar abierto"
      />

      <div className="hero-shade" />

      <div className="hero-content">
        <SectionEyebrow light>
          Excelencia náutica italiana
        </SectionEyebrow>

        <h1>
          El mar.
          <br />
          <em>Sin límites.</em>
        </h1>

        <p>
          Hay destinos que se visitan. Y experiencias que permanecen
          para siempre. Descubre una nueva forma de vivir el horizonte.
        </p>

        <div className="hero-actions">
          <a className="button button--gold" href="#modelos">
            Explorar embarcaciones
            <ArrowUpRight size={17} />
          </a>

          <a className="text-link text-link--light" href="#marca">
            Descubrir Absolute
            <ArrowDown size={15} />
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>01 — 03</span>
        <span className="hero-line" />
        <span>Diseñado para ir más allá</span>
      </div>

      <div className="hero-vertical">
        ABSOLUTE YACHTS · ITALY
      </div>
    </section>
  );
}

/* =====================================================
   PRESENTACIÓN DE MARCA
===================================================== */

function BrandSection() {
  return (
    <section className="brand-section section-pad" id="marca">
      <div className="brand-copy">
        <SectionEyebrow>
          Una forma de entender el mar
        </SectionEyebrow>

        <h2>
          El diseño italiano
          <br />
          se encuentra con <em>el horizonte.</em>
        </h2>

        <p className="lead">
          Absolute Yachts transforma la ingeniería, la creatividad
          y la pasión por el mar en embarcaciones concebidas para
          disfrutar cada instante.
        </p>

        <p>
          Una filosofía donde cada detalle tiene un propósito:
          crear espacios que conectan con el entorno, tecnología
          que acompaña cada travesía y una experiencia a bordo
          que se siente extraordinaria.
        </p>

        <a
          className="text-link"
          href="https://www.absoluteyachts.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conoce la marca
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="brand-visual">
        <img
          src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1300&q=85"
          alt="Yate de lujo visto desde el exterior"
          loading="lazy"
        />

        <div className="image-caption">
          <span>01 / FILOSOFÍA</span>
          <span>La belleza de cada detalle</span>
        </div>

        <div className="brand-stamp">
          <span>MADE IN</span>
          <strong>ITALY</strong>
          <span>DESIGN & PASSION</span>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   GALERÍA DE EMBARCACIONES
===================================================== */


function ModelsSection({ onSelectModel }) {
  const [activeFamily, setActiveFamily] = useState('NAVETTA');
  const [activeYacht, setActiveYacht] = useState(0);
  const [activePhoto, setActivePhoto] = useState(0);

  const families = ['NAVETTA', 'FLYBRIDGE', 'COUPÉ'];

  const filteredYachts = YACHTS.filter(
    (item) => item.family === activeFamily
  );

  const yacht = filteredYachts[activeYacht];
  const photo = yacht?.images[activePhoto];

  const changeFamily = (family) => {
    setActiveFamily(family);
    setActiveYacht(0);
    setActivePhoto(0);
  };

  const changeYacht = (index) => {
    setActiveYacht(index);
    setActivePhoto(0);
  };

  const changePhoto = (direction) => {
    if (!yacht) return;

    setActivePhoto((current) => {
      const total = yacht.images.length;
      return (current + direction + total) % total;
    });
  };

  return (
    <section className="models-section section-pad" id="modelos">
      <div className="section-heading">
        <div>
          <SectionEyebrow>La colección</SectionEyebrow>

          <h2>
            Una invitación a
            <br />
            <em>ir más lejos.</em>
          </h2>
        </div>

        <p>
          Descubre embarcaciones donde el diseño, el confort y la
          innovación se unen para crear una experiencia de
          navegación excepcional.
        </p>
      </div>

      <div className="family-filters" aria-label="Filtrar por familia">
        {families.map((family) => (
          <button
            type="button"
            key={family}
            className={
              activeFamily === family
                ? 'family-filter family-filter--active'
                : 'family-filter'
            }
            onClick={() => changeFamily(family)}
            aria-pressed={activeFamily === family}
          >
            {family}
          </button>
        ))}
      </div>

      {filteredYachts.length > 0 ? (
        <div className="model-showcase">
          <div className="model-gallery">
            <div className="model-image-wrap">
              <img
                key={`${activeFamily}-${activeYacht}-${activePhoto}`}
                className="gallery-main-image"
                src={photo.src}
                alt={photo.alt}
              />

              <span className="model-image-index">
                0{activePhoto + 1} / 0{yacht.images.length}
              </span>

              <button
                type="button"
                className="gallery-arrow gallery-arrow--left"
                onClick={() => changePhoto(-1)}
                aria-label="Fotografía anterior"
              >
                <ChevronLeft size={25} />
              </button>

              <button
                type="button"
                className="gallery-arrow gallery-arrow--right"
                onClick={() => changePhoto(1)}
                aria-label="Fotografía siguiente"
              >
                <ChevronRight size={25} />
              </button>

              <div className="gallery-progress">
                <span
                  style={{
                    width: `${((activePhoto + 1) / yacht.images.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="gallery-thumbnails">
              {yacht.images.map((item, index) => (
                <button
                  type="button"
                  key={`${yacht.name}-${index}`}
                  className={
                    activePhoto === index
                      ? 'gallery-thumb gallery-thumb--active'
                      : 'gallery-thumb'
                  }
                  onClick={() => setActivePhoto(index)}
                  aria-label={`Ver fotografía ${index + 1} de ${yacht.name}`}
                  aria-pressed={activePhoto === index}
                >
                  <img src={item.src} alt="" loading="lazy" />
                </button>
              ))}
            </div>

            <div className="gallery-caption">
              <span>EXPLORA CADA DETALLE</span>
              <span>{yacht.name.toUpperCase()}</span>
            </div>
          </div>

          <div className="model-info">
            <span className="model-type">{yacht.type}</span>

            <h3>{yacht.name}</h3>

            <p>{yacht.description}</p>

            <div className="model-specs">
              <div>
                <small>ESLORA / REFERENCIA</small>
                <strong>{yacht.length}</strong>
              </div>

              <div>
                <small>DISEÑO</small>
                <strong>{yacht.beam}</strong>
              </div>
            </div>

            <a
              className="button button--dark"
              href="#contacto"
              onClick={() => onSelectModel(yacht.name)}
            >
              Solicitar información
              <ArrowUpRight size={16} />
            </a>

            <div className="model-controls">
              <div className="model-dots">
                {filteredYachts.map((item, index) => (
                  <button
                    type="button"
                    key={item.name}
                    className={
                      activeYacht === index ? 'dot dot--active' : 'dot'
                    }
                    onClick={() => changeYacht(index)}
                    aria-label={`Ver ${item.name}`}
                    aria-pressed={activeYacht === index}
                  />
                ))}
              </div>

              <div className="model-arrows">
                <button
                  type="button"
                  onClick={() =>
                    changeYacht(
                      (activeYacht - 1 + filteredYachts.length) %
                        filteredYachts.length
                    )
                  }
                  aria-label="Modelo anterior"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    changeYacht(
                      (activeYacht + 1) % filteredYachts.length
                    )
                  }
                  aria-label="Modelo siguiente"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="family-empty">
          <span>PRÓXIMAMENTE</span>
          <h3>{activeFamily}</h3>
          <p>
            Estamos preparando la selección de embarcaciones de esta
            familia. Muy pronto podrás descubrir todos sus modelos.
          </p>
        </div>
      )}

      <p className="data-note">
        * Imágenes de ambientación. Las características técnicas
        y disponibilidad deben confirmarse con el distribuidor oficial.
      </p>
    </section>
  );
}


/* =====================================================
   EXPERIENCIA
===================================================== */

function ExperienceSection() {
  return (
    <section className="experience" id="experiencia">
      <img
        src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=85"
        alt="Mar abierto iluminado por el sol"
        loading="lazy"
      />

      <div className="experience-overlay" />

      <div className="experience-content">
        <SectionEyebrow light>
          La experiencia Absolute
        </SectionEyebrow>

        <h2>
          No es solo
          <br />
          llegar. Es <em>sentir.</em>
        </h2>

        <p>
          La brisa, la luz, el silencio del mar. Cada travesía
          abre la puerta a momentos que merecen ser vividos sin prisa.
        </p>

        <a className="text-link text-link--light" href="#contacto">
          Empieza tu próxima travesía
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="experience-side">
        THE ART OF NAVIGATION
      </div>
    </section>
  );
}

/* =====================================================
   VALORES
===================================================== */

function ValuesSection() {
  return (
    <section className="values section-pad">
      <SectionEyebrow>La esencia de navegar</SectionEyebrow>

      <div className="values-grid">
        {VALUES.map(({ icon: Icon, title, description }, index) => (
          <article className="value-card" key={title}>
            <span className="value-number">
              0{index + 1}
            </span>

            <div className="value-icon">
              <Icon />
            </div>

            <h3>{title}</h3>

            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   CONTACTO
===================================================== */

function ContactSection({ selectedModel }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setSending(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/mzeejepy", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSent(true);
      } else {
        setError(
          "No pudimos enviar tu solicitud. Inténtalo nuevamente."
        );
      }
    } catch (err) {
      setError(
        "Ocurrió un problema de conexión. Verifica tu internet e inténtalo otra vez."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact-section section-pad" id="contacto">
      <div className="contact-intro">
        <SectionEyebrow>
          Hablemos de tu próximo destino
        </SectionEyebrow>

        <h2>
          El siguiente
          <br />
          capítulo <em>comienza aquí.</em>
        </h2>

        <p>
          Cuéntanos qué estás buscando. Nuestro equipo podrá
          orientarte para encontrar la embarcación que conecte
          con tu forma de vivir el mar.
        </p>

        <div className="contact-note">
          <Anchor size={18} />

          <span>
            Atención personalizada
            <br />
            <strong>Grupo Todomar · Colombia</strong>
          </span>
        </div>
      </div>

      <div className="form-panel">
        {sent ? (
          <div className="success-state" role="status">
            <CheckCircle2 size={42} />

            <h3>¡Gracias por contactarnos!</h3>

            <p>
              Tu solicitud fue enviada correctamente.
              Nuestro equipo podrá ponerse en contacto contigo.
            </p>

            <button
              type="button"
              className="button button--dark"
              onClick={() => setSent(false)}
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-title">
              <span>FORMULARIO DE CONTACTO</span>
              <small>* Campos obligatorios</small>
            </div>

            <label>
              Nombre completo *
              <input
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                autoComplete="name"
                minLength={3}
                required
              />
            </label>

            <div className="form-row">
              <label>
                Correo electrónico *
                <input
                  name="email"
                  type="email"
                  placeholder="nombre@correo.com"
                  autoComplete="email"
                  required
                />
              </label>

              <label>
                Teléfono *
                <input
                  name="telefono"
                  type="tel"
                  placeholder="+57 300 000 0000"
                  autoComplete="tel"
                  minLength={7}
                  required
                />
              </label>
            </div>

            <label>
              Modelo de interés
              <select
                name="modelo"
                defaultValue={selectedModel}
                key={selectedModel}
              >
                <option value="">Selecciona un modelo</option>

                {YACHTS.map((yacht) => (
                  <option key={yacht.name} value={yacht.name}>
                    {yacht.name}
                  </option>
                ))}

                <option value="Quiero asesoría">
                  Quiero asesoría
                </option>
              </select>
            </label>

            <label>
              Mensaje *
              <textarea
                name="mensaje"
                placeholder="Cuéntanos qué experiencia estás buscando..."
                rows={4}
                minLength={10}
                required
              />
            </label>

            {error && (
              <p role="alert" className="form-error">
                {error}
              </p>
            )}

            <button
              className="button button--dark form-submit"
              type="submit"
              disabled={sending}
            >
              {sending ? "Enviando..." : "Enviar solicitud"}
              {!sending && <ArrowUpRight size={16} />}
            </button>

            <p className="form-disclaimer">
              Tus datos serán utilizados para atender tu solicitud
              de información y contacto.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

/* =====================================================
   PIE DE PÁGINA
===================================================== */

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <BrandLogo footer />

          <p>
            El arte de vivir
            <br />
            el mar, sin límites.
          </p>
        </div>

        <div className="footer-links">
          <span>EXPLORA</span>

          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>

        <div className="footer-links">
          <span>DESCUBRE</span>

          <a
            href="https://www.absoluteyachts.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sitio web oficial
            <ArrowUpRight size={13} />
          </a>

          <a href="#contacto">Asesoría comercial</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} ABSOLUTE YACHTS · CONCEPTO DE LANDING PAGE
        </span>

        <span>
          DISEÑO, INNOVACIÓN Y PASIÓN POR EL MAR
        </span>
      </div>
    </footer>
  );
}

/* =====================================================
   APLICACIÓN PRINCIPAL
===================================================== */

function App() {
  const [selectedModel, setSelectedModel] = useState('');

  useEffect(() => {
    const elements = document.querySelectorAll(
      '.section-pad, .value-card'
    );

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.classList.add('is-visible');
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <BrandSection />

        <ModelsSection onSelectModel={setSelectedModel} />

        <ExperienceSection />
        <ValuesSection />

        <ContactSection selectedModel={selectedModel} />
      </main>

      <Footer />

      <a
        href="#contacto"
        className="floating-contact"
        aria-label="Ir al formulario de contacto"
      >
        <ArrowUpRight />
      </a>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
