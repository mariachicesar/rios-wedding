import { useState } from "react";
import Image from "next/image";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const copy = {
  en: {
    nav: {
      story: "Our Story",
      attire: "Attire",
      gallery: "Gallery",
      travel: "Travel",
      party: "Wedding Party",
      rsvp: "RSVP",
      itinerary: "Family itinerary",
    },
    hero: {
      eyebrow: "Save the date",
      subtitle: "Saturday, Sept 5, 2026 • Phelan, CA • Family Ranch",
      tags: ["Charro Wedding", "Charro Gala", "Mariachi Suits", "Boots Welcome"],
      ctaPrimary: "Our story",
      ctaSecondary: "Travel details",
    },
    info: {
      eyebrow: "Celebration",
      title: "Wedding",
      body:
        "Join us for a warm, open-air celebration at our family ranch in Phelan, California. Ceremony and reception details will follow soon.",
      note: "Expect sunset views, mariachi energy, and a night made for dancing.",
    },
    story: {
      eyebrow: "Our story",
      title: "How it all started",
      lead:
        "We met in the summer of 2022 at a nightclub. From that night on, every weekend turned into a new adventure: concerts, DTLA dinners, and Dodgers games. Shortly after, we moved in together in January 2023 to our first home in downtown Los Angeles.",
      cards: [
        {
          year: "2022",
          title: "First night out",
          text: "One dance, a spark, and a summer we will never forget.",
        },
        {
          year: "2022",
          title: "Weekends on repeat",
          text: "Concerts, DTLA nights, and baseball games every chance we got.",
        },
        {
          year: "2023",
          title: "Home in DTLA",
          text: "We moved in together and started building our life.",
        },
      ],
    },
    attire: {
      eyebrow: "Dress code",
      title: "Charro celebration",
      lead:
        "This is a Charro Wedding. Charro Gala attire, mariachi suits, and boots are encouraged and celebrated.",
      cardTitle: "Attire highlights",
      items: [
        "Charro suits and gowns with classic embroidery",
        "Mariachi-inspired suits or elegant black tie",
        "Boots and western accents welcome",
      ],
      note: "Bring your boldest look and come ready to celebrate.",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Moments together",
      lead: "Moments we have shared.",
    },
    travel: {
      eyebrow: "Travel",
      title: "Nearby stays",
      lead: "Nearby options for lodging.",
    },
    itinerary: {
      eyebrow: "Family itinerary",
      title: "Seven-day stay plan",
      lead:
        "Starting the Monday after the wedding, here is a relaxed seven-day plan for family visiting from Mexico.",
      start: "Starts Monday, Sept 7, 2026",
      calendarLabel: "Add to Google Calendar",
      days: [
        {
          date: "Mon, Sept 7",
          dateValue: "20260907",
          title: "Arrival + rest",
          detail: "Settle in, light dinner near home.",
        },
        {
          date: "Tue, Sept 8",
          dateValue: "20260908",
          title: "Hollywood",
          detail: "Walk of Fame, TCL Chinese Theatre, sunset at Griffith Observatory.",
        },
        {
          date: "Wed, Sept 9",
          dateValue: "20260909",
          title: "Santa Monica",
          detail: "Beach morning, Santa Monica Pier, Third Street Promenade.",
        },
        {
          date: "Thu, Sept 10",
          dateValue: "20260910",
          title: "Universal + CityWalk",
          detail: "Full day at Universal Studios, dinner at CityWalk.",
        },
        {
          date: "Fri, Sept 11",
          dateValue: "20260911",
          title: "Dodger game",
          detail: "Game day or stadium tour.",
        },
        {
          date: "Sat, Sept 12",
          dateValue: "20260912",
          title: "Disneyland",
          detail: "Full day in Anaheim.",
        },
        {
          date: "Sun, Sept 13",
          dateValue: "20260913",
          title: "Departure",
          detail: "Pack and travel.",
        },
      ],
    },
    party: {
      eyebrow: "Wedding party",
      title: "Our people",
      lead: "Our closest family and friends.",
      groomsmen: "Groomsmen",
      bridesmaids: "Bridesmaids",
    },
    rsvp: {
      eyebrow: "RSVP",
      title: "Please RSVP",
      lead:
        "Formal invitations and RSVP details are on the way. This will be assigned seating, so please confirm your attendance once the RSVP is shared.",
      calendarLabel: "Add to Google Calendar",
    },
    footer: "With love, Cesar & Candy",
  },
  es: {
    nav: {
      story: "Historia",
      attire: "Vestimenta",
      gallery: "Galeria",
      travel: "Hospedaje",
      party: "Cortejo",
      rsvp: "Confirmacion",
      itinerary: "Itinerario",
    },
    hero: {
      eyebrow: "Guarden la fecha",
      subtitle: "Sabado, 5 de septiembre de 2026 • Phelan, CA • Rancho familiar",
      tags: ["Boda Charra", "Gala Charra", "Trajes de Mariachi", "Botas Bienvenidas"],
      ctaPrimary: "Nuestra historia",
      ctaSecondary: "Detalles de viaje",
    },
    info: {
      eyebrow: "Celebracion",
      title: "Boda",
      body:
        "Acompanenos en una celebracion al aire libre en nuestro rancho familiar en Phelan, California. Los detalles de ceremonia y recepcion se compartiran pronto.",
      note: "Esperen atardeceres, energia de mariachi y una noche para bailar.",
    },
    story: {
      eyebrow: "Nuestra historia",
      title: "Como empezo todo",
      lead:
        "Nos conocimos en el verano de 2022 en un club nocturno. Desde esa noche, cada fin de semana se volvio una nueva aventura: conciertos, cenas en DTLA y juegos de los Dodgers. Poco despues nos mudamos juntos en enero de 2023 a nuestro primer hogar en el centro de Los Angeles.",
      cards: [
        {
          year: "2022",
          title: "Primera salida",
          text: "Un baile, una chispa y un verano que nunca olvidaremos.",
        },
        {
          year: "2022",
          title: "Fines de semana",
          text: "Conciertos, noches en DTLA y juegos de beisbol cada oportunidad.",
        },
        {
          year: "2023",
          title: "Hogar en DTLA",
          text: "Nos mudamos juntos y empezamos a construir nuestra vida.",
        },
      ],
    },
    attire: {
      eyebrow: "Codigo de vestimenta",
      title: "Celebracion charra",
      lead:
        "Esta es una boda charra. Se recomienda y celebra el atuendo de gala charra, trajes de mariachi y botas.",
      cardTitle: "Detalles de vestimenta",
      items: [
        "Trajes charros y vestidos con bordado clasico",
        "Trajes inspirados en mariachi o etiqueta elegante",
        "Botas y detalles vaqueros bienvenidos",
      ],
      note: "Saquen su mejor atuendo y vengan listos para celebrar.",
    },
    gallery: {
      eyebrow: "Galeria",
      title: "Momentos juntos",
      lead: "Momentos que hemos compartido.",
    },
    travel: {
      eyebrow: "Hospedaje",
      title: "Opciones cercanas",
      lead: "Opciones cercanas para hospedarse.",
    },
    itinerary: {
      eyebrow: "Itinerario familiar",
      title: "Plan de siete dias",
      lead:
        "Empezando el lunes despues de la boda, este es un plan relajado de siete dias para la familia que viene de Mexico.",
      start: "Empieza lunes, 7 de septiembre de 2026",
      calendarLabel: "Agregar a Google Calendar",
      days: [
        {
          date: "Lun, 7 sept",
          dateValue: "20260907",
          title: "Llegada + descanso",
          detail: "Acomodarse, cena ligera cerca de casa.",
        },
        {
          date: "Mar, 8 sept",
          dateValue: "20260908",
          title: "Hollywood",
          detail: "Walk of Fame, Teatro Chino TCL, atardecer en Griffith Observatory.",
        },
        {
          date: "Mie, 9 sept",
          dateValue: "20260909",
          title: "Santa Monica",
          detail: "Playa por la manana, Santa Monica Pier, Third Street Promenade.",
        },
        {
          date: "Jue, 10 sept",
          dateValue: "20260910",
          title: "Universal + CityWalk",
          detail: "Dia completo en Universal Studios, cena en CityWalk.",
        },
        {
          date: "Vie, 11 sept",
          dateValue: "20260911",
          title: "Juego de Dodgers",
          detail: "Dia de juego o tour del estadio.",
        },
        {
          date: "Sab, 12 sept",
          dateValue: "20260912",
          title: "Disneyland",
          detail: "Dia completo en Anaheim.",
        },
        {
          date: "Dom, 13 sept",
          dateValue: "20260913",
          title: "Salida",
          detail: "Empacar y viaje.",
        },
      ],
    },
    party: {
      eyebrow: "Cortejo",
      title: "Nuestra gente",
      lead: "Nuestra familia y amigos mas cercanos.",
      groomsmen: "Padrinos",
      bridesmaids: "Damas",
    },
    rsvp: {
      eyebrow: "Confirmacion",
      title: "Confirma tu asistencia",
      lead:
        "Las invitaciones formales y los detalles de confirmacion se compartiran pronto. Habra asientos asignados, por favor confirma tu asistencia cuando se comparta la confirmacion.",
      calendarLabel: "Agregar a Google Calendar",
    },
    footer: "Con amor, Cesar y Candy",
  },
};

const gallery = [
  {
    src: "/images/cesar-candy-dodgers.jpg",
    alt: {
      en: "Cesar and Candy at a Dodgers game",
      es: "Cesar y Candy en un juego de los Dodgers",
    },
    label: { en: "Dodger day", es: "Dia en los Dodgers" },
  },
  {
    src: "/images/candy-vineyard.jpg",
    alt: { en: "Candy in a vineyard", es: "Candy en un viniedo" },
    label: { en: "Summer vineyard", es: "Viniedo en verano" },
  },
  {
    src: "/images/cesar-candy-dtla.jpg",
    alt: {
      en: "Cesar and Candy at night in downtown Los Angeles",
      es: "Cesar y Candy de noche en el centro de Los Angeles",
    },
    label: { en: "DTLA nights", es: "Noches en DTLA" },
  },
  {
    src: "/images/cesar-candy-waltz.jpg",
    alt: {
      en: "Cesar and Candy dressed up on a rooftop",
      es: "Cesar y Candy arreglados en una terraza",
    },
    label: { en: "Date night", es: "Noche de cita" },
  },
  {
    src: "/images/cesar-candy-green.jpg",
    alt: {
      en: "Cesar and Candy at a garden celebration",
      es: "Cesar y Candy en una celebracion en jardin",
    },
    label: { en: "Garden glow", es: "Brillo en el jardin" },
  },
  {
    src: "/images/cesar-candy-pond.jpg",
    alt: {
      en: "Cesar and Candy by a pond at sunset",
      es: "Cesar y Candy junto a un lago al atardecer",
    },
    label: { en: "Sunset walk", es: "Paseo al atardecer" },
  },
  {
    src: "/images/cesar-candy-gala.jpg",
    alt: {
      en: "Cesar and Candy at a formal event",
      es: "Cesar y Candy en un evento formal",
    },
    label: { en: "Gala ready", es: "Listos para gala" },
  },
  {
    src: "/images/cesar-charro.jpg",
    alt: { en: "Cesar in charro attire", es: "Cesar con traje charro" },
    label: { en: "Charro attire", es: "Traje charro" },
  },
];

export default function Home() {
  const [lang, setLang] = useState("en");
  const content = copy[lang];

  const buildCalendarLink = (day) => {
    const year = Number(day.dateValue.slice(0, 4));
    const month = Number(day.dateValue.slice(4, 6));
    const date = Number(day.dateValue.slice(6, 8));
    const start = new Date(Date.UTC(year, month - 1, date));
    const end = new Date(Date.UTC(year, month - 1, date + 1));
    const toValue = (value) =>
      value.toISOString().slice(0, 10).replaceAll("-", "");
    const dates = `${toValue(start)}/${toValue(end)}`;
    const text = `${day.title} - Cesar & Candy Wedding Week`;
    const details = day.detail;
    const location = "Los Angeles, CA";

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text,
      dates,
      details,
      location,
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  return (
    <div className={`${displayFont.variable} ${bodyFont.variable} page`}>
      <header className="site-header">
        <div className="container flex items-center justify-between gap-6">
          <div className="brand font-display">Cesar + Candy</div>
          <nav className="site-nav">
            <a href="#story">{content.nav.story}</a>
            <a href="#attire">{content.nav.attire}</a>
            <a href="#gallery">{content.nav.gallery}</a>
            <a href="#travel">{content.nav.travel}</a>
            <a href="#party">{content.nav.party}</a>
            <a href="#rsvp">{content.nav.rsvp}</a>
            <a href="#itinerary">{content.nav.itinerary}</a>
          </nav>
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              className={lang === "en" ? "is-active" : ""}
              onClick={() => setLang("en")}
              type="button"
            >
              EN
            </button>
            <button
              className={lang === "es" ? "is-active" : ""}
              onClick={() => setLang("es")}
              type="button"
            >
              ES
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-content reveal">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1 className="hero-title font-display">
                Cesar Rios &amp; Candy Rios
              </h1>
              <p className="hero-subtitle">{content.hero.subtitle}</p>
              <div className="hero-tags">
                {content.hero.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="hero-actions">
                <a className="btn-primary" href="#story">
                  {content.hero.ctaPrimary}
                </a>
                <a className="btn-secondary" href="#travel">
                  {content.hero.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="hero-panel reveal delay-1">
              <div className="info-card">
                <p className="eyebrow">{content.info.eyebrow}</p>
                <h2 className="section-title font-display">{content.info.title}</h2>
                <p>{content.info.body}</p>
                <p className="note">{content.info.note}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="story">
          <div className="container">
            <div className="section-header reveal">
              <p className="eyebrow">{content.story.eyebrow}</p>
              <h2 className="section-title font-display">{content.story.title}</h2>
            </div>
            <p className="lead reveal delay-1">{content.story.lead}</p>
            <div className="story-grid">
              {content.story.cards.map((card, index) => (
                <div
                  className={`story-card reveal delay-${index + 2}`}
                  key={card.title}
                >
                  <span className="story-year">{card.year}</span>
                  <h3 className="font-display">{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-accent" id="attire">
          <div className="container accent-grid">
            <div className="reveal">
              <p className="eyebrow">{content.attire.eyebrow}</p>
              <h2 className="section-title font-display">{content.attire.title}</h2>
              <p className="lead">{content.attire.lead}</p>
            </div>
            <div className="attire-card reveal delay-1">
              <h3 className="font-display">{content.attire.cardTitle}</h3>
              <ul>
                {content.attire.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="note">{content.attire.note}</p>
            </div>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="container">
            <div className="section-header reveal">
              <p className="eyebrow">{content.gallery.eyebrow}</p>
              <h2 className="section-title font-display">{content.gallery.title}</h2>
            </div>
            <p className="lead reveal delay-1">{content.gallery.lead}</p>
            <div className="photo-grid">
              {gallery.map((photo) => (
                <figure className="photo-card reveal" key={photo.src}>
                  <div className="photo-frame">
                    <Image
                      src={photo.src}
                      alt={photo.alt[lang]}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                      className="photo-img"
                    />
                  </div>
                  <figcaption>{photo.label[lang]}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="travel">
          <div className="container">
            <div className="section-header reveal">
              <p className="eyebrow">{content.travel.eyebrow}</p>
              <h2 className="section-title font-display">{content.travel.title}</h2>
            </div>
            <p className="lead reveal delay-1">{content.travel.lead}</p>
            <div className="travel-grid">
              <div className="travel-card reveal delay-1">
                <h3 className="font-display">Cajon Pass Inn</h3>
                <p>8317 CA-138, Phelan, CA 92371</p>
              </div>
              <div className="travel-card reveal delay-2">
                <h3 className="font-display">Grand Pine Cabins</h3>
                <p>6045 Pine St, Wrightwood, CA 92397</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="itinerary">
          <div className="container">
            <div className="section-header reveal">
              <p className="eyebrow">{content.itinerary.eyebrow}</p>
              <h2 className="section-title font-display">
                {content.itinerary.title}
              </h2>
            </div>
            <p className="lead reveal delay-1">{content.itinerary.lead}</p>
            <p className="itinerary-start reveal delay-2">
              {content.itinerary.start}
            </p>
            <div className="itinerary-grid">
              {content.itinerary.days.map((day) => (
                <article className="itinerary-card reveal" key={day.date}>
                  <span className="itinerary-date">{day.date}</span>
                  <h3 className="font-display">{day.title}</h3>
                  <p>{day.detail}</p>
                  <a
                    className="itinerary-link"
                    href={buildCalendarLink(day)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.itinerary.calendarLabel}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-accent" id="party">
          <div className="container">
            <div className="section-header reveal">
              <p className="eyebrow">{content.party.eyebrow}</p>
              <h2 className="section-title font-display">{content.party.title}</h2>
            </div>
            <p className="lead reveal delay-1">{content.party.lead}</p>
            <div className="party-grid">
              <div className="party-card reveal delay-1">
                <h3 className="font-display">{content.party.groomsmen}</h3>
                <ul>
                  <li>Miguel Sornia</li>
                  <li>Jese Aguilar</li>
                  <li>Julio Lamas</li>
                  <li>Felix Lamas</li>
                  <li>Emanuel Jaramillo</li>
                  <li>Daniel Zamora</li>
                  <li>Alberto Rios</li>
                  <li>Rafael Rios</li>
                  <li>Jesus Rios Guillen</li>
                </ul>
              </div>
              <div className="party-card reveal delay-2">
                <h3 className="font-display">{content.party.bridesmaids}</h3>
                <ul>
                  <li>Marlene Reyes</li>
                  <li>Miroslava Bustamante</li>
                  <li>Marie Aguilar</li>
                  <li>Ana Bustamante</li>
                  <li>Gaby Bustamante</li>
                  <li>Karla Medina</li>
                  <li>Kitzy Anguian</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-cta" id="rsvp">
          <div className="container reveal">
            <div className="cta-card">
              <p className="eyebrow">{content.rsvp.eyebrow}</p>
              <h2 className="section-title font-display">{content.rsvp.title}</h2>
              <p className="lead">{content.rsvp.lead}</p>
              <a
                className="btn-secondary rsvp-calendar"
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding%20Cesar%20Rios%20%26%20Candy%20Rios&dates=20260905/20260906&details=Charro%20Wedding%20-%20Save%20the%20date.%20Formal%20invitations%20and%20RSVP%20details%20to%20follow.%20Assigned%20seating.&location=Phelan,%20CA"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.rsvp.calendarLabel}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>{content.footer}</p>
        </div>
      </footer>
    </div>
  );
}
