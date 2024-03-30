import React from 'react';
import { NavLink } from "react-router-dom";
import Analytics from "../components/Analytics";
import { useAuth } from '../store/Auths';


const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <p>Welcome ,{user ? `${user.username} to our website` : ` to our website`}</p>
              <h1>Why Choose Us? </h1>
              <p>
                Expertise: Our staff is made up of seasoned IT specialists that are enthusiastic about remaining current with the newest developments in the field.
              </p>
              <p>
                Customisation: We are aware that each company is distinct.
                For this reason, we develop solutions that are suited to your unique requirements and objectives.
              </p>
              <p>
                Customer-Centric Approach: We put your satisfaction first and offer excellent help to handle your IT issues.
              </p>
              <p>
                Affordability: We provide reasonable prices without sacrificing the calibre of our services.
              </p>
              <p>
                Dependability: You can rely on us to be there for you. Our goal is to guarantee that your IT environment is dependable and open around-the-clock.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}

export default About
