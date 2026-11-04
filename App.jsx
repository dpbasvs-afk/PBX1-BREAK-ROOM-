import { useEffect, useState } from 'react';

const PHONE = '+917814502574';
const WHATSAPP = 'https://wa.me/917814502574';
const MAPS =
  'https://www.google.com/maps/search/?api=1&query=PBX1+Break+Room+SCO-63+Leela+Bhawan+Market+Patiala';

const links = [
  ['Experience', '#experience'],
  ['Games', '#games'],
  ['Gallery', '#gallery'],
  ['Location', '#location'],
];

const categories = [
  {
    number: '01',
    title: 'Console gaming',
    note: 'Platform availability to be confirmed',
    image:
      'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=1100&q=85',
    alt: 'Close-up of a game controller in dramatic blue light',
  },
  {
    number: '02',
    title: 'PC gaming',
    note: 'Setup details to be confirmed',
    image:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1100&q=85',
    alt: 'Gaming screens glowing in a dark room',
  },
  {
    number: '03',
    title: 'Multiplayer',
    note: 'Experiences to be confirmed',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1100&q=85',
    alt: 'Gaming setup lit with vibrant neon color',
  },
  {
    number: '04',
    title: 'Competitive play',
    note: 'Availability to be confirmed',
    image:
      'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1100&q=85',
    alt: 'Gaming arena with colorful lights and screens',
  },
];

const gallery = [
  {
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1100&q=85',
    alt: 'Neon-lit gaming station',
    label: 'The atmosphere',
    shape: 'gallery-wide',
  },
  {
    image:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=85',
    alt: 'Colorful gaming monitors',
    label: 'In the zone',
    shape: 'gallery-tall',
  },
  {
    image:
      'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=85',
    alt: 'Game controller detail',
    label: 'Ready when you are',
    shape: 'gallery-short',
  },
];

const highlights = [
  {
    number: '01',
    title: 'Gaming experience',
    text: 'A change of scene, a fresh challenge, and a reason to press play.',
  },
  {
    number: '02',
    title: 'Time with friends',
    text: 'Make room for shared moments, friendly rivalries and one more round.',
  },
  {
    number: '03',
    title: 'Entertainment',
    text: 'Step away from the everyday and into a different kind of break.',
  },
  {
    number: '04',
    title: 'Competitive spirit',
    text: 'Bring your focus, find your rhythm and enjoy the thrill of play.',
  },
];

function Arrow({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' brand-footer' : ''}`} href="#home" aria-label="PBX1 Break Room home">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand-words">
        <strong>PBX1</strong>
        <small>BREAK ROOM</small>
      </span>
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.13 },
    );
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen);
    return () => document.body.classList.remove('menu-is-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{styles}</style>
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <button
            className={`menu-toggle${menuOpen ? ' active' : ''}`}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav
            className={`main-nav${menuOpen ? ' nav-open' : ''}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            <a href="#home" onClick={closeMenu}>Home</a>
            {links.map(([label, target]) => (
              <a href={target} key={target} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Get in touch <Arrow diagonal />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-image" />
          <div className="hero-grid" />
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow"><span className="live-dot" /> PATIALA, PUNJAB <i /> GAME ON</div>
            <h1 id="hero-title">
              YOUR GAME.<br />
              YOUR <span>ZONE.</span><br />
              YOUR BREAK<span className="period">.</span>
            </h1>
            <p className="hero-copy">
              Step into PBX1 Break Room — your destination for gaming,
              entertainment and unforgettable sessions.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                Explore the experience <Arrow />
              </a>
              <a className="button button-ghost" href="#contact">Contact us</a>
            </div>
          </div>
          <div className="hero-wordmark" aria-hidden="true">PBX1 <span>BREAK ROOM</span></div>
          <a className="scroll-cue" href="#experience"><span /> SCROLL TO EXPLORE</a>
          <div className="hero-index">01 <span>/</span> 05</div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="experience-image-wrap reveal">
            <img
              className="experience-image"
              src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1300&q=85"
              alt="Gaming screens in a dramatic neon-lit room"
              loading="lazy"
            />
            <div className="image-caption"><span>PBX1 / THE EXPERIENCE</span><span>01 — 04</span></div>
            <div className="image-outline" />
          </div>
          <div className="experience-copy reveal">
            <div className="eyebrow"><span className="eyebrow-line" /> A DIFFERENT KIND OF BREAK</div>
            <h2>MORE THAN<br />JUST A <span>GAME.</span></h2>
            <p className="body-copy">
              Some breaks deserve a little more excitement. PBX1 Break Room is
              a gaming destination in Patiala where you can step out of the
              everyday, discover a new experience and make time for play.
            </p>
            <a className="text-link" href="#games">Find your next level <Arrow /></a>
            <div className="experience-coordinate">30°20&apos; N &nbsp; 76°24&apos; E</div>
          </div>
          <div className="section-watermark" aria-hidden="true">PLAY</div>
        </section>

        <section className="games section-pad" id="games">
          <div className="section-heading reveal">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> PICK YOUR PLAYSTYLE</div>
              <h2>FIND YOUR<br /><span>GAME.</span></h2>
            </div>
            <p className="section-intro">
              However you like to play, there&apos;s a whole world in every
              session. Choose a direction and make it your own.
            </p>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <article className="category-card reveal" key={category.number}>
                <img src={category.image} alt={category.alt} loading="lazy" />
                <div className="category-shade" />
                <span className="category-number">{category.number} / 04</span>
                <div className="category-info">
                  <h3>{category.title}</h3>
                  <span>{category.note}</span>
                </div>
                <span className="category-arrow" aria-hidden="true"><Arrow diagonal /></span>
              </article>
            ))}
          </div>
          <p className="owner-note">
            <span aria-hidden="true">✳</span> Suggested categories only — final
            availability and equipment to be confirmed by PBX1 Break Room.
          </p>
        </section>

        <section className="gallery section-pad" id="gallery">
          <div className="gallery-heading reveal">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> A TASTE OF THE GAME</div>
              <h2>STEP INTO<br /><span>THE SCENE.</span></h2>
            </div>
            <p className="section-intro">The lights. The focus. The feeling of being right where you want to be.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <figure className={`gallery-item ${item.shape} reveal`} key={item.label}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <div className="gallery-overlay" />
                <figcaption><span>0{index + 1} — {item.label}</span><Arrow diagonal /></figcaption>
              </figure>
            ))}
          </div>
          <p className="gallery-note">Illustrative gaming imagery. Images are not photographs of the PBX1 Break Room premises.</p>
        </section>

        <section className="why section-pad">
          <div className="why-heading reveal">
            <div className="eyebrow"><span className="eyebrow-line" /> MAKE TIME FOR PLAY</div>
            <h2>YOUR BREAK.<br /><span>YOUR RULES.</span></h2>
          </div>
          <div className="highlight-list">
            {highlights.map((item) => (
              <article className="highlight-row reveal" key={item.number}>
                <span className="highlight-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="highlight-cross" aria-hidden="true">+</span>
              </article>
            ))}
          </div>
        </section>

        <section className="location section-pad" id="location">
          <div className="location-visual reveal">
            <div className="map-grid" aria-hidden="true" />
            <div className="map-orbit orbit-one" />
            <div className="map-orbit orbit-two" />
            <div className="map-pin"><span>PBX1</span></div>
            <div className="map-label"><span className="live-dot" /> LEELA BHAWAN MARKET <span>30°20&apos; N</span></div>
            <div className="map-coordinates">PATIALA<br />PUNJAB, INDIA</div>
            <span className="map-plus plus-one">+</span><span className="map-plus plus-two">+</span>
          </div>
          <div className="location-content reveal" id="contact">
            <div className="eyebrow"><span className="eyebrow-line" /> FIND YOUR WAY HERE</div>
            <h2>MEET US<br /><span>IN PATIALA.</span></h2>
            <div className="address-block">
              <span className="detail-label">THE ADDRESS</span>
              <address>
                PBX1 Break Room<br />
                SCO-63 New, Leela Bhawan Market,<br />
                Bank Colony, Patiala,<br />
                Punjab 147001
              </address>
            </div>
            <div className="address-block phone-block">
              <span className="detail-label">GET IN TOUCH</span>
              <a className="phone-number" href={`tel:${PHONE}`}>+91 78145 02574 <Arrow diagonal /></a>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href={`tel:${PHONE}`} aria-label="Call PBX1 Break Room">
                Call now <Arrow />
              </a>
              <a className="button button-ghost" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Enquire on WhatsApp">
                WhatsApp <Arrow diagonal />
              </a>
            </div>
            <a className="directions-link" href={MAPS} target="_blank" rel="noreferrer">
              Open directions in Google Maps <Arrow diagonal />
            </a>
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-lines" aria-hidden="true" />
          <div className="cta-content reveal">
            <div className="eyebrow"><span className="live-dot" /> YOUR NEXT BREAK STARTS HERE</div>
            <h2>READY TO LEVEL UP<br />YOUR <span>BREAK?</span></h2>
            <p>Get in touch with PBX1 Break Room.</p>
            <a className="button button-primary" href="#contact">Contact PBX1 Break Room <Arrow /></a>
          </div>
          <div className="cta-orb" aria-hidden="true" />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-col">
            <Brand footer />
            <p>Your game. Your zone.<br />Your break.</p>
          </div>
          <div className="footer-col">
            <span className="footer-label">EXPLORE</span>
            <a href="#home">Home</a>
            {links.map(([label, target]) => <a href={target} key={target}>{label}</a>)}
          </div>
          <div className="footer-col footer-contact">
            <span className="footer-label">SAY HELLO</span>
            <a href="tel:+917814502574">+91 78145 02574</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp enquiry <Arrow diagonal /></a>
            <a href={MAPS} target="_blank" rel="noreferrer">SCO-63 New, Leela Bhawan Market,<br />Bank Colony, Patiala, Punjab 147001</a>
          </div>
          <a className="back-top" href="#home" aria-label="Back to top"><Arrow diagonal /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} PBX1 BREAK ROOM</span>
          <span>MADE FOR THE LOVE OF PLAY <i>✳</i></span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  );
}

const styles = `
  :root{font-family:"DM Sans",sans-serif;color:#f5f4f8;background:#08090d;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;font-optical-sizing:auto;font-weight:400;--bg:#08090d;--panel:#11131b;--purple:#a87aff;--blue:#6c8cff;--muted:#a3a2ad;--line:rgba(255,255,255,.12)}
  *{box-sizing:border-box}
  html{scroll-behavior:smooth;scroll-padding-top:82px}
  body{margin:0;min-width:320px;background:var(--bg)}
  body.menu-is-open{overflow:hidden}
  a{color:inherit;text-decoration:none}
  button{font:inherit}
  ::selection{background:#a87aff;color:#08090d}
  .site-header{position:absolute;z-index:20;inset:0 0 auto;height:82px;border-bottom:1px solid rgba(255,255,255,.12)}
  .nav-shell{height:100%;max-width:1440px;padding:0 7.1%;margin:auto;display:flex;align-items:center;justify-content:space-between}
  .brand{display:inline-flex;align-items:center;gap:11px;position:relative;z-index:22}
  .brand-mark{width:26px;height:29px;display:flex;align-items:flex-end;gap:3px;transform:skew(-20deg)}
  .brand-mark span{display:block;width:6px;background:linear-gradient(180deg,#bd8bff,#6a6bff);box-shadow:0 0 13px #9a6cff80}
  .brand-mark span:nth-child(1){height:62%}.brand-mark span:nth-child(2){height:100%}.brand-mark span:nth-child(3){height:80%}
  .brand-words{display:flex;flex-direction:column;line-height:1}
  .brand-words strong{font:700 19px "Space Grotesk",sans-serif;letter-spacing:.13em}
  .brand-words small{font-size:8px;letter-spacing:.25em;margin-top:5px;color:#c2c0cb}
  .main-nav{display:flex;align-items:center;gap:35px}
  .main-nav>a:not(.nav-contact){font-size:12px;color:#dedde5;transition:color .2s}
  .main-nav>a:hover,.footer-col a:hover{color:#b794ff}
  .nav-contact{height:40px;padding:0 16px;display:flex;gap:14px;align-items:center;border:1px solid rgba(255,255,255,.32);font-size:11px;letter-spacing:.03em;transition:background .25s,border .25s}
  .nav-contact:hover{background:#ffffff12;border-color:#bb99ff}
  .arrow-icon{height:16px;width:16px;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;flex:none}
  .menu-toggle{display:none}
  .hero{position:relative;min-height:730px;height:min(890px,100svh);max-height:1000px;display:flex;align-items:center;overflow:hidden;padding:100px 11.2% 94px}
  .hero-image{position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(8,9,13,.97) 0%,rgba(8,9,13,.84) 37%,rgba(8,9,13,.3) 73%,rgba(8,9,13,.38) 100%),linear-gradient(0deg,#08090d 0%,transparent 25%,rgba(8,9,13,.26) 100%),url("https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2200&q=90");background-size:cover;background-position:center 45%;transform:scale(1.015);animation:hero-drift 22s ease-in-out infinite alternate}
  .hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:88px 88px;mask-image:linear-gradient(90deg,black,transparent 90%)}
  .hero-content{position:relative;z-index:2;max-width:700px;padding-top:34px;animation:rise-in .85s .1s both}
  .eyebrow{display:flex;align-items:center;gap:11px;color:#c3bdce;font-size:9px;letter-spacing:.2em;font-weight:600}
  .hero-eyebrow{margin-bottom:28px;color:#e3def0}
  .hero-eyebrow i{width:3px;height:3px;background:#a87aff;border-radius:50%;margin:0 5px}
  .live-dot{height:6px;width:6px;background:#bb8cff;display:inline-block;box-shadow:0 0 12px #a87aff;border-radius:50%}
  .hero h1,.section-heading h2,.experience-copy h2,.gallery-heading h2,.why-heading h2,.location-content h2,.cta-content h2{font:600 clamp(56px,8.05vw,112px)/.94 "Space Grotesk",sans-serif;letter-spacing:-.075em;margin:0}
  .hero h1 span,.section-heading h2 span,.experience-copy h2 span,.gallery-heading h2 span,.why-heading h2 span,.location-content h2 span,.cta-content h2 span{background:linear-gradient(105deg,#c59cff 7%,#8589ff 60%,#77c8ff 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
  .hero h1 .period{color:#b488ff}
  .hero-copy{font-size:14px;line-height:1.8;color:#cfced6;max-width:440px;margin:27px 0 27px}
  .hero-actions,.contact-actions{display:flex;align-items:center;gap:12px}
  .button{height:48px;padding:0 18px;display:inline-flex;align-items:center;justify-content:center;gap:22px;font-size:11px;font-weight:600;letter-spacing:.01em;transition:transform .25s,box-shadow .25s,background .25s,border-color .25s}
  .button:hover{transform:translateY(-3px)}
  .button-primary{color:#0a0910;background:linear-gradient(110deg,#c19aff,#8297ff);box-shadow:0 7px 30px #9d75ff25}
  .button-primary:hover{box-shadow:0 9px 36px #a27bff52}
  .button-ghost{border:1px solid rgba(255,255,255,.36);background:#ffffff08}
  .button-ghost:hover{border-color:#b995ff;background:#ffffff12}
  .hero-wordmark{position:absolute;z-index:2;right:7.1%;bottom:87px;display:flex;align-items:baseline;gap:12px;font:700 26px "Space Grotesk",sans-serif;letter-spacing:.06em;text-shadow:0 0 34px #b58bff45}
  .hero-wordmark span{font:500 9px "DM Sans",sans-serif;letter-spacing:.26em;color:#d0ccd8}
  .scroll-cue{position:absolute;z-index:3;left:7.1%;bottom:40px;font-size:8px;letter-spacing:.2em;color:#aaa9b5;display:flex;gap:11px;align-items:center}
  .scroll-cue span{width:28px;height:1px;background:linear-gradient(90deg,#bd92ff,transparent)}
  .hero-index{position:absolute;right:7.1%;bottom:39px;font:500 10px "Space Grotesk";color:#d8d5df;letter-spacing:.1em}
  .hero-index span{color:#706e7b;padding:0 7px}
  .section-pad{padding-left:max(7.1%,calc((100vw - 1235px)/2));padding-right:max(7.1%,calc((100vw - 1235px)/2))}
  .experience{position:relative;min-height:705px;padding-top:140px;padding-bottom:140px;display:grid;grid-template-columns:1.04fr .96fr;align-items:center;gap:9.5%;overflow:hidden}
  .experience-image-wrap{position:relative;height:430px;z-index:1}
  .experience-image{width:100%;height:100%;object-fit:cover;filter:saturate(.79) brightness(.77)}
  .image-outline{position:absolute;inset:14px -14px -14px 14px;border:1px solid #a87aff59;z-index:-1}
  .image-caption{position:absolute;inset:auto 0 0;background:linear-gradient(transparent,#08090ddd);padding:36px 22px 18px;display:flex;justify-content:space-between;font-size:8px;letter-spacing:.18em;color:#dfdbe6}
  .experience-copy{position:relative;z-index:1}
  .eyebrow-line{width:23px;height:1px;background:linear-gradient(90deg,#bd92ff,#7c91ff)}
  .experience-copy h2,.section-heading h2,.gallery-heading h2,.why-heading h2,.location-content h2{font-size:clamp(48px,5.35vw,76px);margin:24px 0 23px}
  .body-copy,.section-intro{font-size:13px;line-height:1.9;color:var(--muted)}
  .body-copy{max-width:390px}
  .text-link{display:inline-flex;align-items:center;gap:17px;margin-top:21px;padding-bottom:10px;border-bottom:1px solid #9970da;font-size:11px}
  .text-link .arrow-icon{color:#bc9aff}
  .experience-coordinate{margin-top:57px;font:10px "Space Grotesk";letter-spacing:.16em;color:#777681}
  .section-watermark{position:absolute;right:-20px;bottom:-75px;font:700 245px/.8 "Space Grotesk";letter-spacing:-.1em;color:#ffffff03;pointer-events:none}
  .games{padding-top:112px;padding-bottom:120px;background:#0d0e14}
  .section-heading,.gallery-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:40px;margin-bottom:45px}
  .section-heading h2,.gallery-heading h2{margin-bottom:0}
  .section-intro{max-width:310px;margin:0 0 6px}
  .category-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
  .category-card{height:330px;position:relative;overflow:hidden;background:#171821}
  .category-card img,.gallery-item img{width:100%;height:100%;object-fit:cover;transition:transform .65s cubic-bezier(.2,.7,.2,1),filter .4s}
  .category-card img{filter:saturate(.74) brightness(.68)}
  .category-card:hover img,.gallery-item:hover img{transform:scale(1.055)}
  .category-card:hover img{filter:saturate(.96) brightness(.82)}
  .category-shade{position:absolute;inset:0;background:linear-gradient(0deg,rgba(7,8,12,.95),transparent 65%),linear-gradient(180deg,rgba(6,7,10,.37),transparent 42%)}
  .category-number{position:absolute;top:17px;left:18px;font:9px "Space Grotesk";letter-spacing:.13em;color:#e4dfea}
  .category-info{position:absolute;left:19px;right:16px;bottom:21px}
  .category-info h3{margin:0 0 7px;font:500 19px "Space Grotesk";letter-spacing:-.04em}
  .category-info span{font-size:9px;color:#b9b6c1}
  .category-arrow{position:absolute;right:16px;bottom:21px;width:31px;height:31px;display:grid;place-items:center;border:1px solid #ffffff57;color:#e4d9fa;transition:background .2s}
  .category-card:hover .category-arrow{background:#9e7ae4;color:#08090d}
  .category-arrow .arrow-icon{width:13px}
  .owner-note{margin:21px 0 0;font-size:10px;color:#96939f;line-height:1.7}
  .owner-note span{color:#ad87ff;margin-right:6px}
  .gallery{padding-top:128px;padding-bottom:130px}
  .gallery-heading{align-items:flex-end;margin-bottom:42px}
  .gallery-heading .section-intro{max-width:255px}
  .gallery-grid{display:grid;grid-template-columns:1.45fr .78fr .78fr;grid-template-rows:220px 170px;gap:12px}
  .gallery-item{position:relative;margin:0;overflow:hidden;background:#161720}
  .gallery-wide{grid-row:1/3}
  .gallery-tall{grid-row:1/3}
  .gallery-short{grid-column:3;grid-row:1/3}
  .gallery-item img{filter:saturate(.72) brightness(.72)}
  .gallery-item:hover img{filter:saturate(.95) brightness(.87)}
  .gallery-overlay{position:absolute;inset:35% 0 0;background:linear-gradient(transparent,rgba(5,6,9,.78))}
  .gallery-item figcaption{position:absolute;left:17px;right:16px;bottom:16px;display:flex;align-items:center;justify-content:space-between;font-size:9px;letter-spacing:.08em}
  .gallery-item figcaption .arrow-icon{height:14px;width:14px;color:#c2a2ff}
  .gallery-note{margin:15px 0 0;text-align:right;font-size:9px;color:#777681}
  .why{padding-top:95px;padding-bottom:110px;background:linear-gradient(110deg,#11121a,#0d0e13 72%)}
  .why-heading{margin-bottom:55px}
  .why-heading h2{margin-bottom:0}
  .highlight-row{display:grid;grid-template-columns:72px 1.05fr 1fr 30px;align-items:center;gap:24px;border-top:1px solid var(--line);padding:22px 3px;transition:padding .25s,border-color .25s}
  .highlight-row:last-child{border-bottom:1px solid var(--line)}
  .highlight-row:hover{padding-left:12px;border-color:#9271c8}
  .highlight-number{font:10px "Space Grotesk";letter-spacing:.13em;color:#a78bd5}
  .highlight-row h3{margin:0;font:500 20px "Space Grotesk";letter-spacing:-.035em}
  .highlight-row p{margin:0;max-width:360px;font-size:11px;line-height:1.7;color:#a7a5b0}
  .highlight-cross{font-size:17px;color:#9e81cb;text-align:right}
  .location{padding-top:135px;padding-bottom:145px;display:grid;grid-template-columns:1.02fr .98fr;gap:10%;align-items:center}
  .location-visual{position:relative;height:470px;overflow:hidden;background:radial-gradient(ellipse at 51% 47%,#24203c 0,#12131e 37%,#0b0c12 76%);border:1px solid #ffffff14}
  .map-grid{position:absolute;inset:-20%;transform:rotate(-17deg);background-image:linear-gradient(35deg,transparent 46%,rgba(172,146,224,.13) 47%,rgba(172,146,224,.13) 47.4%,transparent 48%),linear-gradient(110deg,transparent 40%,rgba(107,162,210,.13) 40.2%,rgba(107,162,210,.13) 40.6%,transparent 40.8%),linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:100% 100%,100% 100%,44px 44px,44px 44px;opacity:.85}
  .map-orbit{position:absolute;border:1px solid #a982ef25;border-radius:50%;left:50%;top:47%;transform:translate(-50%,-50%);aspect-ratio:1}
  .orbit-one{width:250px}.orbit-two{width:370px;border-style:dashed;animation:orbit-turn 38s linear infinite}
  .map-pin{position:absolute;left:50%;top:47%;transform:translate(-50%,-50%);width:46px;height:46px;display:grid;place-items:center;border:1px solid #c7a6ff;background:#a47be51a;transform-origin:center;rotate:45deg;box-shadow:0 0 36px #9d74e54a}
  .map-pin:before{content:"";position:absolute;inset:8px;border:1px solid #a77fe6}
  .map-pin span{rotate:-45deg;font:700 9px "Space Grotesk";color:#eadfff}
  .map-label{position:absolute;left:50%;top:calc(47% + 50px);transform:translateX(-50%);white-space:nowrap;display:flex;align-items:center;gap:8px;font-size:8px;letter-spacing:.12em;color:#ddd5ec}
  .map-label>span:last-child{color:#898591;margin-left:12px}
  .map-coordinates{position:absolute;left:22px;bottom:20px;font:9px/1.8 "Space Grotesk";letter-spacing:.12em;color:#aba7b8}
  .map-plus{position:absolute;color:#9176bc;font:16px "Space Grotesk"}
  .plus-one{top:26px;right:26px}.plus-two{left:28px;top:45%}
  .location-content h2{font-size:clamp(47px,5vw,70px)}
  .address-block{margin-top:32px}
  .detail-label,.footer-label{font-size:8px;letter-spacing:.19em;color:#a78bd5}
  address{margin-top:11px;font-style:normal;font-size:12px;line-height:1.9;color:#cccbd3}
  .phone-block{margin-top:21px}
  .phone-number{display:flex;align-items:center;gap:12px;margin-top:9px;font:500 19px "Space Grotesk"}
  .phone-number .arrow-icon{color:#b697ee}
  .contact-actions{margin-top:26px}
  .contact-actions .button{height:43px;padding:0 14px}
  .directions-link{display:inline-flex;align-items:center;gap:8px;margin-top:19px;font-size:10px;color:#bdb9c6;border-bottom:1px solid #66567d;padding-bottom:5px}
  .directions-link .arrow-icon{width:13px;color:#b795ed}
  .final-cta{position:relative;min-height:470px;overflow:hidden;display:grid;place-items:center;text-align:center;padding:80px 24px;background:radial-gradient(ellipse at 50% 110%,#30214f 0,transparent 54%),linear-gradient(115deg,#11121a,#0c0d13 54%,#12111a)}
  .cta-lines{position:absolute;inset:0;opacity:.22;background:repeating-linear-gradient(115deg,transparent 0 95px,#9281bc1c 96px,#9281bc1c 97px,transparent 98px 180px);mask-image:linear-gradient(transparent,black 35%,transparent)}
  .cta-content{position:relative;z-index:2}
  .cta-content>.eyebrow{justify-content:center}
  .cta-content h2{font-size:clamp(45px,7vw,87px);margin:23px 0 13px}
  .cta-content p{margin:0 0 24px;color:#b9b6c1;font-size:12px}
  .cta-content .button{margin:auto}
  .cta-orb{position:absolute;width:420px;aspect-ratio:1;border:1px solid #b894ff12;border-radius:50%;right:-210px;top:-260px;box-shadow:0 0 0 60px #b894ff08,0 0 0 120px #b894ff05}
  .site-footer{padding:53px max(7.1%,calc((100vw - 1235px)/2)) 0;background:#08090d;border-top:1px solid #ffffff10}
  .footer-main{display:grid;grid-template-columns:1.2fr .65fr 1.3fr 40px;gap:40px;padding-bottom:45px}
  .brand-footer .brand-words strong{font-size:20px}
  .footer-brand-col>p{font-size:11px;line-height:1.8;color:#908e99;margin:17px 0 0}
  .footer-col{display:flex;flex-direction:column;align-items:flex-start;gap:12px}
  .footer-label{margin-bottom:6px}
  .footer-col a{font-size:10px;line-height:1.7;color:#b6b3be;transition:color .2s}
  .footer-contact a .arrow-icon{width:12px;height:12px;vertical-align:middle}
  .back-top{height:36px;width:36px;border:1px solid #ffffff33;display:grid;place-items:center;transition:background .2s}
  .back-top:hover{background:#a87aff;color:#08090d}
  .back-top .arrow-icon{width:14px}
  .footer-bottom{height:52px;border-top:1px solid #ffffff12;display:flex;align-items:center;justify-content:space-between;font-size:8px;letter-spacing:.11em;color:#777580}
  .footer-bottom i{font-style:normal;color:#a783e4;margin-left:4px}
  .footer-bottom a{color:#b9b6c1}
  .reveal{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.65,.25,1)}
  .reveal.is-visible{opacity:1;transform:translateY(0)}
  .category-card:nth-child(2),.highlight-row:nth-child(2){transition-delay:.07s}
  .category-card:nth-child(3),.highlight-row:nth-child(3){transition-delay:.13s}
  .category-card:nth-child(4),.highlight-row:nth-child(4){transition-delay:.19s}
  @keyframes hero-drift{from{transform:scale(1.015) translate3d(0,0,0)}to{transform:scale(1.075) translate3d(-1.3%,.5%,0)}}
  @keyframes rise-in{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
  @keyframes orbit-turn{to{transform:translate(-50%,-50%) rotate(360deg)}}
  @media(min-width:1500px){.hero{padding-left:max(11.2%,calc((100vw - 1235px)/2));padding-right:max(11.2%,calc((100vw - 1235px)/2))}}
  @media(max-width:980px){
    .nav-shell{padding:0 5%}.main-nav{gap:20px}
    .hero{padding-left:8%;padding-right:8%}
    .section-pad{padding-left:6%;padding-right:6%}
    .experience{gap:7%;min-height:620px;padding-top:110px;padding-bottom:110px}
    .experience-image-wrap{height:375px}
    .category-card{height:285px}
    .category-info h3{font-size:17px}
    .highlight-row{grid-template-columns:50px 1fr 1.1fr 20px;gap:16px}
    .location{gap:7%}
    .location-visual{height:420px}
    .site-footer{padding-left:6%;padding-right:6%}
  }
  @media(max-width:700px){
    html{scroll-padding-top:68px}
    .site-header{height:68px}
    .nav-shell{padding:0 22px}
    .brand-mark{width:22px;height:25px}
    .brand-words strong{font-size:17px}
    .menu-toggle{position:relative;z-index:22;width:42px;height:42px;border:1px solid #ffffff35;background:#08090d99;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:6px}
    .menu-toggle span{width:16px;height:1px;background:#f4f1f8;transition:transform .2s}
    .menu-toggle.active span:first-child{transform:translateY(3.5px) rotate(45deg)}
    .menu-toggle.active span:last-child{transform:translateY(-3.5px) rotate(-45deg)}
    .main-nav{position:fixed;inset:0;z-index:21;padding:100px 30px 35px;background:rgba(8,9,13,.98);backdrop-filter:blur(16px);display:flex;align-items:stretch;justify-content:center;flex-direction:column;gap:0;opacity:0;visibility:hidden;transform:translateY(-8px);transition:opacity .25s,visibility .25s,transform .25s}
    .main-nav.nav-open{opacity:1;visibility:visible;transform:translateY(0)}
    .main-nav>a:not(.nav-contact){padding:17px 0;border-bottom:1px solid #ffffff17;font:500 25px "Space Grotesk";color:#eeeaf3}
    .main-nav .nav-contact{margin-top:24px;align-self:flex-start;height:48px}
    .hero{height:850px;min-height:690px;max-height:94svh;padding:120px 25px 100px;align-items:center}
    .hero-image{background-position:58% center;background-image:linear-gradient(90deg,rgba(8,9,13,.88),rgba(8,9,13,.44)),linear-gradient(0deg,#08090d 0%,transparent 44%,rgba(8,9,13,.24) 100%),url("https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=85")}
    .hero-grid{background-size:64px 64px}
    .hero-content{padding-top:25px}
    .hero-eyebrow{font-size:8px;margin-bottom:23px}
    .hero h1{font-size:clamp(51px,12.6vw,82px);letter-spacing:-.075em}
    .hero-copy{font-size:13px;max-width:350px;margin:23px 0}
    .hero-actions{align-items:flex-start;flex-direction:column;gap:10px}
    .hero-actions .button{height:45px}
    .hero-wordmark{left:25px;right:auto;bottom:75px;font-size:20px}
    .hero-wordmark span{font-size:8px}
    .scroll-cue{left:25px;bottom:31px;font-size:7px}
    .hero-index{right:25px;bottom:30px}
    .section-pad{padding-left:24px;padding-right:24px}
    .experience{grid-template-columns:1fr;gap:44px;padding-top:86px;padding-bottom:93px}
    .experience-image-wrap{height:clamp(250px,73vw,380px);margin-right:8px}
    .experience-copy h2,.section-heading h2,.gallery-heading h2,.why-heading h2,.location-content h2{font-size:clamp(48px,12vw,70px)}
    .experience-copy .body-copy{max-width:450px}
    .experience-coordinate{margin-top:31px}
    .section-watermark{font-size:160px;bottom:-40px}
    .games{padding-top:82px;padding-bottom:88px}
    .section-heading,.gallery-heading{display:block;margin-bottom:29px}
    .section-heading h2,.gallery-heading h2{margin:19px 0 16px}
    .section-intro{max-width:380px;font-size:12px}
    .category-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
    .category-card{height:clamp(230px,65vw,330px)}
    .category-info{left:12px;right:10px;bottom:14px}
    .category-info h3{font-size:16px;max-width:calc(100% - 25px)}
    .category-info span{font-size:8px}
    .category-number{left:12px;top:13px;font-size:8px}
    .category-arrow{right:10px;bottom:14px;width:25px;height:25px}
    .category-arrow .arrow-icon{width:11px}
    .owner-note{font-size:9px}
    .gallery{padding-top:85px;padding-bottom:91px}
    .gallery-grid{grid-template-columns:1fr 1fr;grid-template-rows:230px 175px;gap:9px}
    .gallery-wide{grid-column:1/3;grid-row:1}
    .gallery-tall{grid-column:1;grid-row:2}
    .gallery-short{grid-column:2;grid-row:2}
    .gallery-item figcaption{left:11px;right:10px;bottom:11px;font-size:8px}
    .gallery-item figcaption .arrow-icon{width:12px}
    .gallery-note{text-align:left;line-height:1.6}
    .why{padding-top:78px;padding-bottom:85px}
    .why-heading{margin-bottom:31px}
    .highlight-row{grid-template-columns:33px 1fr 16px;gap:10px;padding:17px 0}
    .highlight-number{font-size:9px}
    .highlight-row h3{font-size:16px}
    .highlight-row p{grid-column:2;grid-row:2;font-size:10px}
    .highlight-cross{grid-column:3;grid-row:1/3}
    .location{grid-template-columns:1fr;gap:41px;padding-top:89px;padding-bottom:96px}
    .location-visual{height:330px}
    .orbit-one{width:190px}.orbit-two{width:290px}
    .location-content h2{margin:19px 0}
    .address-block{margin-top:25px}
    .location-content{scroll-margin-top:78px}
    .final-cta{min-height:390px;padding:65px 20px}
    .cta-content h2{font-size:clamp(43px,10.5vw,68px)}
    .cta-content>.eyebrow{font-size:8px}
    .site-footer{padding:42px 24px 0}
    .footer-main{grid-template-columns:1fr 1fr;gap:33px 20px;padding-bottom:34px}
    .footer-brand-col{grid-column:1}
    .footer-col{gap:9px}
    .footer-contact{grid-column:1/3;grid-row:2}
    .footer-contact a{max-width:100%}
    .back-top{grid-column:2;grid-row:1;justify-self:end}
    .footer-bottom{height:auto;min-height:55px;display:grid;grid-template-columns:1fr auto;gap:8px;padding:12px 0;font-size:7px}
    .footer-bottom span:nth-child(2){display:none}
  }
  @media(max-width:380px){
    .hero h1{font-size:48px}
    .hero-wordmark{font-size:18px}
    .hero-wordmark span{font-size:7px}
    .category-info h3{font-size:14px}
    .category-info span{font-size:7px}
    .gallery-grid{grid-template-rows:195px 155px}
  }
  @media(prefers-reduced-motion:reduce){
    *,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
    .reveal{opacity:1;transform:none}
  }
`;
