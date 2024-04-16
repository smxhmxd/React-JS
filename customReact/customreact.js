function customRender(reactElement, container){
    // The problem with the below code is if there are multiple attributes
    // we have to write a separate line for each code
    // so we will use a loop based (for in) approach to solve this problem
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // used in previous version of react
        domElement.setAttribute(prop, reactElement.props[prop]) 
        // iterating over props in reactElement using key prop
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')
// querySelector: It is a more versatile method that allows you to select elements using CSS selectors.
// It returns the first element within the document that matches the specified group of selectors.
// getElementById: It specifically selects an element by its ID attribute. It directly returns the element with the specified ID.
customRender(reactElement, mainContainer)