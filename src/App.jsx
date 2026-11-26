const chartHeights = [37, 61, 48, 80, 67, 97, 75, 110, 94, 123, 107, 138]

function Arrow({ className = '' }) {
  return (
    <span className={`arrow ${className}`} aria-hidden="true">
      ↗
    </span>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <img className="hero-visual__connectors" src="/assets/connectors.svg" alt="" />
      <img
        className="hero-visual__browser"
        src="/assets/hero-browser.svg"
        alt=""
        width="281"
        height="204"
      />
      <img
        className="hero-visual__mobile"
        src="/assets/hero-mobile.svg"
        alt=""
        width="82"
        height="148"
      />
      <img
        className="hero-visual__database"
        src="/assets/hero-database.svg"
        alt=""
        width="84"
        height="62"
      />
      <img className="hero-visual__node hero-visual__node--1" src="/assets/node1.svg" alt="" />
      <img className="hero-visual__node hero-visual__node--2" src="/assets/node2.svg" alt="" />
      <img className="hero-visual__node hero-visual__node--3" src="/assets/node3.svg" alt="" />
    </div>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <a className="wordmark" href="#top" id="top">
          <span className="wordmark__mark">h/b</span>
          <span className="wordmark__text">
            <span>HACKSTREET BOYS</span>
            <span>LIMITED</span>
          </span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#expertise">Expertise</a>
          <a href="#work">Selected work</a>
          <a href="#about">About us</a>
        </nav>
        <a className="btn btn--outline" href="#contact">
          Let’s talk
          <Arrow />
        </a>
      </header>

      <section className="hero">
        <p className="eyebrow animate-rise">
          <span className="dot" aria-hidden="true">
            ●
          </span>
          INDEPENDENT SOFTWARE STUDIO
        </p>
        <div className="hero__columns">
          <div className="hero__copy animate-rise delay-1">
            <h1>
              Good ideas.
              <br />
              Great software.
            </h1>
            <p className="hero__lede">
              Software, products and cloud.
              <br />
              Built around you.
            </p>
            <a className="btn btn--gold" href="#work">
              Explore our work
              <Arrow />
            </a>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="expertise" id="expertise">
        <div className="expertise__intro">
          <p className="label label--green">01 / EXPERTISE</p>
          <h2>Built for what’s next.</h2>
        </div>
        <div className="service-grid">
          <article className="service-card service-card--blue">
            <div className="service-visual">
              <img src="/assets/hero-browser.svg" alt="" width="160" height="116" />
            </div>
            <h3>Custom software</h3>
            <p>
              Platforms and integrations,
              <br />
              built for your business.
            </p>
          </article>
          <article className="service-card service-card--green">
            <div className="service-visual">
              <img src="/assets/hero-mobile.svg" alt="" width="56" height="100" />
            </div>
            <h3>Digital products</h3>
            <p>
              Thoughtful experiences,
              <br />
              from idea to launch.
            </p>
          </article>
          <article className="service-card service-card--tan">
            <div className="service-visual">
              <img src="/assets/hero-database.svg" alt="" width="88" height="64" />
            </div>
            <h3>Cloud &amp; scale</h3>
            <p>
              Reliable infrastructure,
              <br />
              ready to grow.
            </p>
          </article>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <div>
            <p className="label label--gold">02 / SELECTED CONCEPTS</p>
            <h2>Selected concepts.</h2>
          </div>
          <p className="section-aside">Illustrative concepts, not client work.</p>
        </div>

        <article className="project project--meridian">
          <div className="meridian">
            <div className="dashboard" aria-hidden="true">
              <div className="dashboard__toolbar">
                <strong>meridian</strong>
                <span>Workspace &nbsp;/&nbsp; Overview</span>
                <span className="dashboard__arrow">↗</span>
              </div>
              <div className="dashboard__body">
                <aside className="dashboard__side">
                  <span className="is-active">Overview</span>
                  <span>Projects</span>
                  <span>Team</span>
                  <span>Reports</span>
                  <span>Settings</span>
                </aside>
                <div className="dashboard__main">
                  <div className="dashboard__greeting">
                    <strong>Business overview</strong>
                    <span>This month ⌄</span>
                  </div>
                  <div className="metrics">
                    <div>
                      <span>Active projects</span>
                      <strong>24</strong>
                      <em>+4 this month</em>
                    </div>
                    <div>
                      <span>On-time delivery</span>
                      <strong>96%</strong>
                      <em>↑ 8%</em>
                    </div>
                    <div>
                      <span>Team capacity</span>
                      <strong>84%</strong>
                      <em>Healthy</em>
                    </div>
                  </div>
                  <div className="chart-panel">
                    <div className="chart-panel__title">
                      <strong>Delivery performance</strong>
                      <span>● Completed</span>
                    </div>
                    <div className="chart">
                      {chartHeights.map((height, index) => (
                        <div
                          key={`${height}-${index}`}
                          className={`chart__bar ${index >= 9 ? 'chart__bar--hot' : ''}`}
                          style={{
                            height: `${height}px`,
                            animationDelay: `${0.04 * index}s`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="chart__axis">
                      <span>Week 01</span>
                      <span>Week 02</span>
                      <span>Week 03</span>
                      <span>Week 04</span>
                    </div>
                  </div>
                  <div className="status-row">
                    <span>Website migration</span>
                    <span className="status-row__state">In progress</span>
                    <span>68%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project__caption">
            <div>
              <h4>Meridian</h4>
              <p className="meta">OPERATIONS PLATFORM</p>
            </div>
            <span className="project__index">01 &nbsp;↗</span>
          </div>
        </article>

        <div className="project-grid">
          <article className="project">
            <div className="preview preview--flow">
              <div className="preview__label">
                <span>FLOWPAY / FINTECH</span>
                <Arrow />
              </div>
              <div className="mini-app">
                <div className="mini-app__header">
                  <strong className="brand-flow">flowpay.</strong>
                  <span>Overview &nbsp;&nbsp; Transactions</span>
                </div>
                <h3>Your money, in the clear.</h3>
                <div className="balance">
                  <span>Available balance</span>
                  <div className="balance__row">
                    <strong>$48,250.00</strong>
                    <button type="button">Send money ↗</button>
                  </div>
                </div>
                <p className="mini-app__subhead">Recent transactions</p>
                <div className="txn">
                  <div>
                    <strong>Acme Studio</strong>
                    <span>Invoice payment</span>
                  </div>
                  <em>+$2,400.00</em>
                </div>
                <div className="txn">
                  <div>
                    <strong>Cloud services</strong>
                    <span>Monthly subscription</span>
                  </div>
                  <em>−$128.00</em>
                </div>
              </div>
            </div>
            <div className="project__caption project__caption--stack">
              <h4>Flowpay</h4>
              <p className="meta">FINANCE APPLICATION</p>
            </div>
          </article>

          <article className="project">
            <div className="preview preview--relay">
              <div className="preview__label">
                <span>RELAY / CUSTOMER EXPERIENCE</span>
                <Arrow />
              </div>
              <div className="mini-app">
                <div className="mini-app__header">
                  <strong className="brand-relay">relay</strong>
                  <span>Home &nbsp;&nbsp; Requests &nbsp;&nbsp; Documents</span>
                </div>
                <h3>Hello, Alex.</h3>
                <p className="mini-app__lede">Everything you need. All in one place.</p>
                <div className="progress-card">
                  <div className="progress-card__top">
                    <strong>Your website redesign</strong>
                    <span>Phase 3 of 4</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-track__fill" />
                  </div>
                  <p>Development is looking good.</p>
                </div>
                <div className="doc-row">
                  <strong>Brand guidelines.pdf</strong>
                  <span>Ready to download ↗</span>
                </div>
                <div className="doc-row">
                  <strong>Homepage design</strong>
                  <span>Awaiting your review ↗</span>
                </div>
              </div>
            </div>
            <div className="project__caption project__caption--stack">
              <h4>Relay</h4>
              <p className="meta">CUSTOMER PORTAL</p>
            </div>
          </article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about__columns">
          <div>
            <p className="label label--gold">03 / ABOUT</p>
            <h2>
              Small team.
              <br />
              Serious craft.
            </h2>
          </div>
          <p className="about__copy">
            An independent team of designers and engineers.
            <br />
            Your partner from first idea to launch.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="label label--contact">04 / CONTACT</p>
        <div className="contact__row">
          <h2>
            Let’s build
            <br />
            what’s next.
          </h2>
          <a className="btn btn--navy" href="mailto:hello@hackstreetboys.com">
            Start a conversation
            <Arrow />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__top">
          <strong>Hackstreet Boys Limited</strong>
          <nav className="footer__links" aria-label="Footer">
            <a href="#expertise">Expertise</a>
            <a href="#work">Selected work</a>
            <a href="#about">About us</a>
            <a href="#top">Back to top ↑</a>
          </nav>
        </div>
        <p className="footer__legal">
          © 2026 Hackstreet Boys Limited. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
