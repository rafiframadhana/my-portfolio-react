import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { frontendProjects } from "../data/frontendProjects";
import { backendProjects } from "../data/backendProjects";
import ProjectCard from "./ProjectCard";
import CustomTooltip from "./CustomTooltip";
import useWindowSize from "../hooks/useWindowSize";
import "./../styles/projects.css";

export default function Projects() {
  const { width } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(getInitialProjectsPerPage(width));
  const [isFrontend, setIsFrontend] = useState(true);
  const [isBackend, setIsBackend] = useState(false);
  const [active, setActive] = useState("frontend");
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.2 });

  function getInitialProjectsPerPage(width) {
    if (width > 1249) return 3;
    if (width >= 768 && width <= 1200) return 4;
    return 3;
  }

  useEffect(() => {
    if (width > 1194) {
      setProjectsPerPage(3);
    } else if (width >= 768 && width <= 1194) {
      setProjectsPerPage(4);
    } else {
      setProjectsPerPage(3);
    }
  }, [width]);

  const handleActive = (type) => {
    setActive(type);
    if (type === "frontend") {
      setIsFrontend(true);
      setIsBackend(false);
    } else if (type === "backend") {
      setIsFrontend(false);
      setIsBackend(true);
    }
    setCurrentPage(1);
  };

  const getProjects = () => {
    if (isFrontend) return frontendProjects;
    if (isBackend) return backendProjects;
    return [];
  };

  const projects = getProjects();
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  useEffect(() => {
    setCurrentPage(1);
  }, [projectsPerPage]);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const getVisiblePageNumbers = () => {
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(start + 2, totalPages);

    if (end === totalPages) {
      start = Math.max(1, end - 2);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <section id="projects">
      <motion.h2
        ref={titleRef}
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="stack-btn-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <button
          className={`stack-opt-btn ${active === "frontend" ? "active" : ""}`}
          onClick={() => handleActive("frontend")}
        >
          Frontend
        </button>
        <button
          className={`stack-opt-btn ${active === "backend" ? "active" : ""}`}
          onClick={() => handleActive("backend")}
        >
          Backend
        </button>
        {/* <button onClick={getFullStack}>Fullstack</button> */
        /*add when fullstack projects available*/}
      </motion.div>

      <div className="row g-4" id="projects-container">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {totalPages > 0 && (
        <motion.div
          className="pagination-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="pagination">
            <CustomTooltip title="First Page">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="page-btn"
              >
                &laquo;
              </button>
            </CustomTooltip>

            <CustomTooltip title="Previous Page">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="page-btn"
              >
                &larr;
              </button>
            </CustomTooltip>

            {getVisiblePageNumbers().map((pageNum) => (
              <CustomTooltip key={pageNum} title={`Page ${pageNum}`}>
                <button
                  onClick={() => handlePageChange(pageNum)}
                  className={`page-btn ${
                    currentPage === pageNum ? "active" : ""
                  }`}
                >
                  {pageNum}
                </button>{" "}
              </CustomTooltip>
            ))}

            <CustomTooltip title="Next Page">
              {" "}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="page-btn"
              >
                &rarr;
              </button>
            </CustomTooltip>

            <CustomTooltip title="Last Page">
              {" "}
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="page-btn"
              >
                &raquo;
              </button>
            </CustomTooltip>
          </div>
        </motion.div>
      )}
    </section>
  );
}
