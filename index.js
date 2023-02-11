/*
Challenge: 
Part1: Create a page of your own using a custom page component

It should return an ordered list with the reason why you're excited to be learning React:)

Render your list to the page
*/ 

function Page() {
  return (
  <ol>
  <li>It's a popular lib so I'll be able to fit in with the cool kid</li>
  <li>I'm more likely to get a job as a developer</li>
  </ol>
  )
  }
  
  ReactDOM.render(<Page />, document.getElementById('root'));
  