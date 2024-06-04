export function RightComponent ({componentTitle, componentInfo, componentButton}) {
  return (
    <div className="right_component">
      <h2>{componentTitle}</h2>
      <p>{componentInfo}</p>
      <div className="link">
        <button>{componentButton}</button>
        <hr className="line"></hr>
      </div>
    </div>
  );
};

export default RightComponent;