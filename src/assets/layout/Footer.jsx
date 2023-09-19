import LogoLpalmaHz from "./LogoLpalmaHz";
import { callOnWhats } from "../functions/Functions";

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
          <a
            rel="noreferrer"
            href="https://www.instagram.com/bobsousa/"
            target="_blank"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            rel="noreferrer"
            href="https://www.facebook.com/bobsousa.hama"
            target="_blank"
          >
            <i className="bi bi-facebook"></i>
          </a>
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
