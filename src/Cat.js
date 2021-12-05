export const Cat = ({className, text}) => (
  <h2>
    <span role="img" aria-label="Cat" className={`text-6xl ${className ? className : ''}`}>
      {text} 😹 🐈 😹 🐈
    </span>
  </h2>
);

Cat.defaultProps = {
  __type: "Cat"
};