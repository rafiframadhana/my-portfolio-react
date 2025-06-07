import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Skeleton } from "@mui/material";
import github from "./../assets/images/icon/github-icon.png";
import web from "./../assets/images/icon/internet.png";
import styled from "styled-components";
import CustomTooltip from "./CustomTooltip";

const StyledProjectCard = styled(motion.div)`
  background: var(--project-card-bg);
  padding: 0;
  border-radius: 12px;
  width: 100%;
  height: 480px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease;
  position: relative;
  display: flex;
  flex-direction: column;

  .row {
    display: grid;
    gap: 2rem;
    width: 100%;
  }

  @media (min-width: 1195px) {
    .row {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 768px) and (max-width: 1194px) {
    .row {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 767px) {
    .row {
      grid-template-columns: 1fr;
    }
  }

  &:hover {
    transform: translateY(-5px);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    padding: 0;

    .card-image {
      width: 100%;
      border-radius: 12px 12px 0 0;
      overflow: hidden;
      aspect-ratio: 16/9;
      position: relative;

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
        border-radius: 12px 12px 0 0;
        display: block;
        transition: opacity 0.3s ease;
      }
    }

    h4 {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 1rem 1.5rem 0.5rem;
      color: var(--text-primary);
    }

    p {
      font-size: 1rem;
      color: var(--text-secondary);
      margin: 0 1.5rem;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .card-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      padding: 1rem 1.5rem;
      background: var(--project-card-bg);
      border-top: 1px solid rgba(150, 150, 150, 0.21);

      .tech-stack {
        h5 {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          text-align: left;
        }

        .tech-icons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;

          img {
            width: 24px;
            height: 24px;
            transition: transform 0.2s ease;

            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }

      .project-links {
        display: flex;
        gap: 1rem;

        a {
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 35px;
            height: 35px;
            opacity: 0.8;
            transition: opacity 0.2s ease;
          }

          &:hover img {
            opacity: 1;
          }
        }
      }
    }
  }

  /* Responsive Design */

  @media (max-width: 1200px) {
    height: 450px;

    .card-content {
      h4 {
        font-size: 1.1rem;
      }

      p {
        font-size: 1rem;
        margin: 10px 1rem;
      }

      .card-footer {
        padding: 0.8rem 1rem;

        .project-links {
          margin-top: 0.5rem;

          a img {
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    height: 450px;

    .card-content {
      .card-footer {
        padding: 0.8rem 1rem;

        .project-links {
          margin-top: 0.5rem;

          a img {
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: 500px;

    .card-content {
      h4 {
        font-size: 1.1rem;
      }

      p {
        font-size: 1rem;
        margin: 10px 1rem;
      }

      .card-footer {
        padding: 1rem;

        .tech-stack {
          h5 {
            font-size: 0.85rem;
          }

          .tech-icons {
            gap: 0.5rem;
          }
        }

        .project-links {
          margin-top: 0.5rem;

          a img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    height: 480px;
    padding: 0.5rem;

    .card-content {
      p {
        font-size: 1rem;
        margin: 10px 0;
      }
      .card-footer {
        padding: 0.8rem;

        .tech-stack {
          h5 {
            font-size: 0.8rem;
          }

          .tech-icons {
            gap: 0.4rem;

            img {
              width: 20px;
              height: 20px;
            }
          }
        }

        .project-links {
          a img {
            width: 28px;
            height: 28px;
          }
        }
      }
    }
  }
`;

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isCardInView = useInView(cardRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={cardRef}
      className="col-lg-4 col-md-6 project-item"
      style={{ position: "relative" }}
      initial={{ opacity: 0, y: -50 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      }}
    >
      <StyledProjectCard>
        <div className="card-content">
          <motion.a href={project.link} target="_blank">
            <div className="card-image">
              {!imageLoaded && (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="100%"
                  animation="wave"
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px 12px 0 0",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              )}
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                style={{ opacity: imageLoaded ? 1 : 0 }}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="card-footer">
              <div className="tech-stack">
                <h5>Tech Stack:</h5>
                <div className="tech-icons">
                  {project.techStack.map((tech, index) => (
                    <CustomTooltip key={index} title={tech.name}>
                      <img src={tech.icon} alt={tech.name} />
                    </CustomTooltip>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                >
                  <CustomTooltip title="View Website">
                    <img src={web} alt="Website" />
                  </CustomTooltip>
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                >
                  <CustomTooltip title="View Repository">
                    <img src={github} alt="GitHub" />
                  </CustomTooltip>
                </motion.a>
              </div>
            </div>
          </motion.a>
        </div>
      </StyledProjectCard>
    </motion.div>
  );
}
