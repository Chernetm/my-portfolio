import { Github, Globe } from "lucide-react";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Recent Work</h2>
      <span className="section__subtitle">Most recent projects</span>

      <div className="work__container container grid">
        {/* Project 1 */}
        <div className="work__card">
          <img
            src="/customer-support.png"
            alt="Customer Support System"
            className="work__img"
          />

          <h3 className="work__title">Customer Support System</h3>

          <div className="work__links">
            <a
              href="https://your-live-demo-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="work__button"
            >
              Live <Globe size={18} />
            </a>

            <a
              href="https://github.com/yourusername/customer-support-system"
              target="_blank"
              rel="noopener noreferrer"
              className="work__button"
            >
              Code <Github size={18} />
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="work__card">
          <img
            src="/ecommerce.png"
            alt="E-commerce Platform"
            className="work__img"
          />

          <h3 className="work__title">E-commerce Platform</h3>

          <div className="work__links">
            <a
              href="https://your-ecommerce-live-site.com"
              target="_blank"
              rel="noopener noreferrer"
              className="work__button"
            >
              Live <Globe size={18} />
            </a>

            <a
              href="https://github.com/yourusername/ecommerce-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="work__button"
            >
              Code <Github size={18} />
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="work__card">
          <img
            src="/school-portal.png"
            alt="School Portal System"
            className="work__img"
          />

          <h3 className="work__title">School Portal System</h3>

          <div className="work__links">
            <a
              href="https://your-school-portal-live-site.com"
              target="_blank"
              rel="noopener noreferrer"
              className="work__button"
            >
              Live <Globe size={18} />
            </a>

            <a
              href="https://github.com/yourusername/school-portal-system"
              target="_blank"
              rel="noopener noreferrer"
              className="work__button"
            >
              Code <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
