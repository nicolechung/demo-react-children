export const Slots = ({left, right}) => {
  // to make react happy, switch to capitalize
  const Left = left
  const Right = right
  return (
  <div class="grid grid-cols-2 gap-4">
    <div><Left text="meeew" /></div>
    <div><Right text="wuff" /></div>
  </div>
)}

Slots.defaultProps = {
  __type: "Slots",
  left: 'Left side content',
  right: 'Right side content'
};