const CardForm = ({ name, LabelName }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="input input-bordered flex items-center gap-2"
      >
        {LabelName}
        <input
          type="text"
          name={name}
          id={name}
          className="grow"
          placeholder={`Masukan ${LabelName}`}
        />
      </label>
      <div className="divider my-2"></div>
    </>
  );
};
export default CardForm;
