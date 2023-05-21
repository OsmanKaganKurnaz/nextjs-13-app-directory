import React from 'react'

const TestLayout = ({ children }) => {
    return (
        <div>
            <h1>Ben Test Layout'undan geliyorum.</h1>
            <div>{children}</div>
        </div>
    )
}

export default TestLayout