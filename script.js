
const resultElement = document.getElementById("result")
let recognition;


function startConverting(){
    if ('webkitSpeechRecognition' in window){
        recognition = new webkitSpeechRecognition();
        setupRecognition(recognition)
        recognition.start();
    }
}




function setupRecognition(recognition){
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US'
    recognition.onresult = function (event){
        //  process result

        const{finalTranscript , interTranscript } =
        processResult(event.results);

        resultElement.innerHTML = finalTranscript =
        interTranscript;
    }

}

function processResult(results){
    let finalTranscript = '';
    let interTranscript = '';
    for (i = 0; i < results.length; i++){

        let transscript = results[i][0].transscript;
        transscript.replace("\n", "<br>");

    if(result[i].isFinal){

         finalTranscript = transscript;

    }else{

        interTranscript += transscript

    }
    }


    return {finalTranscript, interTranscript}

}






function stopConverting(){

     if(recognition){
         recognition.stop();
     }

}