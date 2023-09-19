import { useEffect, useState } from "react";

import "./App.css";
import { OpenAICypress } from "./features/cypress/cypress";
import { Button } from "./components/button";

function App() {
  const [response, setResponse] = useState("");

  const requestOpenAi = async () => {
    const response = await OpenAICypress();
    console.log("REQUEST CHAT", { response });
    setResponse(response.choices[0].message?.content || "");
  };

  useEffect(() => {
    requestOpenAi();
  }, []);

  return (
    <>
      <div>
        <div>
          <h2>Response:</h2>
        </div>

        <Button>Lorem ipsum</Button>

        <pre
          style={{
            textAlign: "start",
            backgroundColor: "#333",
            padding: "2rem",
            borderRadius: "2rem",
          }}
        >
          {response}
        </pre>
      </div>
    </>
  );
}

export default App;
