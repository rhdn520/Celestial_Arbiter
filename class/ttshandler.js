
class TTSHandler {
    constructor() {
    }

    async fetchTTS(userMessage="둥땅둥땅 걸어가는 펭귄") {
        
        let clientID = "ka7gfav4ae";
        let secretID = "k3p6qMRm8cK2jzJHveKyrndyzMQuZZAW9g7PiT78";
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
}