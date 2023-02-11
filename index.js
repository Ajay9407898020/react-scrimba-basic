// ReactDOM.render(<h1 className="header">Hello Everyone!</h1>, document.getElementById('root'));

/*
Challenge - recreate the above line of code in vanilla JS by 
creating and appending an h1 to our div#root (Without using innerHTML)

- Create a new h1 element
- Give it some text content
- Give it a class name of "header"
- append it as a child of div#root
*/

const h1 = document.createElement('h1');
h1.textContent = "Hello React";
h1.classList.add('header');
const element = document.getElementById('root');
element.append(h1);
// Above 4 lines of code does the same as one line at the top 
// Hence It is prooved the React is Declarative

// Read the Readme file