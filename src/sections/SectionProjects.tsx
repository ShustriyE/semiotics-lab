import * as React from 'react';
import {useTranslation} from "react-i18next";
import '../static/style.css';
import projects from "../const/const_projects";
import CardProject from "../components/CardProject";

const SectionProjects = () => {
        const [t, ] = useTranslation('translation');

    return <section id="projects">
        <h2>{t("projects_full_title")}</h2>
        <div className="grid-container two-column">
            {projects.map((element, i) => <CardProject {...element} key={`project_${element.keyTitleProject}_${i}`} />)}
        </div>

    </section>
}

export default SectionProjects