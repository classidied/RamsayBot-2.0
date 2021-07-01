import os
from PIL import Image
import random
import string
import time

pfp1 = Image.open("classified.png") #burger
pfp2 = Image.open("bheta.png") #ramsay

#create directory to store temp frames
tempDir = "temp-" + ''.join(random.choice(string.ascii_lowercase) for i in range(6))
os.mkdir(tempDir)

mapping = [ 
    [720, 320, 1280, 720], #0 - initial burger
    [720, 320, 1280, 720], #1
    [720, 320, 1280, 720], #2
    [720, 320, 1280, 720], #3
    [720, 320, 1280, 720], #4
    [720, 320, 1280, 720], #5
    [720, 320, 1280, 720], #6 
    [720, 320, 1280, 720], #7
    [720, 320, 1280, 720], #8
    [720, 320, 1280, 720], #9
    [720, 320, 1280, 720], #10
    [720, 320, 1280, 720], #11
    [720, 320, 1280, 720], #12
    [720, 320, 1280, 720], #13
    [720, 320, 1280, 720], #14
    [720, 320, 1280, 720], #15
    [720, 320, 1280, 720], #16
    [720, 320, 1280, 720], #17
    [1043, 543, 360, 83], #18 - ramsay grabs burger
    [1043, 543, 380, 89], #19
    [1043, 543, 400, 94], #20
    [1043, 543, 420, 100], #21
    [1043, 543, 440, 106], #22
    [1043, 543, 460, 111], #23
    [1043, 543, 480, 117], #24
    [1043, 543, 500, 122], #25
    [1043, 543, 520, 128], #26
    [1043, 543, 540, 134], #27
    [1043, 543, 560, 139], #28
    [1043, 543, 580, 145], #29
    [1043, 543, 600, 151], #30
    [1043, 543, 620, 156], #31
    [1043, 543, 640, 162], #32
    [1043, 543, 660, 168], #33
    [1043, 543, 680, 173], #34
    [1018, 510, 720, 179], #35
    [992, 480, 720, 160], #36
    [971, 450, 720, 150], #37
    [950, 420, 720, 145], #38
    [505, 330, 400, 20], #39 - camera switches angles
    [510, 320, 390, 15], #40
    [525, 290, 380, 10], #41
    [540, 260, 371, 5], #42
    [550, 250, 362, 0], #43
    [460, 265, 354, -5], #44 - pulls burger back
    [460, 265, 346, -10], #45
    [460, 265, 338, -15], #46
    [340, 290, 334, -20], #47
    [220, 315, 330, -30], #48
    [90, 340, 310, -22], #49 - brings burger up
    [60, 290, 290, -14], #50
    [30, 240, 270, -6], #51
    [0, 200, 240, 2], #52
    [-20, 160, 210, 10], #53
    [-40, 130, 180, 18], #54
    [-60, 100, 170, 24], #55 
    [40, 120, 162, 27], #56 - yeets the burger
    [120, 140, 169, 26], #57
    [240, 160, 175, 25], #58
    [370, 170, 181, 24], #59
    [550, 180, 188, 23], #60
    [1200, 180, 194, 22], #61
    [1280, 720, 200, 20], #62
    [1280, 720, 1280, 720], #63
    [1280, 720, 1280, 720], #64
    [1280, 720, 1280, 720], #65
    [1280, 720, 1280, 720], #66
    [1080, 350, 1280, 720, 5], #67 - hits wall
    [1050, 360, 1280, 720, 8], #68
    [1010, 380, 1280, 720, 10], #69
    [910, 540, 1280, 720, 30], #70
    [890, 680, 1280, 720, 40], #71
    [1280, 720, 1280, 720, 90], #72 - end
]
start = time.time()
for frame in range(0, len(mapping)):
    pfpCoords = mapping[frame]
    videoFrame = Image.open("frames/frame" + str(frame) + ".jpg")
    newFrame = videoFrame.copy()
    try:
        rot_pfp1 = pfp1.rotate(mapping[frame][4])
        newFrame.paste(pfp1, (mapping[frame][0], mapping[frame][1]))
        newFrame.paste(pfp2, (mapping[frame][2], mapping[frame][3]))
        newFrame.save(tempDir + "/frame" + "0" * (2 - len(str(frame))) + str(frame) + ".png", format="png")
    except:
        newFrame.paste(pfp1, (mapping[frame][0], mapping[frame][1]))
        newFrame.paste(pfp2, (mapping[frame][2], mapping[frame][3]))
        newFrame.save(tempDir + "/frame" + "0" * (2 - len(str(frame))) + str(frame) + ".png", format="png")

duration = time.time() - start
print("Finished " + str(len(mapping)) + " frames in " + str(duration) + " seconds, each frame averaging " + str(duration/len(mapping)) + " seconds.")
os.system("ffmpeg -r 20 -f image2 -s 1280x720 -i " + tempDir + "/frame%02d.png -vcodec libx264 -crf 25  -pix_fmt yuv420p test.mp4")