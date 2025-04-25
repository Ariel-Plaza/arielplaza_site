import "./companyLogo.sass"

const CompanyLogo = ({src, alt}) => {
  return (
    <div className="company_logo">
      <img src={src} alt={alt} />
    </div>
  );
};

export default CompanyLogo;
