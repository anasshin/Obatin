// import Chat from "../assets/icons/chat_1_fill.svg";

export default function Input({ icon, type, placeholder, name }) {
  return (
    <div className="mb-2">
      <div className="input input-bordered input-md flex items-center gap-2">
        <span className="input-group-text opacity-30">
          <img src={icon} alt={icon} />
        </span>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="opacity-100"
        />
      </div>
    </div>
  );
}
