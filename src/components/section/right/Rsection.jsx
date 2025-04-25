export function RightComponent ({componentTitle, componentInfo, componentButton}) {
  return (
    <div className="rightComponent">
      <h2>{componentTitle}</h2>
      <p>{componentInfo}</p>
      <div className="link">
        <button>{componentButton}</button>
        <hr className="line"></hr>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default RightComponent;