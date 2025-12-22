export default function FeatureCard({ title, description }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="learn-more">Learn more →</span>
    </div>
  );
}
