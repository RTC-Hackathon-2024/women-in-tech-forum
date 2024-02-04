const { OpenAI } = require("openai");

const openai = new OpenAI({apiKey: "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"});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "How are you?" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

main();