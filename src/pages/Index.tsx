// Main Portfolio Page
// Orchestrates all sections of the portfolio website

// =============================================================================
// COMPONENT IMPORTS
// =============================================================================

// Layout Components
import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";

// Section Components
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// =============================================================================
// MAIN PORTFOLIO PAGE COMPONENT
// =============================================================================

/**
 * Main Portfolio Page Component
 *
 * This is the primary page that renders Shashank Shetty's complete portfolio.
 * It's organized into distinct sections, each handled by its own component
 * for better maintainability and code organization.
 *
 * Sections included:
 * - Hero: Landing section with introduction and CTA
 * - About: Skills, technologies, and personal background
 * - Education: Academic history and achievements
 * - Experience: Professional experience and internships
 * - Projects: Featured projects and work samples
 * - Achievements: Sports achievements and certifications
 * - Contact: Contact information and form
 * - Footer: Site footer with social links
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation Header */}
      <Navigation />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section - Landing/Introduction */}
        <Hero />

        {/* About Section - Skills and Background */}
        <About />

        {/* Education Section - Academic History */}
        <Education />

        {/* Experience Section - Professional Experience */}
        <Experience />

        {/* Projects Section - Portfolio Showcase */}
        <Projects />

        {/* Achievements Section - Awards and Certifications */}
        <Achievements />

        {/* Contact Section - Contact Information and Form */}
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* AI Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Index;
