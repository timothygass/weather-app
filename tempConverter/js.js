  
  const temp = document.getElementById("temp");
  const toFarenheit = document.getElementById("toFarenheit");
  const toCelsius = document.getElementById("toCelsius");
  const results = document.getElementById("result");
  let number;


  function convert(event){
        event.preventDefault();
        if (toFarenheit.checked){

            number = Number(temp.value);
            number = number * 9 / 5 + 32;
            results.textContent = number + "F";
            
        }else if(toCelsius.checked){


        number = Number(temp.value);
        number = (number - 32) * (5/9);
        results.textContent = number + "C";
        }

        else {

            results.textContent = "Select Option";
        }
  }

  

  
