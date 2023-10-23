import React from "react"

const Button = ({ children, ...rest }) => {
  return (
    <button className="btn btn-primary" {...rest}>
      {children}
    </button>
  )
}

export default Button
