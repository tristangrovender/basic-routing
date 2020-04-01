import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

function Home(props) {
    return <h1>Home Component</h1>;
}
function About(props) {
    return <h1>About Component</h1>;
}
function Contact(props) {
    return <h1>Contact Component</h1>;
}

// History props example
function Blog(props) {
    const { push } = props.history;
    return (
        <div>
            <h3>My blog nobody reads</h3>
            <button onClick={() => push("/")}>Back home please!</button>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/blog">Blog</Link>

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/blog" component={Blog} />
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
