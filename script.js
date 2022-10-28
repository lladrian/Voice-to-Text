  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  var instruction = document.getElementById("instruction");
  var output = document.getElementById("convert_text");
  var reset = document.getElementById("reset");

    var content = '';

    recognition.onstart = function () {
        instruction.innerHTML = "Voice Recognition is on";
    }

    recognition.onspeechend = function (){
         instruction.innerHTML = "No Activity";
    }

    recognition.oneerror = function () {
        instruction.innerHTML = "Try Again";
    }

    recognition.onresult = function(event) {
        var current = event.resultIndex;
        var transcript = event.results[current][0].transcript

        content += transcript;
        output.innerHTML= content;
    }


click_to_record.addEventListener('click',function(){
    if (content.length) {
        content += '';
    }
 recognition.start();
})

reset.addEventListener('click',function(){
    output.innerHTML= '';
    instruction.innerHTML = '';
})

output.on('input', function (){
    content = $(this).val();
})