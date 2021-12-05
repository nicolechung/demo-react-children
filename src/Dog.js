export const Dog = ({className, text}) => (
  <h2>{text}{' '} 
    <span role="img" aria-label="Dog" className={`ml-5 text-5xl ${className ? className : ''}`}>
       🐶 🦴
    </span>
  </h2>
);

Dog.defaultProps = {
  __type: "Dog"
};