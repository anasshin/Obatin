export default function Input({ icon, type, placeholder }) {
  return (
    <div className="input input-bordered input-md flex items-center gap-2">
      <span className="input-group-text">
        <img src={icon} alt={icon} />
      </span>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
