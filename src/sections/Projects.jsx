import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  frontendProjects,
  backendProjects,
  fullstackProjects,
  allProjects,
} from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Tooltip from "@mui/material/Tooltip";
import useWindowSize from "../hooks/useWindowSize";
import "./../styles/projects.css";
import ShinyText from "../components/ShinyText";

export default function Projects() {
  const { width } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(
    getInitialProjectsPerPage(width)
  );
  const [isAllProjects, setisAllProjects] = useState(true);
  const [isFullstack, setIsFullstack] = useState(false);
  const [isFrontend, setIsFrontend] = useState(false);
  const [isBackend, setIsBackend] = useState(false);
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
    } else if (width >= 768 && width <= 1022) {
      setProjectsPerPage(4);
    } else {
      setProjectsPerPage(3);
    }
  }, [width]);

  const handleActive = (event) => {
    const type = event.target.value;

    if (type === "all") {
      setisAllProjects(true);
      setIsFullstack(false);
      setIsFrontend(false);
      setIsBackend(false);
    } else if (type === "fullstack") {
      setisAllProjects(false);
      setIsFullstack(true);
      setIsFrontend(false);
      setIsBackend(false);
    } else if (type === "frontend") {
      setisAllProjects(false);
      setIsFullstack(false);
      setIsFrontend(true);
      setIsBackend(false);
    } else if (type === "backend") {
      setisAllProjects(false);
      setIsFullstack(false);
      setIsFrontend(false);
      setIsBackend(true);
    }
    setCurrentPage(1);
  };

  const getProjects = () => {
    if (isAllProjects) return allProjects;
    if (isFullstack) return fullstackProjects;
    if (isFrontend) return frontendProjects;
    if (isBackend) return backendProjects;
    return [];
  };

  const projects = getProjects();
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

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
        initial={{ opacity: 0, y: -50 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <ShinyText text="Projects" disabled={false} speed={2} />
      </motion.h2>

      <motion.div
        className="stack-btn-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <select className="stack-opt-btn" onChange={handleActive}>
          <option value="all">All</option>
          <option value="fullstack">Fullstack</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>
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
            <Tooltip title="First Page" arrow>
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="page-btn"
              >
                &laquo;
              </button>
            </Tooltip>

            <Tooltip title="Previous Page" arrow>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="page-btn"
              >
                &larr;
              </button>
            </Tooltip>

            {getVisiblePageNumbers().map((pageNum) => (
              <Tooltip key={pageNum} title={`Page ${pageNum}`} arrow>
                <button
                  onClick={() => handlePageChange(pageNum)}
                  className={`page-btn ${
                    currentPage === pageNum ? "active" : ""
                  }`}
                >
                  {pageNum}
                </button>{" "}
              </Tooltip>
            ))}

            <Tooltip title="Next Page" arrow>
              {" "}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="page-btn"
              >
                &rarr;
              </button>
            </Tooltip>

            <Tooltip title="Last Page" arrow>
              {" "}
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="page-btn"
              >
                &raquo;
              </button>
            </Tooltip>
          </div>
        </motion.div>
      )}
    </section>
  );
}
