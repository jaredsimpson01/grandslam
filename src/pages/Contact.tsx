import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="main-content-contact">
      <div className="hero-wrapper-contact">
        <section className="hero-contact">
          <h1 className="hero-overlay-contact">Contact Us</h1>
        </section>
      </div>

      <div className="info-grid">
        <div className="contact-card">
          <h3>Address</h3>
          <p>175 Bloor Street East Suite 901, Toronto, ON M4W 3R8</p>
        </div>
        <div className="contact-card">
          <h3>General Inquiries</h3>
          <p>
            Message: <a href="mailto:info@grandslam.com">info@grandslam.com</a>
          </p>
        </div>
        <div className="contact-card">
          <h3>Tax-Related Inquiries</h3>
          <p>
            Message: <a href="mailto:tax@grandslam.com">tax@grandslam.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
