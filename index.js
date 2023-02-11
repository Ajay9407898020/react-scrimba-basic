/*
Challenge: 
Part1: Add a 'header' element with a nested nav element. Inside the 'nav' include a img element
with the image of React logo inside and make sure to set the width to something manageable so it 
doesn;t take up the whold screen

-Add an h1 with some text describing the page 
*/

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src="./react-logo.png"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>&#169; 2023 Ziroll development. All right reserved</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reason's I'm excited to learn React</h1>
      <ol>
        <li>It's a popular lib so I'll be able to fit in with the cool kid</li>
        <li>I'm more likely to get a job as a developer</li>
      </ol>
    </div>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
