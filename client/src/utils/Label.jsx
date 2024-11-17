const Label = (props) => {
  const { htmlFor, text } = props;
  return (
    <div className="label">
      <span htmlFor={htmlFor} className="label-text">
        {text}
      </span>
    </div>
  );
};
export default Label;
