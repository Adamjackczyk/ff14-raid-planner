interface FeatureCardProps {
  title: string;
  description: string;
  bulletPoints: string[];
}

export default function FeatureCard({
  title,
  description,
  bulletPoints,
}: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-900/30 to-black/40 rounded-lg border border-blue-700/30 p-4 shadow-lg backdrop-blur-sm">
      <h3 className="text-lg font-bold text-blue-100 mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="text-gray-400 space-y-2">
        {bulletPoints.map((point, index) => (
          <li key={index}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}
