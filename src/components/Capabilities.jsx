import { capabilities } from "../data/capabilities";
import FeatureCard from "./FeatureCard";

export default function Capabilities() {
  return (
    <section className="capabilities">
      <h2>Core Capabilities</h2>

      <div className="capability-grid">
        {capabilities.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
