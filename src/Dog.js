export const Dog = ({className}) => (
  <h2>
    <span role="img" aria-label="Dog" className={`text-7xl ${className ? className : ''}`}>
      🐶 🦴 🐶 🦴
    </span>
  </h2>
);

Dog.defaultProps = {
  __type: "Dog"
};