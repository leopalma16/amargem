import LogoLpalmaHz from "./LogoLpalmaHz";

const Footer = () => {
  return (
    <footer className="contact">
      <div className="bob_contact">
        <h2>Bob Sousa</h2>
        <span>
          <i className="bi bi-globe"></i>
          <p> www.bobsousa.com</p>
        </span>
        <span>
          <i className="bi bi-envelope-at"></i>
          <p> bobsousa@bobsousa.com</p>
        </span>
        <span className="social">
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-facebook"></i>
        </span>
      </div>
      <div className="leo_contact">
        WebApp developed by:
        <a href="https://way.leopalma.com" target="blank">
          <LogoLpalmaHz />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
