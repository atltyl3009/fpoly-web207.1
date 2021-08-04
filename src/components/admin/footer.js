export default function Footer() {
    return (
<section className>
  {/* Footer */}
  <footer className="text-center text-white mt-5" style={{backgroundColor: '#ffff66'}}>
    {/* Grid container */}
    <div className="container p-4 pb-0">
      {/* Section: CTA */}
      <section className>
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3 text-primary">Register for free</span>
          <button type="button" className="btn btn-outline-dark btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
      {/* Section: CTA */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</section>

    );
  }
  