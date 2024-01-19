export function RightComponent ({componentTitle, componentInfo, componentButton}) {
  return (
    <div className="right_component">
      <h2>{componentTitle}</h2>
      <p>{componentInfo}</p>
      <button>{componentButton}</button>
      
    </div>
  );
};

export default RightComponent;
