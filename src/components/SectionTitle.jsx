import "./sectiontitle.sass";

export function SectionTitle({ sectionTitle, Title }) {
  return (
    <div className="sectionTitle">
      <div className="titleUp">
        <span>/</span>
        <h3>{sectionTitle}</h3>
      </div>
      <h2>{Title}</h2>
    </div>
  );
}

export default SectionTitle;
