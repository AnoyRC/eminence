const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full rounded px-8 py-3 bg-primary-white/60 text-primary-black font-medium text-base"
    />
  );
};

export default Input;
