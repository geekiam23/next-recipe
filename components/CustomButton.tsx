interface Props {
  children?: JSX.Element;
  otherProps?: string;
}

const CustomButton = ({ children, ...otherProps }: Props) => (
  <button className='btn btn-custom' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
