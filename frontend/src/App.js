import React, { useReducer, useState } from "react";
import "./styles.css";

const apiEndpoint = process.env.REACT_APP_TODO_ENDPOINT;

export default function App() {
  const inputEmailElement = React.useRef(null);
  const inputNameElement = React.useRef(null);
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      first_name: "",
      email: ""
    }
  );
  const [emails, setEmails] = useState([])

  React.useEffect(() => {
    (async () => {
        if (apiEndpoint) {
            try {
                const response = await fetch(apiEndpoint);
                if (!response.ok) {
                    console.error(true);
                    return;
                }
                const data = await response.json();

                setEmails(data);
                
            } catch {
              console.error(true);
            }
        }
    })();
}, []);

  const handleChange = evt => {
    const { name, value } = evt.target;

    setUserInput({ [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!apiEndpoint) return console.log("set up your endpoint");
    fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(userInput)
    });

    if (inputNameElement.current && inputEmailElement.current) {
      inputNameElement.current.value = "";
      inputEmailElement.current.value = "";
  }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Subscribe</legend>
          <div>
            <div>
              <label htmlFor="firstname1">Name: </label>
              <input
                type="text"
                id="firstname1"
                name="first_name"
                ref={inputNameElement}
                value={userInput.first_name}
                onChange={handleChange}
                />
            </div>

            <br />

            <div>
              <label htmlFor="Email1">Email: </label>
              <input
                type="text"
                id="Email1"
                name="email"
                ref={inputEmailElement}
                value={userInput.email}
                onChange={handleChange}
                />
            </div>
            <br />
            <input type="submit" value="Submit" />
          </div>
        </fieldset>
      </form>
      <h1>Emails (refresh me ♺)</h1>
      <div>
      {emails.map(({ id, email }) => (
        <div key={id}>
            <span>{email}</span>
        </div>
      ))}
      </div>
    </>
  );
}
