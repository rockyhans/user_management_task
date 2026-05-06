export default function StatusBadge({ status }) {
  return (
    <span className={status === "Active" ? "badge-active" : "badge-inactive"}>
      {status}
    </span>
  );
}
