import "./clientCard.sass";
import UserClient from "./UserClient.jsx";

const ClientCard = ({ img, brand, info, userclient, jobposition }) => {
  return (
    <div className="client_card">
      <img src={img} alt={userclient} />
      <div className="testimonial">
        <img src={brand} alt="" />
        <p className="info">{info}</p>
        <div className="bottom">
          <UserClient
            userclient="ANDY SMITH"
            jobposition="VP OF DEVOPS AT VENTURE"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
