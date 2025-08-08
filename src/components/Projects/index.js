import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const handleToggle = (category) => {
    setToggle(category);
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            value="all"
            onClick={() => handleToggle("all")}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "ai app"}
            value="ai app"
            onClick={() => handleToggle("ai app")}
          >
            AI APP
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "data analytics"}
            value="data analytics"
            onClick={() => handleToggle("data analytics")}
          >
            Data Analyst
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "business analytics"}
            value="business analytics"
            onClick={() => handleToggle("business analytics")}
          >
            Business Analytics
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "data engineering"}
            value="data engineering"
            onClick={() => handleToggle("data engineering")}
          >
            Data Engineering
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            value="web app"
            onClick={() => handleToggle("web app")}
          >
            WEB APP
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "core application"}
            value="core application"
            onClick={() => handleToggle("core application")}
          >
            Core Application
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "springboot application"}
            value="springboot application"
            onClick={() => handleToggle("springboot application")}
          >
            Spring Boot Project
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter(
              (project) =>
                toggle === "all" ||
                (Array.isArray(project.category)
                  ? project.category.includes(toggle)
                  : project.category === toggle)
            )
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
