export const Slots = ({left, right}) => (
  <div class="grid grid-cols-2 gap-4">
    <div>{left}</div>
    <div>{right}</div>
  </div>
);

Slots.defaultProps = {
  __type: "Slots",
  left: 'Left side content',
  right: 'Right side content'
};