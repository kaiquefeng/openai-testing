import fs from "fs";
import { OpenAICypress } from "../cypress-generate";

const requestOpenAi = async (content: string) => {
  const response = await OpenAICypress({ content });
  console.log("REQUEST CHAT", { response });
  return response;
};

const copyContentFile = (initialPath: string) => {
  fs.readFile(initialPath, "utf8", async (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo de origem:", err);
      return;
    }

    const response = await requestOpenAi(data);
    const codeGenerated = response.choices[0].message.content;
    console.log({ response: codeGenerated });

    fs.writeFile(
      "./cypress/e2e/testing-file.cy.ts",
      codeGenerated as string,
      function (err) {
        if (err) throw err;
        console.log("Testing file generated!");
      }
    );
  });
};

copyContentFile("./src/components/button/button.tsx");
