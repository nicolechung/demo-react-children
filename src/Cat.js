export const Cat = ({className, text}) => (
  <h2>{text}{'  '} 
    <span role="img" aria-label="Cat" className={`ml-5 text-5xl ${className ? className : ''}`}>
      😹 🐈
    </span>
  </h2>
);

Cat.defaultProps = {
  __type: "Cat"
};