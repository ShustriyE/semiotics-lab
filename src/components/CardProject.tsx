import React from "react";
import { InterfaceCardProject } from "../types/card_project";
import { useTranslation } from "react-i18next";

const CardProject = (props: InterfaceCardProject) => {
  const [t] = useTranslation("translation");
  return (
    <div className="card project-preview">
      <figure>
        {/*//@ts-ignore*/}
        <img
          src={props.imgPath}
          alt={`${t(props.keyTitleProject)} project preview image`}
        />
      </figure>
      <h3>
        {t(props.keyTitleProject)}{" "}
        {props?.underDevelopment ? (
          <span className="label">{t("project_under_development")}</span>
        ) : (
          <></>
        )}
      </h3>
      <p>{t(props.keyDescriptionProject)}</p>
      {props?.filePath ? (
        <a
          className="download button"
          href={props.filePath}
          target="_blank"
          rel="noreferrer"
        >
          <span>{t("open_pdf")}</span>
          <img src="/icons/download_icon.svg" alt="download icon" />
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardProject;
