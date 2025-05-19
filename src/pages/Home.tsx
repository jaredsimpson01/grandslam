import LinkCard from "../components/LinkCard";
import "../css/Home.css";
import homeOIP from "../assets/homeOIP.png";
import homeOP from "../assets/homeOP.png";
import homeOT from "../assets/homeOT.png";
import homeCU from "../assets/homeCU.png";

const Home = () => {
  const links = [
    {
      title: "OUR INVESTMENT PHILOSOPHY",
      link: "/philosophy",
      background: homeOIP,
    },
    { title: "OUR PORTFOLIO", link: "/portfolio", background: homeOP },
    { title: "OUR TEAM", link: "/team", background: homeOT },
    { title: "CONTACT US", link: "/contact", background: homeCU },
  ];

  return (
    <div className="main-content">
      <div className="hero-wrapper">
        <section className="hero">
          <h1 className="hero-overlay">
            Strategic Investing for Growth and Long-Term Impact
          </h1>
        </section>
      </div>

      <div className="info-grid">
        {links.map((link) => (
          <LinkCard
            key={link.title}
            title={link.title}
            link={link.link}
            background={link.background}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
