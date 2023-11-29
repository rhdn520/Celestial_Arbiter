class GPTHandler {
  constructor() {
    this.apiKey = "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";
    this.apiUrl = "https://api.openai.com/v1/chat/completions";
    this.prompt = promptText;
  }

  async sendMessage(userMessage) {
    //2000ms 딜레이 : 테스트 할 때는 생략하고 진행해도 ok
    await new Promise((resolve) => setTimeout(resolve, 2000));

    //에러 시 다시 시도하는 로직 추가 필요
    const response = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: this.prompt }, //프롬프트 넣는 곳
          { role: "user", content: userMessage },
        ],
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return data.choices[0].message.content;
    } else {
      throw new Error(`Failed to get response from GPT: ${data.error.message}`);
    }
  }

  async sendToGPT(userMessage) {
    try {
      const botResponse = await this.sendMessage(userMessage);
      return { user: userMessage, bot: botResponse }; //대화마다 고유 id나 인덱스가 필요하면 추가하기
    } catch (error) {
      console.error("Error sending message to GPT:", error);
    }
  }
}
