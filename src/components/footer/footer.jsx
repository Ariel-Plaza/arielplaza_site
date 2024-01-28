import "./footer.sass"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="lefth">
          <img src="#" alt="" />
          <div className="me"><h3>Jhon Carter</h3>
            <p>Head of Engineering at Google</p></div>
          <div className="socials">
            <div className="social_one">
              Facebook
            </div>
            <div className="social_two">
              Twitter
            </div>
            <div className="social_three">
              Instagram
            </div>
          </div>
        </div>
        <div className="right">
          <h2>Get in touch</h2>
          <div className="contact_info">
            <div className="email"><h4>Email Me:</h4>
              <p>contact@jhon.com</p></div>
            <div className="call_me">
              <h4>Call Me:</h4>
              <p>(414)977-048</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;