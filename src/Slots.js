export const Slots = ({left, right}) => {
  // to make react happy, switch to capitalize
  const Left = left
  const Right = right

  /**
   * Imagine the props being passed along here are
   * from some internal state specific to this component,
   * that the user of this component doesn't need to know how to use.
   * Example: Modals, Banner, Toggle, Alert
   */
  return (
  <div class="grid grid-cols-2 gap-4">
    <div>{typeof left === 'string'  ? left : <Left text='Meow' />}</div>
    <div>{typeof right === 'string' ? right : <Right text='Wuff' />}</div>
  </div>
)}

Slots.defaultProps = {
  __type: "Slots",
  left: 'Left side content',
  right: 'Right side content'
};