export const FunctionalTextInput = ({ labelText, inputProps }) => {
  return (
    <div className="input-wrap">
      <label>{labelText}</label>
      <input {...inputProps} />
    </div>
  );
};
