class GPTHandler {
  constructor() {
    this.apiKey = "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";
    this.apiUrl = "https://api.openai.com/v1/chat/completions";
    this.prompt = promptText;
    this.isRequestPending = false;
    this.havingError = false;
  }

  async sendMessage(chatLog) {
    //2000ms 딜레이 : 테스트 할 때는 생략하고 진행해도 ok
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    if (this.isRequestPending) {
      console.log("Request is already pending. Wait for the request");
    }

    this.isRequestPending = true;

    try {
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
            ...chatLog,
          ],
        }),
      });

      const data = await response.json();

      if (response.ok) {
        return data.choices[0].message.content;
      } else {
        this.havingError = true;
        throw new Error(
          `Failed to get response from GPT: ${data.error.message}`
        );
      }
    } finally {
      this.isRequestPending = false;
    }
  }

  async sendToGPT(chatLog) {
    try {
      const botResponse = await this.sendMessage(chatLog);
      return { role: "assistant", content: botResponse }; //대화마다 고유 id나 인덱스가 필요하면 추가하기
    } catch (error) {
      this.havingError = true;
      console.error("Error sending message to GPT:", error);
    }
  }
}