import { Link } from "react-router-dom";
import "../css/LinkCard.css";

const LinkCard = ({ title, link, background }) => {
  const isTeamCard = title === "OUR TEAM";
  return (
    <Link to={link} className="link-card-link">
      <div
        className="link-card"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, ${
            isTeamCard ? 0.45 : 0.2
          }), rgba(0, 0, 0, ${isTeamCard ? 0.45 : 0.2})), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="link-content">
          <h2 className="link-title">{title}</h2>
          <div className="hover-overlay">Learn More</div>
        </div>
      </div>
    </Link>
  );
};

export default LinkCard;
