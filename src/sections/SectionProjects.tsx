import * as React from "react";
import { useTranslation } from "react-i18next";
import "../static/style.css";
import projects from "../const/const_projects";
import CardProject from "../components/CardProject";

const SectionProjects = () => {
  const [t] = useTranslation("translation");

  return (
    <section id="projects">
      <div className="sections--header-box">
        <h2 className="projects--ttl sections--header">
          {t("projects_full_title")}
        </h2>
        <p className="projects--p sections--decription">
          {t("projects_full_par")}
        </p>
      </div>
      <div className="grid-container three-column">
        {projects.map((element, i) => (
          <CardProject
            {...element}
            key={`project_${element.keyTitleProject}_${i}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionProjects;
