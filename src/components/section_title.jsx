import "./section_title.sass";

export function Section_title({ sectionTitle, Title }) {
  return (
    <div className="section_title">
      <div className="title_up">
        <p>/</p>
        <h3>{sectionTitle}</h3>
      </div>
      <h2>{Title }</h2>
    </div>
  );
};

export default Section_title;