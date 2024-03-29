// pulling functions file
const fn = require('./functions');

module.exports = {
    name: 'throw',
    description: 'you suck if you got tagged',
    async execute (message, args, client) {
        // getting user pfp links
        if (args[0]) {
            /**
             * Process:
             * get all the frames of the video + mapping coords from main.py
             * put each photo in a canvas frame, map the pfps with canvas and save that somewhere
             * use ffmpeg to string together the frames into a video 
             * send the video
             * 
             */
            const yeeted = fn.getAv(message, fn.getUser(args[0], client));
            const yeeter = fn.getAv(message, message.author);
            // creating the temp directory to store frames
            var dirName = 'throw-';
            for (var i = 0; i < 6; i++) {
                dirName.concat(String(Math.floor(Math.random() * 10)));
            } 
            
            // mapping coords for all frames
            const mapping = [ 
                [720, 320, 1280, 720], // 0 - initial burger
                [720, 320, 1280, 720], // 1
                [720, 320, 1280, 720], // 2
                [720, 320, 1280, 720], // 3
                [720, 320, 1280, 720], // 4
                [720, 320, 1280, 720], // 5
                [720, 320, 1280, 720], // 6 
                [720, 320, 1280, 720], // 7
                [720, 320, 1280, 720], // 8
                [720, 320, 1280, 720], // 9
                [720, 320, 1280, 720], // 10
                [720, 320, 1280, 720], // 11
                [720, 320, 1280, 720], // 12
                [720, 320, 1280, 720], // 13
                [720, 320, 1280, 720], // 14
                [720, 320, 1280, 720], // 15
                [720, 320, 1280, 720], // 16
                [720, 320, 1280, 720], // 17
                [1043, 543, 360, 83], // 18 - ramsay grabs burger
                [1043, 543, 380, 89], // 19
                [1043, 543, 400, 94], // 20
                [1043, 543, 420, 100], // 21
                [1043, 543, 440, 106], // 22
                [1043, 543, 460, 111], // 23
                [1043, 543, 480, 117], // 24
                [1043, 543, 500, 122], // 25
                [1043, 543, 520, 128], // 26
                [1043, 543, 540, 134], // 27
                [1043, 543, 560, 139], // 28
                [1043, 543, 580, 145], // 29
                [1043, 543, 600, 151], // 30
                [1043, 543, 620, 156], // 31
                [1043, 543, 640, 162], // 32
                [1043, 543, 660, 168], // 33
                [1043, 543, 680, 173], // 34
                [1018, 510, 720, 179], // 35
                [992, 480, 720, 160], // 36
                [971, 450, 720, 150], // 37
                [950, 420, 720, 145], // 38
                [505, 330, 400, 20], // 39 - camera switches angles
                [510, 320, 390, 15], // 40
                [525, 290, 380, 10], // 41
                [540, 260, 371, 5], // 42
                [550, 250, 362, 0], // 43
                [460, 265, 354, -5], // 44 - pulls burger back
                [460, 265, 346, -10], // 45
                [460, 265, 338, -15], // 46
                [340, 290, 334, -20], // 47
                [220, 315, 330, -30], // 48
                [90, 340, 310, -22], // 49 - brings burger up
                [60, 290, 290, -14], // 50
                [30, 240, 270, -6], // 51
                [0, 200, 240, 2], // 52
                [-20, 160, 210, 10], // 53
                [-40, 130, 180, 18], // 54
                [-60, 100, 170, 24], // 55 
                [40, 120, 162, 27], // 56 - yeets the burger
                [120, 140, 169, 26], // 57
                [240, 160, 175, 25], // 58
                [370, 170, 181, 24], // 59
                [550, 180, 188, 23], // 60
                [1200, 180, 194, 22], // 61
                [1280, 720, 200, 20], // 62
                [1280, 720, 1280, 720], // 63
                [1280, 720, 1280, 720], // 64
                [1280, 720, 1280, 720], // 65
                [1280, 720, 1280, 720], // 66
                [1080, 350, 1280, 720, 5], // 67 - hits wall
                [1050, 360, 1280, 720, 8], // 68
                [1010, 380, 1280, 720, 10], // 69
                [910, 540, 1280, 720, 30], // 70
                [890, 680, 1280, 720, 40], // 71
                [1280, 720, 1280, 720, 90], // 72 - end
            ];
            
            // looping and saving canvas frames (each photo is 1280x720 pixels)

            
            
        } else {
            message.channel.send('Mention a user, you donkey!1!!1!!!');
        }
    }
}