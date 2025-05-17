import OpenAI from "openai";

//deepseek call to create nice output

const openai = new OpenAI({
  baseURL: import.meta.env.VITE_DEEPSEEK_URL,
  apiKey: import.meta.env.VITE_DEEPSEEK_API_KEY,
  dangerouslyAllowBrowser: true, //do not host with this
});

const system_prompt = `You are a professional automotive copywriter. Given raw vehicle data in JSON-like format, write a fun, engaging, and polished car description in natural paragraph form — with no asterisks, no bullet points, and no formatting symbols.

Your instructions:

Output a single, clean paragraph — no asterisks, no lists, no headers.

Stay under 150 tokens.

Use a confident, upbeat, and slightly playful tone.

Follow this structure exactly:

Open with a bold lifestyle-focused sentence about the vehicle's appeal.

Include the body style, engine size, fuel type, and transmission in the second sentence, phrased naturally.

End with a sentence that highlights design, performance, or the driving experience.

Blend or enhance the provided description (if available).

Never echo the raw data format or use field names in the output.`;

async function createOutput(response) {
  const user_prompt = `${response} `;
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: system_prompt },
      { role: "user", content: user_prompt },
    ],
    model: "deepseek-chat",
  });

  return completion.choices[0].message.content;
}

export default createOutput;
