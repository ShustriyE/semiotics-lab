import React from 'react';
import SectionHeader from "../sections/SectionHeader";
import AppBarLending from "../components/AppBarLending";
import SectionAboutUs from "../sections/SectionAboutUs";
import SectionTeam from "../sections/SectionTeam";
import SectionFooter from "../sections/SectionFooter";
import SectionProjects from "../sections/SectionProjects";
import SectionServicesWithTech from "../sections/SectionServicesWithTech";
import AppBarLendingWithMob from "../components/AppBarLendingWithMob";
import AppBarCss from "../components/AppBarCss";
import SectionService from "../sections/SectionServices";
import SectionFeedback from "../sections/SectionFeedback";
import SectionContactUs from "../sections/SectionContactUs";
import ContactUs from "../components/ContactUs";

const Page = () => {
    return (<React.Fragment>
        {/*<AppBarLending/>*/}
        <AppBarLendingWithMob/>
        {/*<AppBarCss/>*/}
        <SectionHeader/>
        <SectionAboutUs/>
        <SectionService/>
        {/*<SectionServicesWithTech/>*/}
        <SectionProjects/>
        <SectionTeam/>
        <SectionFeedback/>
        <ContactUs/>
        <SectionFooter/>

    </React.Fragment>)

}

export default Page;