import "../styles/demo-review.css";

export default function DemoReview({ data, onConfirm, onCancel }) {
  return (
    <div className="review-overlay">
      <div className="review-box">
        <h2>Review Demo Request</h2>

        <ul>
          <li><strong>Name:</strong> {data.name}</li>
          <li><strong>Email:</strong> {data.email}</li>
          <li><strong>Company:</strong> {data.company}</li>
          <li><strong>Role:</strong> {data.role}</li>
          <li><strong>Date:</strong> {data.date}</li>
          <li><strong>Time Slot:</strong> {data.slot}</li>
          <li><strong>Use Case:</strong> {data.message}</li>
        </ul>

        <div className="review-actions">
          <button onClick={onCancel}>Edit</button>
          <button className="btn-primary" onClick={onConfirm}>
            Confirm & Send
          </button>
        </div>
      </div>
    </div>
  );
}
