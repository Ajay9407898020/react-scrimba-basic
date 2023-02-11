const h1 = document.createElement("h1");
h1.textContent = "Hello React";
h1.classList.add("header");
console.log(h1);   //JS Element
//<h1 class="header">Hello React</h1>

const element = <h1 className="header">This is JSX</h1>;
console.log(element); //JSX element
/*
{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {"className": "header","children": "This is JSX"},
    "_owner": null,
    "_store": {}
}
*/
// JSX
ReactDOM.render(element, document.getElementById("root"));
// Always Remember and return one element from jsx 