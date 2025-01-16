import ProjectCaseStudy from "@/app/ui/caseStudy";

export default function WordsCaseStudy() {
  const daily700 = {
    title: "Daily 700 Words",
    subtitle: "Building Consistent Writing Habits",
    techStack: ["LARAVEL/PHP", "MYSQL", "REDIS", "DIGITAL OCEAN"],
    overview:
      "Daily 700 Words is a platform designed to help writers develop consistent creative habits through structured daily practice. The platform emphasizes the power of small, daily efforts in achieving significant long-term growth in writing skills.",
    challenges: [
      "Maintaining consistent writing habits",
      "Overcoming writer's block",
      "Tracking progress over time",
      "Finding motivation to write regularly",
    ],
    features: [
      "Daily writing prompts and inspiration",
      "Progress tracking and streak maintenance",
      "Community support and accountability",
      "Writing analytics and insights",
    ],
    technical: [
      "PHP/Laravel for robust application framework",
      "MySQL for reliable data persistence",
      //   "Laravel Livewire for dynamic interfaces",
      "Laravel Nova for admin dashboard",
    ],
    ux: [
      "Distraction-free writing interface",
      "Clear progress visualization",
      "Gamification elements for motivation",
      "Mobile-responsive design for writing on any device",
    ],
    status: [
      "Core writing interface implementation",
      "User engagement features development",
      "Progress tracking system integration",
      "Community building tools creation",
    ],
    future: [
      "Integration with popular writing tools",
      "Advanced analytics for writing patterns",
      "Collaborative writing features",
      "Writing workshops and courses",
    ],
  };

  return (
    <div className="container mx-auto px-4">
      <ProjectCaseStudy project={daily700} />
    </div>
  );
}
