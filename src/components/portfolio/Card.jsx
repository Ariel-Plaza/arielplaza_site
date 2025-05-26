import "./card.sass";

const Card = ({
  href,
  portfolio_number,
  tecnology1,
  tecnology2,
  icon_client,
  client,
  title,
  img,
}) => {
  return (
      <div className={portfolio_number}>
        <a className="client_link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver proyecto: ${title}`}
        >
        <div className="prog_lang">
          <div className="tec_button tec1">{tecnology1}</div>
          <div className="tec_button tec2">{tecnology2}</div>
        </div>
        <div className="client">
          <img src={icon_client} alt="" />
          {client}
        </div>
        <div className="project_title">{title}</div>
        <img className="project_image" src={img} alt="project image" />
      </a>
    </div>
    
  );
};

export default Card;
