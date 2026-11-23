const chartHeights = [37, 61, 48, 80, 67, 97, 75, 110, 94, 123, 107, 138]

function Arrow({ className = '' }) {
  return <span className={`arrow ${className}`} aria-hidden="true">↗</span>
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
        <a className="btn btn--primary" href="#contact">
          Let’s talk
          <Arrow />
        </a>
      </header>

      <section className="hero">
        <p className="eyebrow hero__eyebrow animate-rise">
          <span className="dot" aria-hidden="true">●</span>
          INDEPENDENT THINKING. EXCEPTIONAL ENGINEERING.
        </p>
        <div className="hero__columns">
          <div className="hero__copy animate-rise delay-1">
            <h1>
              Good ideas.
              <br />
              Great software.
              <br />
              Real impact.
            </h1>
            <p className="hero__lede">
              We’re Hackstreet Boys Limited. We turn complex challenges into
              thoughtful software that moves your business forward.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#work">
                Explore our work
                <Arrow />
              </a>
              <a className="btn btn--ghost" href="#about">
                Meet the team
                <Arrow />
              </a>
            </div>
          </div>
          <aside className="manifesto animate-rise delay-2">
            <div className="manifesto__header">
              <span>H/B — ENGINEERING STUDIO</span>
              <Arrow className="arrow--lime" />
            </div>
            <h2>
              Built with
              <br />
              intent.
              <br />
              Made to
              <br />
              matter.
            </h2>
            <div className="manifesto__status">
              <div>
                <span>01 / THINK</span>
                <span>Find the right problem</span>
              </div>
              <div>
                <span>02 / BUILD</span>
                <span>Engineer the right solution</span>
              </div>
              <div>
                <span>03 / EVOLVE</span>
                <span>Keep getting better</span>
              </div>
            </div>
          </aside>
        </div>
        <div className="hero__footnote">
          <span>YOUR AMBITION. OUR NEXT CHALLENGE.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <div className="capabilities" aria-label="Capabilities">
        <span>SOFTWARE ENGINEERING</span>
        <span className="capabilities__sep">+</span>
        <span>DIGITAL PRODUCTS</span>
        <span className="capabilities__sep">+</span>
        <span>CLOUD &amp; INFRASTRUCTURE</span>
        <span className="capabilities__sep">+</span>
        <span>BUSINESS SOLUTIONS</span>
      </div>

      <section className="section expertise" id="expertise">
        <div className="section__heading">
          <div>
            <p className="label">01 / WHAT WE DO</p>
            <h2>
              Complex problems.
              <br />
              Clear solutions.
            </h2>
          </div>
          <p className="section__aside">
            From the first sketch to the next release, we bring product thinking
            and engineering rigour to every stage of your journey.
          </p>
        </div>
        <div className="service-grid">
          <article className="service-card">
            <div className="service-card__top">
              <span className="label">01</span>
              <Arrow />
            </div>
            <h3>Custom software</h3>
            <p>
              Purpose-built platforms, web applications and business systems.
              Designed around how you actually work.
            </p>
            <p className="meta">WEB PLATFORMS / APIS / INTEGRATIONS</p>
          </article>
          <article className="service-card">
            <div className="service-card__top">
              <span className="label">02</span>
              <Arrow />
            </div>
            <h3>Digital products</h3>
            <p>
              Intuitive experiences, from concept to launch. We connect user
              needs with your business ambitions.
            </p>
            <p className="meta">PRODUCT STRATEGY / UX / MOBILE</p>
          </article>
          <article className="service-card">
            <div className="service-card__top">
              <span className="label">03</span>
              <Arrow />
            </div>
            <h3>Cloud &amp; scale</h3>
            <p>
              Reliable foundations for what’s next. Modern infrastructure that
              grows with your business.
            </p>
            <p className="meta">CLOUD / DEVOPS / MODERNISATION</p>
          </article>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section__heading">
          <div>
            <p className="label">02 / SELECTED CONCEPTS</p>
            <h2>Ideas into interfaces.</h2>
          </div>
          <p className="section__aside section__aside--sm">
            A glimpse of what we can build together.
            <br />
            Illustrative concepts, not client engagements.
          </p>
        </div>

        <article className="project project--meridian">
          <div className="meridian">
            <div className="meridian__copy">
              <p className="meridian__tag">MERIDIAN</p>
              <h3>
                Less admin.
                <br />
                More momentum.
              </h3>
              <p>
                One connected workspace for the people keeping business moving.
              </p>
              <div className="chips">
                <span>WEB APPLICATION</span>
                <span>B2B</span>
              </div>
            </div>
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
                          key={height + index}
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
              <h4>Meridian — Operations, connected.</h4>
              <p className="meta">
                PRODUCT STRATEGY &nbsp;/&nbsp; UX &amp; UI &nbsp;/&nbsp; FULL-STACK
                ENGINEERING
              </p>
            </div>
            <span className="project__index">01 &nbsp;↗</span>
          </div>
        </article>

        <div className="project-grid">
          <article className="project project--flow">
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
              <h4>Flowpay — Finance without friction.</h4>
              <p className="meta">
                FINTECH &nbsp;/&nbsp; WEB APPLICATION &nbsp;/&nbsp; INTEGRATIONS
              </p>
            </div>
          </article>

          <article className="project project--relay">
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
                <p className="mini-app__lede">
                  Everything you need. All in one place.
                </p>
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
              <h4>Relay — A better way to connect.</h4>
              <p className="meta">
                CUSTOMER PORTAL &nbsp;/&nbsp; UX &amp; UI &nbsp;/&nbsp; DEVELOPMENT
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section approach" id="approach">
        <div className="section__heading">
          <div>
            <p className="label">03 / HOW WE WORK</p>
            <h2>
              No black boxes.
              <br />
              Just good collaboration.
            </h2>
          </div>
          <p className="section__aside">
            You bring the vision. We bring the craft.
            <br />
            Together, we make the right thing happen.
          </p>
        </div>
        <div className="stages">
          <article>
            <p className="label">01 ──</p>
            <h3>Discover</h3>
            <p>
              We ask the right questions, get to know your business, and define
              what success looks like.
            </p>
          </article>
          <article>
            <p className="label">02 ──</p>
            <h3>Design</h3>
            <p>
              We turn the challenge into a clear plan and thoughtful experiences
              your users will love.
            </p>
          </article>
          <article>
            <p className="label">03 ──</p>
            <h3>Develop</h3>
            <p>
              We build, test, and iterate in the open. Working software, with
              you in the loop.
            </p>
          </article>
          <article>
            <p className="label">04 ──</p>
            <h3>Deliver &amp; evolve</h3>
            <p>
              We launch with care, measure what matters, and keep making things
              better.
            </p>
          </article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about__columns">
          <div>
            <p className="label label--lime">04 / THE PEOPLE BEHIND THE PIXELS</p>
            <h2>
              Serious about craft.
              <br />
              Human at heart.
            </h2>
          </div>
          <div className="about__philosophy">
            <h3>
              A software partner.
              <br />
              Not just another vendor.
            </h3>
            <p>
              Hackstreet Boys Limited brings engineering, design, and
              problem-solving together to create software with purpose. We get
              close to your challenges and stay focused on the people who use
              what we build.
            </p>
          </div>
        </div>
        <div className="principles">
          <article>
            <h4>Think like a partner</h4>
            <p>Your goals become our shared ambition.</p>
          </article>
          <article>
            <h4>Build for the long run</h4>
            <p>Clean, considered, and made to evolve.</p>
          </article>
          <article>
            <h4>Keep it human</h4>
            <p>Clear conversations. No unnecessary jargon.</p>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="label label--soft">05 / SOMETHING ON YOUR MIND?</p>
        <div className="contact__row">
          <h2>
            Let’s build
            <br />
            what’s next.
          </h2>
          <div className="contact__aside">
            <p>
              A bold idea. A tricky challenge.
              <br />
              A product ready for its next chapter.
              <br />
              We’d love to hear about it.
            </p>
            <a className="btn btn--white" href="mailto:hello@hackstreetboys.com">
              Tell us about your project
              <Arrow />
            </a>
          </div>
        </div>
        <div className="contact__closing">
          <span>GOOD SOFTWARE STARTS WITH A CONVERSATION.</span>
          <a href="mailto:hello@hackstreetboys.com">
            YOUR NEXT CHAPTER STARTS HERE ↗
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__top">
          <div>
            <strong>Hackstreet Boys Limited</strong>
            <p>Software with purpose. Built together.</p>
          </div>
          <nav className="footer__links" aria-label="Footer">
            <a href="#expertise">Expertise</a>
            <a href="#work">Selected work</a>
            <a href="#about">About us</a>
            <a href="#top">Back to top ↑</a>
          </nav>
        </div>
        <div className="footer__legal">
          <span>© 2026 Hackstreet Boys Limited. All rights reserved.</span>
          <span className="meta">INDEPENDENT MINDS. CONNECTED BY CRAFT.</span>
        </div>
      </footer>
    </div>
  )
}
