import "../App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import sustainabilityImage from "../assets/sustainability.jpg";
import transportImage from "../assets/transport.jpg";
import energyImage from "../assets/energy.jpg";
import foodImage from "../assets/food.jpg";
import natureImage from "../assets/nature.jpg";

function Home() {
  return (
    <div className="app">

      <Header />

      {/* ================= HERO ================= */}
      <main id="home" className="hero">
        <div className="hero-container">

          <div className="hero-content">
            <p className="eyebrow">
              CARBON FOOTPRINT MONITORING SYSTEM
            </p>

            <h1>
              Understand Your Impact.
              <span>Build a Greener Future.</span>
            </h1>

            <p className="hero-description">
              Track everyday activities, understand your environmental
              impact, and take meaningful steps towards a more sustainable
              lifestyle.
            </p>

            <div className="hero-actions">
              <a href="#register" className="primary-btn">
                Get Started
              </a>

              <a href="#about" className="secondary-btn">
                Learn More
              </a>
            </div>

            <div className="hero-highlights">
              <span>✓ Track Activities</span>
              <span>✓ Measure Carbon Impact</span>
              <span>✓ Build Sustainable Habits</span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="hero-visual">

            <div className="hero-image-wrapper">
              <img
                src={sustainabilityImage}
                alt="Sustainable environment with renewable energy"
                className="hero-image"
              />

              <div className="image-overlay">
                <span>🌿</span>

                <div>
                  <strong>A Greener Future</strong>
                  <small>Starts with better choices</small>
                </div>
              </div>
            </div>

            <div className="floating-info info-one">
              <span className="floating-icon">🌱</span>

              <div>
                <strong>Sustainable</strong>
                <small>Daily Choices</small>
              </div>
            </div>

            <div className="floating-info info-two">
              <span className="floating-icon">📉</span>

              <div>
                <strong>Reduce</strong>
                <small>Carbon Emissions</small>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* ================= PROBLEM ================= */}
      <section id="about" className="section problem-section">

        <div className="section-heading">
          <p className="eyebrow">THE PROBLEM</p>

          <h2>
            Everyday Choices Create an
            <span> Environmental Impact</span>
          </h2>

          <p>
            Transportation, electricity usage, food and shopping contribute
            to carbon emissions, but many people do not have a simple way to
            understand the environmental impact of their daily activities.
          </p>
        </div>

        <div className="impact-grid">

          <article className="impact-card">
            <span className="card-number">01</span>
            <div className="icon-box">🚗</div>

            <h3>Transportation</h3>

            <p>
              Daily travel and transportation choices contribute to an
              individual's overall carbon footprint.
            </p>
          </article>

          <article className="impact-card">
            <span className="card-number">02</span>
            <div className="icon-box">⚡</div>

            <h3>Electricity Usage</h3>

            <p>
              Electricity consumption is another important source of
              emissions in everyday life.
            </p>
          </article>

          <article className="impact-card">
            <span className="card-number">03</span>
            <div className="icon-box">🍽️</div>

            <h3>Food Choices</h3>

            <p>
              Different food choices can have different environmental
              impacts and contribute to carbon emissions.
            </p>
          </article>

          <article className="impact-card">
            <span className="card-number">04</span>
            <div className="icon-box">🛍️</div>

            <h3>Shopping</h3>

            <p>
              Everyday purchases and consumption habits also contribute to
              an individual's environmental footprint.
            </p>
          </article>

        </div>
      </section>

      {/* ================= OBJECTIVE ================= */}
      <section className="section objective-section">

        <div className="objective-wrapper">

          <div className="objective-visual">

            <div className="orbit">

              <div className="objective-centre">
                <span>🌱</span>
                <strong>Track</strong>
                <small>Understand • Improve</small>
              </div>

              <div className="orbit-icon orbit-a">CO₂</div>
              <div className="orbit-icon orbit-b">📊</div>
              <div className="orbit-icon orbit-c">🎯</div>

            </div>

          </div>

          <div className="objective-content">

            <p className="eyebrow">OUR OBJECTIVE</p>

            <h2>
              Making Sustainability
              <span> Measurable</span>
            </h2>

            <p className="objective-intro">
              Our objective is to help users understand their environmental
              impact by tracking everyday activities and calculating their
              carbon footprint.
            </p>

            <div className="objective-points">

              <div className="objective-point">
                <span className="tick">✓</span>

                <div>
                  <h3>Track Everyday Activities</h3>
                  <p>
                    Record activities that contribute to your environmental
                    impact.
                  </p>
                </div>
              </div>

              <div className="objective-point">
                <span className="tick">✓</span>

                <div>
                  <h3>Understand Carbon Emissions</h3>
                  <p>
                    Calculate and understand the footprint generated from
                    recorded activities.
                  </p>
                </div>
              </div>

              <div className="objective-point">
                <span className="tick">✓</span>

                <div>
                  <h3>Develop Sustainable Habits</h3>
                  <p>
                    Use analytics, recommendations and goals to encourage
                    environmentally responsible behaviour.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="section process-section">

        <div className="section-heading">
          <p className="eyebrow">HOW IT WORKS</p>

          <h2>
            From Daily Activities to
            <span> Better Decisions</span>
          </h2>

          <p>
            CarbonTrack turns everyday activity information into useful
            environmental insights.
          </p>
        </div>

        <div className="process-grid">

          <div className="process-card">
            <div className="process-number">1</div>
            <div className="process-icon">📝</div>

            <h3>Record Activities</h3>

            <p>
              Users record activities such as transport, electricity,
              food and shopping.
            </p>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-card">
            <div className="process-number">2</div>
            <div className="process-icon">🌿</div>

            <h3>Calculate Footprint</h3>

            <p>
              The system calculates estimated CO₂ emissions using
              predefined emission factors.
            </p>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-card">
            <div className="process-number">3</div>
            <div className="process-icon">📊</div>

            <h3>Understand Impact</h3>

            <p>
              Users understand their environmental impact through
              sustainability analytics.
            </p>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-card">
            <div className="process-number">4</div>
            <div className="process-icon">🎯</div>

            <h3>Take Action</h3>

            <p>
              Recommendations and goals encourage users to reduce
              their carbon footprint.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="services" className="section features-section">

        <div className="section-heading">
          <p className="eyebrow">OUR FEATURES</p>

          <h2>
            Everything You Need for a
            <span> Greener Lifestyle</span>
          </h2>

          <p>
            The system combines activity tracking, carbon calculation,
            analytics and sustainability tools in one platform.
          </p>
        </div>

        <div className="features-grid">

          <article className="feature-card">
            <div className="feature-icon">🚗</div>
            <h3>Activity Tracking</h3>

            <p>
              Record transport, electricity, food and shopping activities
              in one place.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">🌿</div>
            <h3>Carbon Calculation</h3>

            <p>
              Calculate estimated carbon emissions using predefined
              emission factors.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Sustainability Analytics</h3>

            <p>
              Analyse carbon emissions through daily, weekly and monthly
              insights.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Recommendations</h3>

            <p>
              Receive personalised recommendations for reducing carbon
              emissions.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Goal Tracking</h3>

            <p>
              Set sustainability goals and monitor progress towards
              reducing your footprint.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Admin Management</h3>

            <p>
              Administrators manage users, categories, activity types
              and emission factors.
            </p>
          </article>

        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="section benefits-section">

        <div className="benefits-wrapper">

          <div className="benefits-content">

            <p className="eyebrow">BENEFITS</p>

            <h2>
              Small Changes Can Create
              <span> Meaningful Impact</span>
            </h2>

            <p className="benefits-intro">
              Understanding your footprint can help you make more informed
              and environmentally responsible decisions.
            </p>

            <div className="benefit-list">

              <div className="benefit-item">
                <span>01</span>

                <div>
                  <h3>Understand Your Impact</h3>
                  <p>
                    See how everyday activities contribute to your carbon
                    footprint.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <span>02</span>

                <div>
                  <h3>Identify High-Emission Activities</h3>
                  <p>
                    Understand which activities contribute more to your
                    emissions.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <span>03</span>

                <div>
                  <h3>Make Sustainable Choices</h3>
                  <p>
                    Use recommendations to make more environmentally
                    friendly decisions.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <span>04</span>

                <div>
                  <h3>Track Your Progress</h3>
                  <p>
                    Monitor sustainability goals and improvements over time.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* PROGRESS PREVIEW */}
          <div className="dashboard-preview">

            <div className="preview-top">
              <div>
                <small>YOUR PROGRESS</small>
                <h3>Sustainability Journey</h3>
              </div>

              <span>🌱</span>
            </div>

            <div className="progress-block">
              <div className="progress-label">
                <span>Activity Awareness</span>
                <strong>85%</strong>
              </div>

              <div className="progress-track">
                <div className="progress-fill fill-85"></div>
              </div>
            </div>

            <div className="progress-block">
              <div className="progress-label">
                <span>Sustainable Choices</span>
                <strong>70%</strong>
              </div>

              <div className="progress-track">
                <div className="progress-fill fill-70"></div>
              </div>
            </div>

            <div className="progress-block">
              <div className="progress-label">
                <span>Goal Progress</span>
                <strong>60%</strong>
              </div>

              <div className="progress-track">
                <div className="progress-fill fill-60"></div>
              </div>
            </div>

            <div className="preview-message">
              🌿 Every sustainable action contributes to a greener future.
            </div>

          </div>

        </div>
      </section>

      {/* ================= SUSTAINABILITY JOURNEY ================= */}
      <section className="section journey-section">

        <div className="section-heading">
          <p className="eyebrow">
            YOUR SUSTAINABILITY JOURNEY
          </p>

          <h2>
            Better Awareness.
            <span> Better Choices.</span>
          </h2>

          <p>
            The platform focuses on major areas of everyday life that
            contribute to an individual's carbon footprint.
          </p>
        </div>

        <div className="journey-grid">

          {/* TRANSPORT */}
          <article className="journey-card">

            <div className="journey-image-box">
              <img
                src={transportImage}
                alt="Sustainable transportation"
                className="journey-image"
              />

              <span className="journey-tag">
                Transportation
              </span>
            </div>

            <div className="journey-card-content">
              <h3>Travel Smarter</h3>

              <p>
                Understand the environmental impact of your transportation
                choices and develop more sustainable travel habits.
              </p>
            </div>

          </article>

          {/* ENERGY */}
          <article className="journey-card">

            <div className="journey-image-box">
              <img
                src={energyImage}
                alt="Renewable and sustainable energy"
                className="journey-image"
              />

              <span className="journey-tag">
                Energy
              </span>
            </div>

            <div className="journey-card-content">
              <h3>Use Energy Wisely</h3>

              <p>
                Become more aware of electricity consumption and understand
                its contribution to your carbon footprint.
              </p>
            </div>

          </article>

          {/* FOOD */}
          <article className="journey-card">

            <div className="journey-image-box">
              <img
                src={foodImage}
                alt="Sustainable food choices"
                className="journey-image"
              />

              <span className="journey-tag">
                Food
              </span>
            </div>

            <div className="journey-card-content">
              <h3>Choose Mindfully</h3>

              <p>
                Understand how everyday food and consumption choices can
                influence environmental impact.
              </p>
            </div>

          </article>

          {/* ENVIRONMENT */}
          <article className="journey-card">

            <div className="journey-image-box">
              <img
                src={natureImage}
                alt="Environmental protection and green nature"
                className="journey-image"
              />

              <span className="journey-tag">
                Environment
              </span>
            </div>

            <div className="journey-card-content">
              <h3>Protect Our Planet</h3>

              <p>
                Build sustainable habits, reduce your environmental impact
                and monitor your progress over time.
              </p>
            </div>

          </article>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="register" className="cta-section">

        <div className="cta-circle circle-one"></div>
        <div className="cta-circle circle-two"></div>

        <div className="cta-content">

          <p className="cta-label">
            START YOUR JOURNEY
          </p>

          <h2>
            Ready to Build a Greener Future?
          </h2>

          <p>
            Start understanding your environmental impact and take
            your first step towards a more sustainable lifestyle.
          </p>

          <button className="cta-button">
            Register Now
          </button>

          <small>
            Your registration will be submitted for administrator approval.
          </small>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Home;