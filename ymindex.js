

function onKeyPress(button) {
  console.log("Button pressed", button);
 
  mf.$perform(['insert',buttonToLatex[button],{'focus':true, 'format':'latex','selectionMode':'placeholder'}]);
  //document.querySelector(".input").value = mf.$text('latex'); //show latex string of mathfield in input area.

  /**
   * If you want to handle the shift and caps lock buttons
   */

  if (button === "{MoveToEnd}") handleMoveToEnd(); 
  if (button === "{MoveToNex}") handleMoveToNex();
  if (button === "{backspace}") handleDel();
  if (button === "{C}") mf.$perform('deleteAll');
  if (button === "{basic}") handleBasic();
  if (button === "{greek}") handleGreeks();
  if (button === "{operators}") handleOperators();
  if (button === "{trigonometry}") handleTri();
  if (button === "{bigOp}") handleBigOp();
  if (button === "{Matri}") handleMatri();
  if (button === "{chemistry}") handleChemistry();

  if (button === "{steps}") gethttp();
}


function handleBasic() {
  keyboard.setOptions({
    layoutName: "basic"
  });
}

function handleGreeks() {
  keyboard.setOptions({
    layoutName: "greek"
  });
}

function handleTri() {
   keyboard.setOptions({
    layoutName: "trigonometry"
  });
}

function handleOperators() {
  keyboard.setOptions({
    layoutName: "operators"
  });
}

function handleBigOp() {
  keyboard.setOptions({
    layoutName: "bigOp"
  });
}

function handleMatri() {
  keyboard.setOptions({
    layoutName: "Matri"
  });
}

function handleChemistry() {
  keyboard.setOptions({
    layoutName: "chemistry"
  });
}



function handleMoveToEnd() {
  mf.$perform('moveToMathFieldEnd');
  //mf.$perform('selectAll');
}

function handleMoveToNex() {
  if( mf.$text('latex').indexOf("\placeholder") != '-1'  )
  mf.$perform('moveToNextPlaceholder');
  else mf.$perform('moveToMathFieldEnd');
  //mf.$perform(['insert','',{'focus':true, 'format':'latex','selectionMode':'placeholder'}]);
}

function handleDel() {
  mf.$perform('deletePreviousChar');
}

document.getElementById('mathfield').onmouseenter = function (){
    //document.getElementById('container').style.display = 'block';
  }

function gethttp() {
  
    var http = require('http');  
      
     content = mf.$text('latex');
      
     content = content.replace(/ /g,'%20');
     content = content.replace(/\+/g,'%2b');
     console.log("content: "+content);
    var options = {  
        hostname: 'demo.symbolab.com',  
        //hostname: '172.104.55.210',
        port: 80,  
        path: '/demo?' + 'lang=zs&query=' + content,  
        method: 'GET',
        timeout: 5000,  
    };  
    var wanted = new Object();

    


    var req = http.request(options, function (res) {  
        // console.log('STATUS: ' + res.statusCode);  
        // console.log('HEADERS: ' + JSON.stringify(res.headers));  
        res.setEncoding('utf8');  
        var preChunk = '';
        res.on('data', function (chunk) {  
            //sconsole.log('BODY: ' + chunk);
            //document.getElementById('container').style.display = 'none';
            //console.log('chunk: ',chunk);
            wanted = null;
            //chunk = chunk.replace(/\\u003cbrs/g,'');
            //wanted = eval('('+chunk+')');
            chunk = preChunk + chunk;

            try{
              JSON.parse(chunk);
              wanted = (new Function( "return " + chunk ) )() ;
              console.log(wanted);
              document.getElementById('steps').innerHTML='';

              var mainSteps = document.createElement('ul');
              document.getElementById('steps').appendChild(mainSteps);
              mainSteps.style.border = '1px solid #858585ea';
              mainSteps.style.borderRadius = '5px';
              mainSteps.style.fontWeight = '600';
              mainSteps.style.color = '#000000cc';
              showSteps(wanted,0,mainSteps);
              renderSteps(); 
            } catch(e){
              preChunk=chunk;
            }

              
        });
    });  
     
    req.on('error', function (e) {  
        console.log('problem with request: ' + e.message);  
    });  
      
    req.end();
}

function times(str, num){
  return num >= 1 ? str += times(str, --num): '';
}

function showSteps(wanted, rank, mainSteps) {
  console.log(times('    ',rank) + 'the number of steps: ' + wanted.steps.length);

  for(var i=0; i<wanted.steps.length; i++){
    console.log(times('    ',rank) + 'result: ' + wanted.steps[i].entire_result);

    let oneStep = document.createElement('li');
    mainSteps.appendChild(oneStep);
    
    let stepText = document.createElement('p');
    stepText.innerHTML=times('&nbsp;&nbsp;&nbsp;&nbsp;',rank)/* + 'step '
     + (i+1)*/ 
     + '&nbsp;&nbsp;&nbsp;&nbsp;'+( ('title' in wanted.steps[i])? ('$$'+wanted.steps[i].title.text.createdText.replace('\\mathrm','')+'$$:') : '得:') 
     + ( ('entire_result' in wanted.steps[i])? ('&nbsp;&nbsp;&nbsp;&nbsp;'+'$$'+wanted.steps[i].entire_result+'$$') : '')
     ;
     oneStep.appendChild(stepText);
     //oneStep.appendChild(document.createElement('hr'));

    if('steps' in wanted.steps[i]){
      let branchSteps = document.createElement('ul');
      oneStep.appendChild(branchSteps);
      oneStep.style.border = '1px solid #858585ea';
      oneStep.style.borderRadius = '5px';
      oneStep.style.background = '#d6d6d63f';

      branchSteps.style.display = 'none';
      stepText.onclick = function(){
       if( branchSteps.style.display == 'block' )
       {
         branchSteps.style.display = 'none';
       }
       else{
         branchSteps.style.display = 'block';
       }
      }
      showSteps(wanted.steps[i],rank+1,branchSteps);
    }
  }
}

function renderSteps() {
  MathLive.renderMathInElement(
    document.getElementById('steps'), {
        // Elements with a class of "instruction" or "source will be skipped            
        ignoreClass: 'instruction|source', 
        // TeX : {
        //     delimiters: {
        //         // Allow math formulas surround by $...$ or \(...\)
        //         // to be rendered as textstyle content.
        //         inline: [['$', '$'], ['\\(', '\\)']]
        //     }
        // }
    }
  );
}
