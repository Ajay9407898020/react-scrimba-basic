// ReactDOM.render(<h1>Hello Everyone!</h1>, document.getElementById('root'));

/*
Challenge: Find out what happens if we try to append JSX 
to out div#root using .append() insted of React DOM

1. Create a sample page in JSX (>= 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use .append() to append your JSX
3. See If you can guess what will show up in the browser before running the code
4. See if you can explain what actually shows up it the browser
*/

const page = (
  <div>
    <h1>H1 Element</h1>
    <p>Paragraph element</p>
    <ol>
      <li>Elem</li>
    </ol>
  </div>
)
document.getElementById('root').append(JSON.stringify(page)); //Here page variable having object which can be render using react dome so React DOM is usefull for making element readable for browser

// FIX this 
ReactDOM.render(page, document.getElementById('root'));



