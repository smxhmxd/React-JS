import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


// The above will not run as it expects a format for the code to run
// We can run the above code using the below format

const anotherElement = (
    <a href="https://fast.com" target='_blank'> Visit google</a>
)



const anotherUser = " chai aur react" // JSX

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherUser,  // Evaluated Expression
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement // we are calling an object, not a function so () is not needed
    // click me to visit google chai aur react(google.com) Visit google(fast.com)

)


