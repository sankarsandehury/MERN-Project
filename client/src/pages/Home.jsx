import React from 'react'
import Analytics from '../components/Analytics';

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>The best it firm in the world is us.</p>
              <h1>Welcome to Bapi Website</h1>
              <p>
                Are you prepared to use state-of-the-art IT solutions to propel your company to new heights? There's nowhere else to look! At Bapi Tech, our expertise lies in offering cutting-edge IT services and solutions customised to your specific requirements.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      {/* 2nd section */}

      <Analytics />

      {/* 3rdsection */}

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Are you prepared to start building an IT infrastructure that is more safe and effective? For a free consultation and to learn more about how Thapa Technical can support the growth of your company in the digital era, get in touch with us today.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home;

