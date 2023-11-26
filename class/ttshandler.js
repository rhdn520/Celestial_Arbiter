class TTSHandler {
    constructor() {
        this.clientID = "ka7gfav4ae";
        this.secretID = "k3p6qMRm8cK2jzJHveKyrndyzMQuZZAW9g7PiT78";
        this.options = {
            url: "https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts",
            form: { speaker: 'nara', volume: '0', speed: '0', pitch: '0', text: '좋은 하루 되세요', format: 'mp3' },
            headers: { 'X-NCP-APIGW-API-KEY-ID': this.clientID, 'X-NCP-APIGW-API-KEY': this.secretID },
        };
    }
}