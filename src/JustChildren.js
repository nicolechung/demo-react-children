import React from 'react';

export const JustChildren = ({ children }) => {
  const ListChildren = React.Children.map(children, child => {
    if (child.props.__type === "Cat") {
      return React.cloneElement(child, { text: "Meow" })
    }

    if (child.props.__type === "Dog") {
      return React.cloneElement(child, { text: "Woof" })
    }
      return React.cloneElement(child)
    }
  )
  return (<div class="grid grid-cols-2 gap-4">
    <div>{ListChildren[0]}</div>
    <div>{ListChildren[1]}</div>
  </div>
  )
}

JustChildren.defaultProps = {
  __type: "JustChildren"
};