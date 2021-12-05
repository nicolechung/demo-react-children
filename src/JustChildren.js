import React from 'react';

export const JustChildren = ({ children }) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child)
    }
  )
}

JustChildren.defaultProps = {
  __type: "JustChildren"
};