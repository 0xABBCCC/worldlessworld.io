import ApplicationBody from "../components/Layout/ApplicationBody";
import FlexRow from "../components/Layout/Flex/Row";
import MainBody from "../components/Layout/Main/Body";
import Sidebar from "../components/Navigation/Sidebar";

const HomePage = () => {
    return(
        <ApplicationBody>
            <FlexRow>
                <Sidebar/>
                <MainBody>
                    Home
                </MainBody>
            </FlexRow>
        </ApplicationBody>
    )
}

export default HomePage;