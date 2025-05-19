import { useLocation } from "react-router-dom";
import "../css/Portfolio.css";
import { useEffect } from "react";

const portfolioData = [
  {
    title: "Real Estate",
    description:
      "Roughly 30% of our portfolio is invested in income-producing real estate. These include multi-family, industrial, and select commercial assets in major urban markets that generate steady cash flow and long-term appreciation.",
    className: "real-estate",
  },
  {
    title: "Private Equity",
    description:
      "We allocate approximately 25% to private equity, targeting businesses with strong fundamentals, scalable models, and value creation potential. Our holdings span tech-enabled services, healthcare, and niche industrial sectors.",
    className: "private-equity",
  },
  {
    title: "Private Debt",
    description:
      "Around 15% of the portfolio is dedicated to private credit strategies, offering consistent income streams. We favor senior-secured loans and asset-backed lending with strong collateral and borrower covenants.",
    className: "private-debt",
  },
  {
    title: "Hedge Funds",
    description:
      "We invest about 10% in hedge fund strategies that focus on long-short equity, market-neutral, and global macro themes. These allocations help reduce correlation with public markets and manage volatility.",
    className: "hedge-funds",
  },
  {
    title: "Public Equity",
    description:
      "The remaining 20% is held in public equities with a long-term orientation. We seek high-conviction positions in companies with durable moats, healthy balance sheets, and attractive risk-adjusted return profiles.",
    className: "public-equity",
  },
];

const Portfolio = () => {
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
    <div className="portfolio-wrapper">
      {portfolioData.map((item, index) => (
        <>
          <div
            id={`${item.className}-id`}
            className={`portfolio-section ${item.className} ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
            key={index}
          >
            <div className="portfolio-image-block" />
            <div className="portfolio-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Portfolio;
