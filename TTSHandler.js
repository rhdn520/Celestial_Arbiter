class TTSHandler {
    constructor() {
    }

    async fetchTTS(userMessage="둥땅둥땅 걸어가는 펭귄") {
        
        let clientID = "vrmxvti31e";
        let secretID = "akzeSZuwEQ2Uu5NobDQDOyu320YgLoaeW1X9wh90";
        let url = "https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts";  
        let encText = encodeURIComponent(userMessage);
        let data = `speaker=nsabina&volume=0&speed=0&pitch=0&format=mp3&text=${encText}`
        let options = {
            method: "POST",
            body: data,
            headers: {
                'X-NCP-APIGW-API-KEY-ID': clientID,
                'X-NCP-APIGW-API-KEY': secretID,
                "Content-Type": "application/x-www-form-urlencoded",
                "charset": "utf-8"
            },
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Error Code: ${response.status}`);
            }
            return await response.blob();
        } catch (error) {
            console.error(error);
        }
    }

    //TTS 비용이 크니까 개발 단계에서 활용할 TTS를 임시로 만들었습니다.
    //실제 동작해야 할 함수와는 달리 본 함수 내에서 음성이 재생되고, 임의의 mp3 파일을 반환합니다.
    async fetchTTS_dev(userMessage="둥땅둥땅 걸어가는 펭귄"){
       
        try {
            const utterThis = new SpeechSynthesisUtterance();
            const synth = window.speechSynthesis;
            utterThis.text = userMessage;
            synth.speak(utterThis);

            const response = await fetch('assets/forDev.mp3');
            if (!response.ok) {
                throw new Error(`Error Code: ${response.status}`);
            }
            return await response.blob(); //AudioHandler Class의 동작을 테스트할 수 있게끔 mp3 파일을 return
        } catch (error) {
            console.error(error);
        }
    }


}