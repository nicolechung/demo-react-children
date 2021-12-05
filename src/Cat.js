export const Cat = ({className}) => (
  <h2>
    <span role="img" aria-label="Cat" className={`text-7xl ${className ? className : ''}`}>
      😹 🐈 😹 🐈
    </span>
  </h2>
);

Cat.defaultProps = {
  __type: "Cat"
};