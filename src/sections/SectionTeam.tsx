import * as React from "react";
import { useTranslation } from "react-i18next";
import "../static/style.css";
import CardTeamMember from "../components/CardTeamMember";
import team_members from "../const/const_team_members";

const SectionTeam = () => {
  const [t] = useTranslation("translation");

  return (
    <section id="team">
      <div className="sections--header-box">
        <h2 className="team--ttl sections--header">{t("teamTitleBlock")}</h2>
      </div>
      <div className="grid-container two-column">
        {team_members.map((element, index) => (
          <CardTeamMember
            {...element}
            key={`card_member_${element.keyMemberName}_${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionTeam;
