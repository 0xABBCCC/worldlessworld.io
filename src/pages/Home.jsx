import JobCard from "../components/Home/Card";
import CardLayout from "../components/Home/CardLayout";
import ApplicationBody from "../components/Layout/ApplicationBody";
import FlexRow from "../components/Layout/Flex/Row";
import MainBody from "../components/Layout/Main/Body";
import Sidebar from "../components/Navigation/Sidebar";

// Images
import treeNewsImg from "../assets/news.png";
import treeNftsImg from "../assets/nft.png";
import gradientcard1 from "../assets/gradient_card_1.png";
import landingpage1 from "../assets/landing_page_1.png";
import mobileapp1 from "../assets/mobile_app_1.png";


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
        what: "I assisted @Tree_Of_Alpha in designing their free news site, and then I designed their exclusive Tree Terminal UI",
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
        id: 2459,
        name: "Instagram Pic Downloader",
        language: "Javascript",
        description: "Simple script that allows you to download any instagram picture using only one URL (Source code available)",
        url: "https://github.com/0xABBCCC/gram-pic-downloader/",
        isNew: true
    },
    {
        id: 245,
        name: "Social Network",
        language: "Javascript",
        description: "An application that allows you to post images with captions, built using NextJS and MongoDB (Source code available)",
        url: "https://next-mongo-social.vercel.app/",
        isNew: true
    },
    {
        id: 24,
        name: "Chat App",
        language: "Javascript",
        description: "Realtime demo chat application with multiple chats coded in NextJS (Source code available)",
        url: "https://chat-app-demo-rarb.vercel.app/",
        isNew: true
    },
    {
        id: 42,
        name: "Mobile Concept 1",
        language: "HTML / CSS",
        description: "Light Blue Glass UI Mobile Concept (Source code available)",
        url: "https://mobile-concept-1.vercel.app/",
        image: `${mobileapp1}`,
        isNew: true
    },
    {
        id: 43,
        name: "Gradient Card 1",
        language: "HTML / CSS",
        description: "Gradient, Glass UI (Source code available)",
        url: "https://gradient-card-1.vercel.app/",
        image: `${gradientcard1}`,
        isNew: true
    },
    {
        id: 4,
        name: "Landing Page 1",
        language: "HTML / CSS",
        description: "Amber colored theme landing page (Source code available)",
        url: "https://landing-page-1-nu.vercel.app/",
        image: `${landingpage1}`,
        isNew: true
    },
    {
        id: 32,
        name: "Real-time News",
        language: "Javascript",
        description: "Just a simple application that connects to the Tree News websocket with an improved ui (doesn't store old news) (Source code available)",
        url: "https://github.com/0xABBCCC/alpha-news",
        isNew: false
    },
    {
        id: 1,
        name: "worldlessworld.io",
        language: "Javascript",
        description: "This website :)",
        url: "https://github.com/0xABBCCC/worldlessworld.io",
        isNew: false
    },
    {
        id: 5,
        name: "Card Animation 1",
        language: "HTML / CSS",
        description: "Simple card animation when clicked (Source code available)",
        url: "https://card-animation-1-pi.vercel.app/",
        isNew: false
    },
    {
        id: 6,
        name: "Sidebar Concept 1",
        language: "HTML / CSS",
        description: "Sidebar layout concept skeleton with some hover effects (Source code available)",
        url: "https://sidebar-concept-1.vercel.app/",
        isNew: false,
    },
    {
        id: 7,
        name: "Buttons concept 1",
        language: "HTML / CSS",
        description: "Colored buttons concept with hover effect (Source code available)",
        url: "https://button-concept-1.vercel.app/",
        isNew: false
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
                                    projectImgUrl={project.image}
                                    isNew={project.isNew}
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