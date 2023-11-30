let sounds = [];

class Sound {
  constructor(soundFile) {
    this.sound = loadSound(soundFile, this.loaded.bind(this));
    this.isPlaying = false;
  }

  loaded() {
    this.duration = this.sound.duration();
  }

  play() {
    if (!this.isPlaying) {
      this.sound.play();
      this.isPlaying = true;
      setTimeout(() => {
        this.isPlaying = false;
      }, this.duration * 1000);
    }
  }

  isPlayingNow() {
    return this.isPlaying;
  }
}

function preload() {
  // MP3 파일들을 미리 로드
  soundFormats('mp3');
  let sound1 = new Sound('cartoon water spill-1.mp3');
  let sound2 = new Sound('warfare bullets.mp3');
  
  sounds.push(sound1, sound2);
}

function setup() {
  createCanvas(400, 400);
  
  // 재생 테스트를 위해 마우스 클릭 시 소리 재생
  for (let i = 0; i < sounds.length; i++) {
    let sound = sounds[i];
    let y = 50 * (i + 1);
    let button = createButton(`Play Sound ${i + 1}`);
    button.position(20, y);
    button.mousePressed(() => {
      sound.play();
    });
  }
}

function draw() {
  background(220);
  
  // 재생 중인지 확인하고 표시
  for (let i = 0; i < sounds.length; i++) {
    let sound = sounds[i];
    let y = 50 * (i + 1);
    
    if (sound.isPlayingNow()) {
      fill(255, 0, 0);
      text(`Sound ${i + 1} is playing`, 20, y);
    } else {
      fill(0);
      text(`Sound ${i + 1} is not playing`, 20, y);
    }
  }
}
