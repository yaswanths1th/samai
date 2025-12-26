import { motion } from "framer-motion";
import "../styles/global.css"
export default function ProcessBridge() {
  return (
    <section className="process-bridge">
      <motion.div
        className="bridge-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Eyebrow */}
        <span className="bridge-eyebrow">From capability to execution</span>

        {/* Main Heading */}
        <h2>
          Align teams on complex processes <br />
          <span>with clarity, context, and control</span>
        </h2>

        {/* NEW Subheading (Foundation intro) */}
        <motion.h3
          className="bridge-subheading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Built on <strong>Digital Modelling</strong>,{" "}
          <strong>Enterprise-grade Security</strong>,{" "}
          <strong>Contextual Interaction</strong>,{" "}
          <strong>Organisational Structure</strong>, and{" "}
          <strong>Real-time Instrumentation</strong>, Samai provides a shared
          execution foundation where processes stay visible, governed, and
          adaptable.
          Designing processes is only the beginning. Samai ensures that every
          model remains executable, collaborative, and adaptable — even as
          complexity grows. Business and IT stay aligned, decisions remain
          transparent, and execution flows without friction.
        </motion.h3>

        {/* Description */}
        <p className="bridge-desc">
          
        </p>

        {/* Pillars */}
        <div className="bridge-stats">
          <div>
            <strong>Visual-first</strong>
            <span>Process modeling that stays understandable</span>
          </div>
          <div>
            <strong>Context-aware</strong>
            <span>Decisions informed by real process state</span>
          </div>
          <div>
            <strong>Execution-ready</strong>
            <span>From design to production without rewrites</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
