import ResourceWallMP from '../assets/resource-wall.png'

const Projects = () => {
  return (
    <section id="projects">

      <div className="wrapper">
        <div className="accordion">
          <div className="accordion-panel">
            <h2 id="panel1-heading">
              <button
                className="accordion-trigger"
                aria-controls="panel1-content"
                aria-expanded="true"
              >
                <span id="panel1-title">Boating</span> 
                <svg aria-hidden="true" className="accordion-icon"></svg>
              </button>
            </h2>

            <div
              className="accordion-content"
              id="panel1-content"
              aria-labelledby="panel1-heading"
              aria-hidden="false"
              role="region"
            >
              <p>
                LOREM IPSUM 1
              </p>
              <img
                class="accordion-image"
                src={ResourceWallMP}
                alt="resource wall main page"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects