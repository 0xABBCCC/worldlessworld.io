import JobCard from "../components/Home/Card";
import CardLayout from "../components/Home/CardLayout";
import ApplicationBody from "../components/Layout/ApplicationBody";
import FlexRow from "../components/Layout/Flex/Row";
import MainBody from "../components/Layout/Main/Body";
import Sidebar from "../components/Navigation/Sidebar";

// Images
import treeNewsImg from "../assets/news.png";
import treeNftsImg from "../assets/nft.png"
import ProjectLayout from "../components/Home/ProjectsLayout";
import Project from "../components/Home/Project";

const jobList = [
    {
        id: 1,
        link: "https://news.treeofalpha.com/",
        icon: `${treeNewsImg}`,
        title: "Tree News",
        tag: "Developer Tools",
        role: "UI/UX & Graphic Designer",
        what: "I assisted @Tree_Of_Alpha in designing his free news site, and then I designed his exclusive Tree Terminal UI",
        how: "I used HTML/CSS and Javascript to create a design for both the free news site and Tree Terminal. After finishing the design, I gave the code to @Tree_Of_Alpha and they added it to their React.JS platform."
    },
    {
        id: 2,
        link: "https://opensea.io/collection/treeofalpha",
        icon: `${treeNftsImg}`,
        title: "Tree NFTs",
        tag: "Membership",
        role: "Graphic Designer",
        what: "I used Artificial Intelligence to create 100 unique tree artworks, which were then edited using Photoshop.",
        how: "I generated 3000 different tree artworks with the goal of creating 10 themes, each with 5 trees that fit the theme well. Then, I made them look even better by carefully editing them with Adobe Photoshop."
    }
]

const projectList = [
    {
        id: 1,
        name: "worldlessworld.io",
        language: "Javascript",
        description: "This website :)",
        url: "https://github.com/0xABBCCC/worldlessworld.io"
    }
]

const HomePage = () => {
    return(
        <ApplicationBody>
            <FlexRow>
                <Sidebar/>
                <MainBody>
                    <CardLayout>
                        {
                            jobList.map((job) => (
                                <JobCard
                                    key={job.id}
                                    jobIcon={job.icon}
                                    jobTitle={job.title}
                                    jobTag={job.tag}
                                    jobRole={job.role}
                                    jobWhat={job.what}
                                    jobHow={job.how}
                                    jobLink={job.link}
                                />
                            ))
                        }
                    </CardLayout>
                    <ProjectLayout>
                        {
                            projectList.map((project) => (
                                <Project
                                    key={project.id}
                                    projectName={project.name}
                                    projectLanguage={project.language}
                                    projectDescription={project.description}
                                    projectUrl={project.url}
                                />
                            ))
                        }
                    </ProjectLayout>
                </MainBody>
            </FlexRow>
        </ApplicationBody>
    )
}

export default HomePage;