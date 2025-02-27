const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="px-6 py-1 border-2 bg-slate-800 border-blue-300 text-white hover:bg-white hover:text-black transition-all rounded-full"
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
