// Hello, How are you?
const visemeMap = {
    // Consonants
    "k":"viseme_kk",
    "@":"viseme_aa",
    "t":"viseme_PP",
    "o":"viseme_O",
    "a":"viseme_E",
    "r":"viseme_I",
    "i":"viseme_O",
    "u":"viseme_U",
    "sil": "viseme_sil"
};
const visemes = [
  {
    time: 6,
    type: "viseme",
    value: "k",
  },
  {
    time: 72,
    type: "viseme",
    value: "@",
  },
  {
    time: 104,
    type: "viseme",
    value: "t",
  },
  {
    time: 162,
    type: "viseme",
    value: "o",
  },
  {
    time: 448,
    type: "viseme",
    value: "sil",
  },
  {
    time: 639,
    type: "viseme",
    value: "k",
  },
  {
    time: 661,
    type: "viseme",
    value: "a",
  },
  {
    time: 780,
    type: "viseme",
    value: "a",
  },
  {
    time: 824,
    type: "viseme",
    value: "r",
  },
  {
    time: 924,
    type: "viseme",
    value: "i",
  },
  {
    time: 1093,
    type: "viseme",
    value: "u",
  },
  {
    time: 1370,
    type: "viseme",
    value: "sil",
  },
]

function speak(text,avatar) {
  visemes.map((vis) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        changeMorphTargetByName(avatar,visemeMap[vis])
        // setPho(vis.value) // Resolve the promise with true once setPho is completed
        console.log(vis)
      }, vis.time)
    })
  })
}

// async function speak(text) {
//   console.log(text)

//   const { AudioStream, visemes } = await callPolly(text)
//   console.log("🚀 ~ speak ~ visemes:", visemes)

//   streamAudioData(AudioStream)

//   let audioElement = document.getElementById("audioPlayback")
//   audioElement.onplay = function () {
//     mapVisemesToModel(visemes)
//   }
// }

async function callPolly(text) {
  console.log("callPolly", text)
  try {
    let { AudioStream, viseme } = await speakText(text)
    let visemes = []
    visemes = JSON.parse("[" + viseme.slice(0, -1).split("\n").join(",") + "]")
    return { AudioStream, visemes }
  } catch (error) {
    console.error("call Polly", error)
  }
}

function mapVisemesToModel(visemes) {
  console.log("🚀 ~ mapVisemesToModel ~ visemes:", visemes)
  const promises = visemes.map((vis) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // setPho(vis.value) // Resolve the promise with true once setPho is completed
      }, vis.time)
    })
  })

  let ender
  if (visemes.length > 0) ender = visemes[visemes.length - 1].time

  // Returning a promise that resolves to true if all setPho calls are successful
  return Promise.all(promises).then((results) => {
    const allSuccessful = results.every((result) => result === true)
    /*       setTimeout(() => {
            talkSwap = 0;
            talking_UP = 0;
        }, ender);  */
    return allSuccessful
  })
}

async function streamAudioData(audioStream) {
  console.log("🚀 ~ streamAudioData ~ audioStream:", audioStream)
  // const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const mediaSource = new MediaSource()
  const audioElement = document.getElementById("audioPlayback")
  audioElement.src = URL.createObjectURL(mediaSource)

  mediaSource.addEventListener("sourceopen", async () => {
    const sourceBuffer = mediaSource.addSourceBuffer("audio/mpeg") // Adjust the mime type based on your audio format

    const reader = audioStream.getReader()

    async function readAndAppend() {
      const { done, value } = await reader.read()

      if (done) {
        // Wait until all SourceBuffers have finished updating before calling endOfStream()
        const waitForUpdates = Array.from(mediaSource.sourceBuffers).map(
          (sb) => {
            return new Promise((resolve) => {
              if (sb.updating) {
                sb.addEventListener("updateend", function onUpdateEnd() {
                  sb.removeEventListener("updateend", onUpdateEnd)
                  resolve()
                })
              } else {
                resolve()
              }
            })
          }
        )

        Promise.all(waitForUpdates).then(() => {
          mediaSource.endOfStream()
        })

        return
      }

      // Wait until the first SourceBuffer is not updating before appending the next buffer
      function appendWhenReady() {
        const firstSourceBuffer = mediaSource.sourceBuffers[0]
        if (firstSourceBuffer && firstSourceBuffer.updating) {
          firstSourceBuffer.addEventListener("updateend", appendWhenReady)
        } else if (firstSourceBuffer) {
          firstSourceBuffer.removeEventListener("updateend", appendWhenReady)
          firstSourceBuffer.appendBuffer(value)
          readAndAppend()
        }
      }

      appendWhenReady()
    }

    // Call the function to start reading and appending audio chunks
    readAndAppend()
  })
}


function phonemeToViseme(phoneme) {
    const visemeMap = {
        // Consonants
        "k":"viseme_kk",
        "@":"viseme_aa",
        "t":"viseme_PP",
        "o":"viseme_O",
        "a":"viseme_E",
        "r":"viseme_I",
        "i":"viseme_O",
        "u":"viseme_U",
        "sil": "viseme_sil"
    };

    // Convert the phoneme to lowercase to handle case-insensitivity
    phoneme = phoneme.toLowerCase();

    // Check if the phoneme exists in the map
    if (phoneme in phonemeToVisemeMap) {
        return phonemeToVisemeMap[phoneme];
    } else {
        return ""; // If the phoneme is not found, return an empty string
    }
}


export default speak
function changeMorphTargetByName(loadedModel,targetName) {
    if (!loadedModel) {
      console.error("Model not loaded yet.");
      return;
    }
  
    // Assuming loadedModel is a mesh with morph targets
    const morphTargets = loadedModel.morphTargetDictionary;
  
    // Check if the targetName exists in the morph targets
    if (morphTargets.hasOwnProperty(targetName)) {
      // Set the morph target by name
      loadedModel.morphTargetInfluences[morphTargets[targetName]] = 1;
    } else {
      console.error(`Morph target with name "${targetName}" not found.`);
    }
  }