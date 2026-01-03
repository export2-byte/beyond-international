import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Anything.<br />Anywhere.<br />Even One Unit.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          We source, document, ship, and deliver any product —
          from any industry — globally.
        </motion.p>

        <a href="#contact" className="btn">Tell Us What You Need</a>
      </section>

      <section>
        <h2>Problems We Solve</h2>
        <div className="grid">
          {[
            "MOQ Restrictions",
            "Supplier Delays",
            "Import & Export Confusion",
            "Industry Limitations",
            "No Doorstep Delivery",
            "Long Lead Times"
          ].map((item, i) => (
            <motion.div key={i} className="card" whileHover={{ scale: 1.05 }}>
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2>What We Do</h2>
        <div className="grid">
          <div className="card">MOQ Starts From 1</div>
          <div className="card">Any Product · Any Industry</div>
          <div className="card">Air Freight (Urgent)</div>
          <div className="card">Sea Freight (Bulk)</div>
          <div className="card">End‑to‑End Documentation</div>
          <div className="card">Doorstep Delivery</div>
        </div>
      </section>

      <section id="contact">
        <h2>Start Sourcing Without Limits</h2>
        <p>Tell us what you need. Even one unit.</p>
        <a className="btn" href="mailto:info@beyondinternational.com">
          Contact Us
        </a>
      </section>

      <footer>© Beyond International — Global Sourcing Intelligence</footer>
    </div>
  );
}
