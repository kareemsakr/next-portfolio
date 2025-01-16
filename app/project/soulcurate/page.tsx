import ProjectCaseStudy from "@/app/ui/caseStudy";

export default function SoulCurateCaseStudy() {
  const soulCurate = {
    title: "SoulCurate",
    subtitle: "Humanizing Digital Dating",
    techStack: ["REACT", "NEXT.JS", "PostgreSQL", "Vercel", "FIREBASE"],
    overview:
      "SoulCurate is reimagining online dating by putting human wisdom back into matchmaking. Moving away from algorithmic matches, the platform empowers experienced matchmakers to create meaningful connections, resulting in a 45% higher success rate compared to traditional dating apps.",
    challenges: [
      "Surface-level connections based primarily on photos",
      "Decision fatigue from endless options",
      "Low quality matches and poor success rates",
      "Burnout from the 'dating app treadmill'",
    ],
    features: [
      "Curated matches by experienced matchmakers",
      "Rich profile system focusing on personality and values",
      "Structured communication framework to build genuine connections",
      "Feedback loop system to improve matchmaking quality",
    ],
    technical: [
      "React Native for cross-platform mobile experience",
      "AWS serverless architecture for scalability",
      "DynamoDB for flexible data modeling",
      "Firebase for real-time chat features",
      "CloudFront for global content delivery",
    ],
    ux: [
      "Thoughtful onboarding process to understand user preferences",
      "Clean, intuitive interface prioritizing meaningful interactions",
      "Guided communication features to facilitate deeper connections",
      "Regular feedback collection to improve matchmaking",
    ],
    impact: [
      "45% higher match-to-relationship conversion rate",
      "Significantly higher user satisfaction scores",
      "Growing community of dedicated matchmakers",
      "Positive feedback on the quality of connections",
    ],
  };
  return (
    <div className="container mx-auto px-4">
      <ProjectCaseStudy project={soulCurate} />
    </div>
  );
}
