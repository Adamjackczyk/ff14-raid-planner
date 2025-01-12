import FeatureCard from "./FeatureCard";

export default function FeatureGrid() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-4 px-4">
      <FeatureCard
        title="Raid Schedule"
        description="Coordinate raid times effortlessly with your static. Track availability, manage time zones, and ensure everyone's on the same page."
        bulletPoints={[
          "Calendar system with timezone support",
          "Track team member availability",
          "Flexible scheduling tools",
        ]}
      />

      <FeatureCard
        title="Job Management"
        description="Keep track of your static's jobs and roles. Monitor gear progression and optimize team compositions."
        bulletPoints={[
          "Track team compositions",
          "Monitor gear levels",
          "Manage role flexibility",
        ]}
      />

      <FeatureCard
        title="Loot System"
        description="Streamline your loot distribution process. Keep track of priorities and maintain a fair system for everyone."
        bulletPoints={[
          "Priority list management",
          "Distribution history",
          "Gear progression tracking",
        ]}
      />
    </div>
  );
}
