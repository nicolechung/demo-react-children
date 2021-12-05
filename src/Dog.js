export const Dog = ({className, text}) => (
  <h2>
    <span role="img" aria-label="Dog" className={`text-7xl ${className ? className : ''}`}>
      {text} 🐶 🦴 🐶 🦴
    </span>
  </h2>
);

Dog.defaultProps = {
  __type: "Dog"
};