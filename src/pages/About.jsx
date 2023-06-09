
import AboutLayout from "../components/About/AboutLayout";
import ApplicationBody from "../components/Layout/ApplicationBody";
import FlexRow from "../components/Layout/Flex/Row";
import MainBody from "../components/Layout/Main/Body";
import Sidebar from "../components/Navigation/Sidebar";

const AboutPage = () => {
    return(
        <ApplicationBody>
            <FlexRow>
                <Sidebar/>
                <MainBody>
                    <AboutLayout/>
                </MainBody>
            </FlexRow>
        </ApplicationBody>
    )
}

export default AboutPage;