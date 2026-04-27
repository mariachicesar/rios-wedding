import Head from "next/head";
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

export default function Invite() {
  return (
    <div className={`${displayFont.variable} ${bodyFont.variable} invite-page`}>
      <Head>
        <title>Cesar & Candy | Invitation</title>
      </Head>

      <div className="invite-actions">
        <button type="button" onClick={() => window.print()}>
          Print invitation
        </button>
      </div>

      <section className="invite-card" aria-label="Wedding invitation">
        <div className="invite-frame">
          <p className="invite-eyebrow">Wedding Invitation</p>
          <p className="invite-eyebrow invite-eyebrow-alt">Invitacion de boda</p>

          <h1 className="invite-title">Cesar Rios &amp; Candy Rios</h1>
          <p className="invite-subtitle">
            Request the honor of your presence
            <span>en la celebracion de su boda</span>
          </p>

          <div className="invite-divider" aria-hidden="true" />

          <p className="invite-date">Saturday, September 5, 2026</p>
          <p className="invite-date invite-date-alt">
            Sabado, 5 de septiembre de 2026
          </p>

          <p className="invite-location">Family Ranch · Phelan, California</p>
          <p className="invite-location invite-location-alt">
            Rancho familiar · Phelan, California
          </p>

          <div className="invite-block">
            <p className="invite-label">Charro Wedding · Charro Gala</p>
            <p className="invite-label invite-label-alt">
              Boda charra · Gala charra
            </p>
            <p className="invite-note">Mariachi suits and boots welcome</p>
            <p className="invite-note invite-note-alt">
              Trajes de mariachi y botas bienvenidos
            </p>
          </div>

          <div className="invite-block invite-block-muted">
            <p>Formal invitation and RSVP details to follow.</p>
            <p>Assigned seating.</p>
            <p className="invite-note-alt">
              Invitacion formal y detalles de confirmacion se compartiran pronto.
            </p>
            <p className="invite-note-alt">Asientos asignados.</p>
          </div>
        </div>
      </section>

      <style jsx global>{`
        :root {
          --invite-ink: #1f1a17;
          --invite-clay: #b85b3a;
          --invite-sand: #f8f1e7;
          --invite-border: rgba(31, 26, 23, 0.18);
        }

        .invite-page {
          min-height: 100vh;
          padding: 2.5rem 1.5rem 3rem;
          background: #efe6d8;
          font-family: var(--font-body);
          color: var(--invite-ink);
        }

        .invite-actions {
          max-width: 6in;
          margin: 0 auto 1.5rem;
          display: flex;
          justify-content: flex-end;
        }

        .invite-actions button {
          border: none;
          background: var(--invite-clay);
          color: #fff8ef;
          padding: 0.6rem 1.2rem;
          border-radius: 999px;
          font-weight: 600;
          letter-spacing: 0.06em;
          cursor: pointer;
        }

        .invite-card {
          width: 5in;
          height: 7in;
          margin: 0 auto;
          background: var(--invite-sand);
          border-radius: 28px;
          border: 1px solid var(--invite-border);
          box-shadow: 0 24px 60px rgba(31, 26, 23, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .invite-frame {
          width: calc(100% - 0.6in);
          height: calc(100% - 0.6in);
          border: 2px solid rgba(184, 91, 58, 0.3);
          border-radius: 22px;
          padding: 0.35in 0.34in 0.28in;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.45rem;
        }

        .invite-eyebrow {
          font-size: 0.55rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--invite-clay);
          font-weight: 600;
          margin: 0;
        }

        .invite-eyebrow-alt {
          color: #6f5a4d;
          letter-spacing: 0.28em;
        }

        .invite-title {
          font-family: var(--font-display);
          font-size: 2rem;
          margin: 0.2rem 0 0;
        }

        .invite-subtitle {
          font-size: 0.82rem;
          margin: 0;
          color: #433a33;
          display: grid;
          gap: 0.2rem;
        }

        .invite-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(31, 26, 23, 0.35), transparent);
          margin: 0.2rem 0;
        }

        .invite-date {
          font-family: var(--font-display);
          font-size: 1.05rem;
          margin: 0;
        }

        .invite-date-alt,
        .invite-location-alt {
          font-size: 0.85rem;
          color: #5b5047;
          margin: 0;
        }

        .invite-location {
          font-size: 0.85rem;
          margin: 0.1rem 0 0;
        }

        .invite-block {
          display: grid;
          gap: 0.25rem;
        }

        .invite-label {
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 0.62rem;
          margin: 0;
        }

        .invite-label-alt,
        .invite-note-alt {
          font-size: 0.75rem;
          color: #5b5047;
          margin: 0;
        }

        .invite-note {
          margin: 0;
          font-size: 0.72rem;
          color: #433a33;
        }

        .invite-block-muted {
          font-size: 0.68rem;
          color: #5a524b;
          margin-bottom: 0.2rem;
        }

        @media (max-width: 640px) {
          .invite-card {
            width: 100%;
            height: auto;
            aspect-ratio: 5 / 7;
          }

          .invite-frame {
            height: auto;
            min-height: calc(100% - 2rem);
          }
        }

        @media print {
          @page {
            size: 5in 7in;
            margin: 0.25in;
          }

          body {
            margin: 0;
            background: white;
          }

          .invite-page {
            padding: 0;
            background: white;
          }

          .invite-actions {
            display: none;
          }

          .invite-card {
            box-shadow: none;
            border-radius: 20px;
          }
        }
      `}</style>
    </div>
  );
}
