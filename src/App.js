import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
// import { useState } from "react";
import PrintMenu from "./components/PrintMenu";
import CopyMenu from "./components/CopyMenu";
import InternetMenu from "./components/InternetMenu";
import Simple from "./components/Simple";
import Header from "./components/Header";

function App() {
  const [inputs, setInputs] = useState({});

  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const handleChange = (event) => {
    event.persist()
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const apiPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: inputs.title,
        body: inputs.body,
        userId: parseInt(inputs.userId),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    apiPost()
    console.log(inputs);
  };

  

  const [isPrint, setPrint] = useState(false);
  const [isCopy, setCopy] = useState(false);
  const [isInternet, setInternet] = useState(false);

  return (
    <div className="App">
      <Header />
      {/* <button onClick={() => setPrint(!isPrint)}>Print</button>
      <button onClick={() => setCopy(!isCopy)}>Copy</button>
      <button onClick={() => setInternet(!isInternet)}>Internet</button>
      {isPrint === true && <PrintMenu />}
      {isCopy === true && <CopyMenu />}
      {isInternet === true && <InternetMenu />}

      <form>
        <div>
          <input type="text" name="title" onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="body" onChange={handleChange} />
        </div>
        <div>
          <input type="number" name="userId" onChange={handleChange} />
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            name="submit"
            onChange={handleSubmit}
          />
        </div>
      </form> */}

      {/* <button onClick={apiGet}>Get Data</button> */}

      <Simple />
    </div>
  );
}

export default App;
