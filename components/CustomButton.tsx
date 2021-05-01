const CustomButton = ({ children, ...otherProps }) => (
  <button className="btn btn-custom" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
