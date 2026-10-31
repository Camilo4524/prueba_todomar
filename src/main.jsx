import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Anchor, Compass, Waves, ShieldCheck, Instagram, Facebook, Linkedin, CheckCircle2 } from 'lucide-react';
import './styles.css';

const yachts = [
  {
    name: 'Navetta 75',
    type: 'THE GRANDEUR OF SPACE',
    description: 'Una nueva dimensión de amplitud, privacidad y conexión con el mar. Diseñada para disfrutar cada travesía sin renunciar al confort.',
    length: '22,82 m',
    beam: '5,61 m',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1400&q=85',
    alt: 'Yate de lujo navegando en aguas azules'
  },
  {
    name: 'Navetta 62',
    type: 'TIMELESS ELEGANCE',
    description: 'Equilibrio entre líneas elegantes, espacios luminosos y soluciones inteligentes para vivir el mar con libertad.',
    length: '18, metres',
    beam: 'Diseño walkaround',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85',
    alt: 'Embarcación de recreo sobre el mar'
  },
  {
    name: 'Navetta 58',
    type: 'FREEDOM, REDEFINED',
    description: 'La esencia de la navegación contemporánea: espacios acogedores, diseño funcional y una relación única con el horizonte.',
    length: '17, metres',
    beam: 'Espacios abiertos',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85',
    alt: 'Paisaje costero mediterráneo'
  }
];

const navLinks = [
  ['La marca', '#marca'],
  ['Embarcaciones', '#modelos'],
  ['Experiencia', '#experiencia'],
  ['Contacto', '#contacto']
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <a className="brand" href="#inicio" aria-label="Absolute Yachts, inicio">
        <span className="brand-mark">A</span>
        <span className="brand-name">ABSOLUTE<small>YACHTS</small></span>
      </a>
      <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegación principal">
        {navLinks.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="#contacto" onClick={() => setOpen(false)}>Solicitar información <ArrowUpRight size={15}/></a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>
        {open ? <X/> : <Menu/>}
      </button>
    </header>
  );
}

function SectionEyebrow({ children, light = false }) {
  return <div className={`eyebrow ${light ? 'eyebrow--light' : ''}`}><span />{children}</div>;
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-image" role="img" aria-label="Yate de lujo navegando en mar abierto" />
      <div className="hero-shade" />
      <div className="hero-content">
        <SectionEyebrow light>Excelencia náutica italiana</SectionEyebrow>
        <h1>El mar.<br/><em>Sin límites.</em></h1>
        <p>Hay destinos que se visitan. Y experiencias que permanecen para siempre. Descubre una nueva forma de vivir el horizonte.</p>
        <div className="hero-actions">
          <a className="button button--gold" href="#modelos">Explorar embarcaciones <ArrowUpRight size={17}/></a>
          <a className="text-link text-link--light" href="#marca">Descubrir Absolute <ArrowDown size={15}/></a>
        </div>
      </div>
      <div className="hero-bottom">
        <span>01 — 03</span><span className="hero-line"/><span>Diseñado para ir más allá</span>
      </div>
      <div className="hero-vertical">ABSOLUTE YACHTS · ITALY</div>
    </section>
  );
}

function BrandSection() {
  return (
    <section className="brand-section section-pad" id="marca">
      <div className="brand-copy">
        <SectionEyebrow>Una forma de entender el mar</SectionEyebrow>
        <h2>El diseño italiano<br/>se encuentra con <em>el horizonte.</em></h2>
        <p className="lead">Absolute Yachts transforma la ingeniería, la creatividad y la pasión por el mar en embarcaciones concebidas para disfrutar cada instante.</p>
        <p>Una filosofía donde cada detalle tiene un propósito: crear espacios que conectan con el entorno, tecnología que acompaña cada travesía y una experiencia a bordo que se siente extraordinaria.</p>
        <a className="text-link" href="https://www.absoluteyachts.com/en/" target="_blank" rel="noreferrer">Conoce la marca <ArrowUpRight size={16}/></a>
      </div>
      <div className="brand-visual">
        <img src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1300&q=85" alt="Yate de lujo visto desde el exterior" loading="lazy"/>
        <div className="image-caption"><span>01 / FILOSOFÍA</span><span>La belleza de cada detalle</span></div>
        <div className="brand-stamp"><span>MADE IN</span><strong>ITALY</strong><span>DESIGN & PASSION</span></div>
      </div>
    </section>
  );
}

function ModelsSection() {
  const [active, setActive] = useState(0);
  const yacht = yachts[active];
  return (
    <section className="models-section section-pad" id="modelos">
      <div className="section-heading">
        <div><SectionEyebrow>La colección</SectionEyebrow><h2>Una invitación a<br/><em>ir más lejos.</em></h2></div>
        <p>Descubre embarcaciones donde el diseño, el confort y la innovación se unen para crear una experiencia de navegación excepcional.</p>
      </div>
      <div className="model-showcase">
        <div className="model-image-wrap">
          <img key={yacht.image} src={yacht.image} alt={yacht.alt} loading="lazy"/>
          <span className="model-image-index">0{active + 1} / 03</span>
        </div>
        <div className="model-info">
          <span className="model-type">{yacht.type}</span>
          <h3>{yacht.name}</h3>
          <p>{yacht.description}</p>
          <div className="model-specs">
            <div><small>ESLORA / REFERENCIA</small><strong>{yacht.length}</strong></div>
            <div><small>DISEÑO</small><strong>{yacht.beam}</strong></div>
          </div>
          <a className="button button--dark" href="#contacto" onClick={() => document.getElementById('modelo-interes').value = yacht.name}>Solicitar información <ArrowUpRight size={16}/></a>
          <div className="model-controls">
            <div className="model-dots">
              {yachts.map((item, index) => <button key={item.name} className={active === index ? 'dot dot--active' : 'dot'} onClick={() => setActive(index)} aria-label={`Ver ${item.name}`} aria-pressed={active === index}/>)}
            </div>
            <div className="model-arrows">
              <button onClick={() => setActive((active + 2) % 3)} aria-label="Modelo anterior">←</button>
              <button onClick={() => setActive((active + 1) % 3)} aria-label="Modelo siguiente">→</button>
            </div>
          </div>
        </div>
      </div>
      <p className="data-note">* Imágenes de ambientación. Las características técnicas y disponibilidad deben confirmarse con el distribuidor oficial.</p>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="experience" id="experiencia">
      <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=85" alt="Mar abierto iluminado por el sol" loading="lazy"/>
      <div className="experience-overlay"/>
      <div className="experience-content">
        <SectionEyebrow light>La experiencia Absolute</SectionEyebrow>
        <h2>No es solo<br/>llegar. Es <em>sentir.</em></h2>
        <p>La brisa, la luz, el silencio del mar. Cada travesía abre la puerta a momentos que merecen ser vividos sin prisa.</p>
        <a className="text-link text-link--light" href="#contacto">Empieza tu próxima travesía <ArrowUpRight size={16}/></a>
      </div>
      <div className="experience-side">THE ART OF NAVIGATION</div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    [<Compass/>, 'Diseño con propósito', 'Líneas equilibradas y espacios pensados para vivir el mar.'],
    [<Waves/>, 'Conexión con el mar', 'Una experiencia que integra el entorno y cada momento a bordo.'],
    [<ShieldCheck/>, 'Ingeniería y detalle', 'Tecnología, conocimiento y cuidado en cada decisión.']
  ];
  return (
    <section className="values section-pad">
      <SectionEyebrow>La esencia de navegar</SectionEyebrow>
      <div className="values-grid">
        {values.map(([icon, title, body], i) => <article className="value-card" key={title}><span className="value-number">0{i + 1}</span><div className="value-icon">{icon}</div><h3>{title}</h3><p>{body}</p></article>)}
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setError('');
    setSent(true);
    form.reset();
  }
  return (
    <section className="contact-section section-pad" id="contacto">
      <div className="contact-intro">
        <SectionEyebrow>Hablemos de tu próximo destino</SectionEyebrow>
        <h2>El siguiente<br/>capítulo <em>comienza aquí.</em></h2>
        <p>Cuéntanos qué estás buscando. Nuestro equipo podrá orientarte para encontrar la embarcación que conecte con tu forma de vivir el mar.</p>
        <div className="contact-note"><Anchor size={18}/><span>Atención personalizada<br/><strong>Grupo Todomar · Colombia</strong></span></div>
      </div>
      <div className="form-panel">
        {sent ? (
          <div className="success-state" role="status"><CheckCircle2 size={42}/><h3>¡Gracias por contactarnos!</h3><p>Tu solicitud fue validada en esta demostración. Para recibir contactos reales, este formulario debe conectarse a un servicio de envío.</p><button className="button button--dark" onClick={() => setSent(false)}>Enviar otra solicitud</button></div>
        ) : (
          <form onSubmit={submit}>
            <div className="form-title"><span>FORMULARIO DE CONTACTO</span><small>* Campos obligatorios</small></div>
            <label>Nombre completo *<input name="nombre" type="text" placeholder="Tu nombre" autoComplete="name" required minLength="3"/></label>
            <div className="form-row">
              <label>Correo electrónico *<input name="email" type="email" placeholder="nombre@correo.com" autoComplete="email" required/></label>
              <label>Teléfono *<input name="telefono" type="tel" placeholder="+57 300 000 0000" autoComplete="tel" required minLength="7"/></label>
            </div>
            <label>Modelo de interés
              <select name="modelo" id="modelo-interes" defaultValue=""><option value="">Selecciona un modelo</option>{yachts.map(y => <option key={y.name}>{y.name}</option>)}<option>Quiero asesoría</option></select>
            </label>
            <label>Mensaje *<textarea name="mensaje" placeholder="Cuéntanos qué experiencia estás buscando..." rows="4" required minLength="10"/></label>
            {error && <p className="form-error">{error}</p>}
            <button className="button button--dark form-submit" type="submit">Enviar solicitud <ArrowUpRight size={16}/></button>
            <p className="form-disclaimer">Esta es una demostración académica: el envío no transmite datos a un servidor ni a un CRM.</p>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <a className="brand brand--footer" href="#inicio"><span className="brand-mark">A</span><span className="brand-name">ABSOLUTE<small>YACHTS</small></span></a>
        <p>El arte de vivir<br/>el mar, sin límites.</p>
        <div className="footer-links"><span>EXPLORA</span>{navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        <div className="footer-links"><span>DESCUBRE</span><a href="https://www.absoluteyachts.com/en/" target="_blank" rel="noreferrer">Sitio web oficial <ArrowUpRight size={13}/></a><a href="#contacto">Asesoría comercial</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} ABSOLUTE YACHTS · CONCEPTO DE LANDING PAGE</span><span>DISEÑO, INNOVACIÓN Y PASIÓN POR EL MAR</span></div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.section-pad, .value-card').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <><Header/><main><Hero/><BrandSection/><ModelsSection/><ExperienceSection/><ValuesSection/><ContactSection/></main><Footer/><a href="#contacto" className="floating-contact" aria-label="Ir al formulario de contacto"><ArrowUpRight/></a></>;
}

createRoot(document.getElementById('root')).render(<App/>);
