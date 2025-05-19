import { useLocation } from "react-router-dom";
import "../css/Philosophy.css";
import { useEffect } from "react";

const Philosophy = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -window.innerHeight / 2 + el.clientHeight / 2;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="philosophy-main-content">
      <div id="our-investing-philosophy" className="philosophy-wrapper">
        <div className="philosophy section">
          <svg
            className="svg-shape top-left-arc"
            viewBox="0 0 200 200"
            preserveAspectRatio="none"
          >
            <path
              d="M200,0 Q100,100 0,200"
              stroke="rgba(255,255,255,0.08)"
              stroke-width="4"
              fill="none"
            />
          </svg>
          <svg className="svg-shape bottom-right-slash" viewBox="0 0 200 200">
            <rect
              x="0"
              y="80"
              width="200"
              height="40"
              fill="rgba(255,255,255,0.06)"
              transform="rotate(-20 100 100)"
            />
          </svg>
          <div className="philosophy-text-overlay">
            <h2 className="philosophy-title">Our Investing Philosophy</h2>
            <p>
              Our key principal is seeking out asymmetric returns utilizing
              alternative investments. Our priority is to find investing themes
              - and are flexible and will focus only on what we believe will
              give us asymettric returns at that particular time. After we
              identify these investing themes and major consideration is given
              to finding high after tax returns where we believe the risk of
              capital is very low. Investments that are illiquid for more than 2
              years we seek out even higher after tax returns with same low risk
              of loss of capital.
            </p>
          </div>
        </div>
      </div>

      <div className="philosophy-wrapper">
        <div id="commitment" className="charity section">
          <div className="philosophy-text-overlay">
            <h2 className="philosophy-title">Our Commitment to Giving</h2>
            <p>
              At Grandslam, we believe success should be shared. We are
              committed to supporting charitable causes that promote access,
              education, and wellness through sport and beyond. A portion of our
              earnings goes directly toward organizations that create real
              impact in underserved communities.
            </p>
          </div>
        </div>
      </div>

      <div className="philosophy-wrapper">
        <div id="alternatives" className="alternative-investments section">
          <svg className="svg-shape top-right-bar" viewBox="0 0 200 200">
            <rect
              x="0"
              y="0"
              width="250"
              height="20"
              fill="rgba(255,255,255,0.08)"
              transform="rotate(25 0 0)"
            />
          </svg>
          <svg className="svg-shape bottom-left-circle" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="rgba(255,255,255,0.05)" />
          </svg>

          <svg className="svg-shape accent-block" viewBox="0 0 600 300">
            <rect
              x="0"
              y="0"
              width="600"
              height="150"
              fill="rgba(255,255,255,0.07)"
              transform="rotate(-8 0 0)"
            />
          </svg>
          <div className="philosophy-text-overlay">
            <h2 className="philosophy-title">Why Alternative Investments?</h2>
            <p>
              At Grandslam, we believe that traditional asset classes alone are
              no longer sufficient to meet the evolving demands of modern
              portfolios. Alternative investments—such as private equity, real
              assets, and hedge strategies—offer powerful tools for enhancing
              returns, managing risk, and achieving true diversification. By
              incorporating alternatives, we help our clients build more
              resilient portfolios that are better equipped to navigate market
              volatility and capture long-term opportunities.
            </p>
          </div>
          <img />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
