import "../styles/connect.css";

export default function Connect() {
  return (
    <main className="connect-page">
      <h1>Connect with Samai</h1>
      <p>
        Reach out to us for product demos, sales inquiries, or technical support.
      </p>

      <div className="connect-grid">
        <div className="connect-card">
          <h3>Email</h3>
          <p>info@samai.ai</p>
        </div>

        <div className="connect-card">
          <h3>Sales</h3>
          <p>sales@samai.ai</p>
        </div>

        <div className="connect-card">
          <h3>Support</h3>
          <p>support@samai.ai</p>
        </div>

        <div className="connect-card">
          <h3>Phone</h3>
          <p>+91 9XXXXXXXXX</p>
        </div>
      </div>
    </main>
  );
}
