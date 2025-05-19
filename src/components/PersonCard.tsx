import "../css/PersonCard.css";

const PersonCard = ({ person }) => {
  return (
    <div className="person-card">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${person.background})` }}
      />

      <div className="person-card-content">
        <h2 className="name">{person.name}</h2>
        <p className="title">{person.title}</p>
      </div>
    </div>
  );
};

export default PersonCard;
