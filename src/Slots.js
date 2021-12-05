export const Slots = ({left, right}) => {
  // to make react happy, switch to capitalize
  const Left = left
  const Right = right
  // imagine the props being passed here are
  // from some internal state inside of this component
  return (
  <div class="grid grid-cols-2 gap-4">
    <div><Left text="Meow" /></div>
    <div><Right text="Woof" /></div>
  </div>
)}

Slots.defaultProps = {
  __type: "Slots",
  left: 'Left side content',
  right: 'Right side content'
};