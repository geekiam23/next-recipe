interface Props {
  children?: JSX.Element | string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  otherProps?: string;
}

const CustomButton: React.FC<Props> = ({ children, ...otherProps }) => (
  <button className='btn btn-custom' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
