class GPTHandler {
  constructor(_globalVar, _promptText, _receiptPromptText) {
    this.apiKey = "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";
    // this.apiKey = "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"; //승우
    this.apiUrl = "https://api.openai.com/v1/chat/completions";
    this.prompt = _promptText;
    this.receiptPrompt = _receiptPromptText;
    this.globalVar = _globalVar;
    this.globalVar.gptIsRequestPending = false;
    this.globalVar.gptHavingError = false;

    this.judgment_schema = {
      type: "object",
      description: "판결문과 긍정적인 키워드 목록과 부정적인 키워드 목록",
      properties: {
        judge_sentence: {
          type: "string",
          description: "sentencing",
        },
        positive_values: {
          type: "array",

          positive_value: {

          }
      },
        value1: {
          type: "string",
          description:
            "The first element of the list of five important values that the soul pursued in english.",
        },
        value2: {
          type: "string",
          description:
            "The second element of the list of five important values that the soul pursued in english.",
        },
        value3: {
          type: "string",
          description:
            "The third element of the list of five important values that the soul pursued in english.",
        },
        value4: {
          type: "string",
          description:
            "The fourth element of the list of five important values that the soul pursued in english.",
        },
        value5: {
          type: "string",
          description:
            "The fifth element of the list of five important values that the soul pursued in english.",
        },
        value1_score: {
          type: "string",
          description: "The score of the importance of 'value1' out of 10.",
        },
        value2_score: {
          type: "string",
          description: "The score of the importance of 'value2' out of 10.",
        },
        value3_score: {
          type: "string",
          description: "The score of the importance of 'value3' out of 10.",
        },
        value4_score: {
          type: "string",
          description: "The score of the importance of 'value4' out of 10.",
        },
        value5_score: {
          type: "string",
          description: "The score of the importance of 'value5' out of 10.",
        },
      },
    };

    this.judgment_schema = {
      type: "object",
      properties: {
        sentencing: {
          type: "string",
          description: "Sentencing inferred from the conversation log."
        },
        PositiveKeywords: {
          type: "array",
          description: "Positive keywords and its relevance from the conversation",
          items: {
            type: "object",
            properties: {
              keyword: {
                type: "string",
                description:"Positive keyword"
              },
              relevance: {
                type: "number",
                description:"Relevance of the keyword"
              }
            }
          }
        },
        NegativeKeywords: {
          type: "array",
          description: "Negative keywords and its relevance from the conversation",
          items: {
            type: "object",
            properties: {
              keyword: {
                type: "string",
                description:"Negative keyword"
              },
              relevance: {
                type: "number",
                description:"Relevance of the keyword"
              }
            }
          }
        }
      },
      required:["sentencing","PositiveKeywords","NegativeKeywords"]
    }
  }

  async sendMessage(chatLog) {
    //2000ms 딜레이 : 테스트 할 때는 생략하고 진행해도 ok
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    if (this.globalVar.gptIsRequestPending) {
      console.log("Request is already pending. Wait for the request");
    }

    this.globalVar.gptIsRequestPending = true;
    scene.updateParticleScene();

    try {
      //에러 시 다시 시도하는 로직 추가 필요
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          // model: "gpt-4-1106-preview",
          model: "gpt-3.5-turbo-0613",
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
        this.globalVar.gptHavingError = true;
        throw new Error(
          `Failed to get response from GPT: ${data.error.message}`
        );
      }
    } finally {
      this.globalVar.gptIsRequestPending = false;
      scene.updateParticleScene();
    }
  }

  async sendToGPT() {
    try {
      const botResponse = await this.sendMessage(this.globalVar.chatLog);
      return { role: "assistant", content: botResponse }; //대화마다 고유 id나 인덱스가 필요하면 추가하기
    } catch (error) {
      this.globalVar.gptHavingError = true;
      console.error("Error sending message to GPT:", error);
      if (!this.globalVar.debugMode) {
        if (!alert("심판자가 졸리다고 합니다.\n다음에 오시죠.")) {
          window.location.reload();
        }
      }
    }
  }

  //test code for GPT
  getGPTResponse(text) {
    if (text === "") {
      return;
    }

    const userMessage = { role: "user", content: text };
    scene.updateChatLog(userMessage); //대화로그 업데이트(유저인풋)
    ui.updateTextBox(globalVar.chatLog);

    gpt.sendToGPT().then((response) => {
      let re = /\(\d\)/i;
      let matches = response.content.match(re);
      console.log(response);

      if (matches !== null) {
        //감정 점수 업데이트를 위한 부분
        let match = matches[matches.length - 1];
        let newNegEmoLv = match.substring(1, match.length - 1);
        globalVar.judgeNegativeEmotion = parseInt(newNegEmoLv);
      }

      response.content = response.content.replace(re, "");

      scene.updateChatLog(response); //대화로그 업데이트(GPT대답)
      console.log(globalVar.chatLog);
      ui.updateTextBox(globalVar.chatLog); //대화내역 렌더링
    });
  }

  async sendRcptRequest(chatLog) {
    if (this.globalVar.gptIsRequestPending) {
      console.log("Request is already pending. Wait for the request");
    }

    this.globalVar.gptIsRequestPending = true;
    scene.updateParticleScene();

    try {
      //에러 시 다시 시도하는 로직 추가 필요
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          // model: "gpt-4-1106-preview",
          model: "gpt-3.5-turbo-0613",
          messages: [
            { role: "system", content: this.receiptPrompt }, //프롬프트 넣는 곳
            { role: "user", content: this.makeChatLogText(chatLog) },
          ],
          // response_format: { type: "json" },
          functions: [
            {
              name: "getJudgment",
              description:
                "Get the sentencing of the judge and keywords",
              parameters: this.judgment_schema,
            },
          ],
          function_call: {
            name: "getJudgment",
          },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(
          data["choices"][0]["message"]["function_call"]["arguments"]
        );
        // return data.choices[0].message.content;
        return data["choices"][0]["message"]["function_call"]["arguments"];
      } else {
        this.globalVar.gptHavingError = true;
        throw new Error(
          `Failed to get response from GPT: ${data.error.message}`
        );
      }
    } finally {
      this.globalVar.gptIsRequestPending = false;
      scene.updateParticleScene();
    }
  }

  async getGPTReceipt() {
    try {
      const botResponse = await this.sendRcptRequest(this.globalVar.chatLog);
      console.log(botResponse);
      this.globalVar.receiptData = JSON.parse(botResponse);
      return this.globalVar.receiptData; //대화마다 고유 id나 인덱스가 필요하면 추가하기
    } catch (error) {
      this.globalVar.gptHavingError = true;
      console.error("Error sending message to GPT:", error);
      if (!this.globalVar.debugMode) {
        if (!alert("심판자가 졸리다고 합니다.\n다음에 오시죠.")) {
          window.location.reload();
        }
      }
    }
  }

  makeChatLogText(chatLog) {
    let chatText = "";
    for (let i = 0; i < chatLog.length; i++) {
      chatText += `\n-${chatLog[i].role=="assistant" ? '심판관' : '영혼'}: ${chatLog[i].content.replace('\n','')}`;
    }
    console.log(chatText);
    return chatText;
  }

  getJudgment(message) {
    console.log(message);

    return message;
  }
}
