import ResourceWallMP from '../assets/resource-wall.png'
import ThreeJSPage from '../assets/three-js-page.png'

import { FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io'
import { TbBrandThreejs } from 'react-icons/tb'

import '../styles/projects.css'

const Projects = () => {

  const handleClick = (e) => {
    const activePanel = e.target.closest('.accordion-panel')
    if (!activePanel) return;
  }

  const toggleAccordion = (panelToActivate) => {
    const buttons = panelToActivate.parentElement
  }

  return (
    <section id="projects">

      <div className="wrapper">
        <div className="accordion" onClick={(e) => handleClick(e)}>

          <div className="accordion-panel">
            <h2 id="panel1-heading">
              <button
                className="accordion-trigger"
                aria-controls="panel1-content"
                aria-expanded="true"
              >
                <span id="panel1-title">Boating</span> 
                <span
                  aria-hidden="true"
                  className="accordion-icon"
                >
                  <IoLogoJavascript />
                </span>
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
                className="accordion-image"
                src={ResourceWallMP}
                alt="resource wall main page"
              />
            </div>
          </div>

          <div className="accordion-panel">
            <h2 id="panel2-heading">
              <button
                className="accordion-trigger"
                aria-controls="panel2-content"
                aria-expanded="false"
              >
                <span id="panel2-title">Boating</span> 
                <span
                  aria-hidden="true"
                  className="accordion-icon"
                >
                  <TbBrandThreejs />
                </span>
              </button>
            </h2>
            <div
              className="accordion-content"
              id="panel2-content"
              aria-labelledby="panel2-heading"
              aria-hidden="false"
              role="region"
            >
              <p>
                LOREM IPSUM 1
              </p>
              <img
                className="accordion-image"
                src={ThreeJSPage}
                alt="resource wall main page"
              />
            </div>
          </div>

          <div className="accordion-panel">
            <h2 id="panel3-heading">
              <button
                className="accordion-trigger"
                aria-controls="panel3-content"
                aria-expanded="false"
              >
                <span id="panel3-title">Boating</span> 
                <span
                  aria-hidden="true"
                  className="accordion-icon"
                >
                  <TbBrandThreejs />
                </span>
              </button>
            </h2>
            <div
              className="accordion-content"
              id="panel3-content"
              aria-labelledby="panel3-heading"
              aria-hidden="false"
              role="region"
            >
              <p>
                LOREM IPSUM 1
              </p>
              <img
                className="accordion-image"
                src={ThreeJSPage}
                alt="resource wall main page"
              />
            </div>
          </div>

          <div className="accordion-panel">
            <h2 id="panel4-heading">
              <button
                className="accordion-trigger"
                aria-controls="panel4-content"
                aria-expanded="false"
              >
                <span id="panel4-title">Boating</span> 
                <span
                  aria-hidden="true"
                  className="accordion-icon"
                >
                  <TbBrandThreejs />
                </span>
              </button>
            </h2>
            <div
              className="accordion-content"
              id="panel4-content"
              aria-labelledby="panel4-heading"
              aria-hidden="false"
              role="region"
            >
              <p>
                LOREM IPSUM 1
              </p>
              <img
                className="accordion-image"
                src={ThreeJSPage}
                alt="resource wall main page"
              />
            </div>
          </div>

          <div className="accordion-panel">
            <h2 id="panel5-heading">
              <button
                className="accordion-trigger"
                aria-controls="panel5-content"
                aria-expanded="false"
              >
                <span id="panel5-title">Boating</span> 
                <span
                  aria-hidden="true"
                  className="accordion-icon"
                >
                  <TbBrandThreejs />
                </span>
              </button>
            </h2>
            <div
              className="accordion-content"
              id="panel5-content"
              aria-labelledby="panel5-heading"
              aria-hidden="false"
              role="region"
            >
              <p>
                LOREM IPSUM 1
              </p>
              <img
                className="accordion-image"
                src={ThreeJSPage}
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