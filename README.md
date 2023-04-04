# Contract Summarizer

This is a basic prototype for a contract summarizer built on top of ChatGPT's text completion model.

## Getting the project to run

First step is to run `npm i` while in the base directory to install the relevant packages

## Setting environmental variable

Set your REACT_APP_OPENAI_API_KEY in a .env file at the base directory of the project
Example:  
 `REACT_APP_OPENAI_API_KEY=a123892nskdakds29323829324324290`

### Running the project

To run the app, simply run `npm start` at the base directory level.

## Customizing the summary

To customize the contract summary provided by the openai text completion model, you can edit the API call being made in App.js.  
`const response = await openai.createChatCompletion({
        max_tokens: 1024,
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: "Summarize the following contract in 2 or more paragraphs: ${text}",
          },
        ],
});`

You can edit the content parameter to change the format or granularity of the response. You can also edit the max_tokens to retrieve longer summaries.
