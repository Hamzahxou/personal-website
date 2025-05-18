import LoadingPage from "./components/loading/loadingPage";
import AboutPage from "./components/Page/AboutPage";
import ContactPage from "./components/Page/ContactPage";
import LandingPage from "./components/Page/LandingPage";
import ProjectPage from "./components/Page/ProjectPage";

export default function Home() {
  return (
    <>
      <LoadingPage />
      <LandingPage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </>
  );
}
