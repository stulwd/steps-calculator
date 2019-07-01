 
// const { BrowserWindow } = require('electron');
// let win = new BrowserWindow();
// win.webContents.openDevTools();



let {PythonShell} = require('python-shell');
let physicalKey = new PythonShell('./src/physicalKey.py', {pythonOptions: ['-u']});
var btnOnIs;
// physicalKey.send('Start sampling');
physicalKey.on('message', function(message){
  btnOnIs = message;
  changeLayout(btnOnIs);
});


physicalKey.end();
function changeLayout(btn){
  if (btn == 1)
  {    keyboard.setOptions({ layoutName: "basic" });  }
  else if(btn == 2)
  {    keyboard.setOptions({ layoutName: "greek" });  }
  else if(btn == 3)
  {    keyboard.setOptions({ layoutName: "trigonometry" });  }
  else if(btn == 4)
  {    keyboard.setOptions({ layoutName: "operators" });  }
  else if(btn == 5)
  {    keyboard.setOptions({ layoutName: "bigOp" });  }
  else{
    console.log('err');
  }
}



let Keyboard = window.SimpleKeyboard.default;
let commonOptions = {
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  mergeDisplay: true,
  physicalKeyboardHighlight: true, 
  syncInstanceInputs: true,
  display: {
    //basic
    "{basic}": "Bas",
    "{square}": "▢²",
    "{pow}": "^▢",
    "{x}": "x",
    "{x_pow2}":"x²",
    "{x_pow3}":"x³",
    "{y}": "y",
    "{y_pow2}": "y²",
    "{y_pow3}": "y³",
    "{e}": "e",
    "{pi}": "π",
    "{theta}": "θ", 
    "{inf}": "∞",
    "{pm}":"±",
    "{p}":"+",
    "{m}":"-",
    "{eq}":"=",
    "{div1}":"/",
    "{cdot}": "*",
    "{int}": "∫",
    "{d_int}": "∫:",
    "{sum}": "∑",
    "{sqrt}": "√",
    "{log}":"log",

    // "{numbers}": "123",
    // "{ent}": "return",
    // "{escape}": "esc ⎋",
    // "{tab}": "tab ⇥",
    // "{capslock}": "caps lock ⇪",
    // "{shift}": "⇧",
    // "{controlleft}": "ctrl ⌃",
    // "{controlright}": "ctrl ⌃",
    // "{altleft}": "alt ⌥",
    // "{altright}": "alt ⌥",
    // "{metaleft}": "cmd ⌘",
    // "{metaright}": "cmd ⌘",
    // "{abc}": "ABC",



    "{greek}": "αβ",
    "{alpha}": "α",
    "{beta}": "β", 
    "{gamma}": "γ", 
    "{delta}": "δ", 
    "{zeta}": "ζ", 
    "{eta}": "η", 
    //"{theta}": "θ", 
    "{iota}": "ι", 
    "{kappa}": "κ", 
    "{lambda}": "λ", 
    "{mu}": "μ",
    "{nu}": "ν", 
    "{xi}": "ξ", 
    //"{pi}": "π", 
    "{rho}": "ρ", 
    "{sigma}": "σ", 
    "{tau}": "τ", 
    "{upsilon}": "υ", 
    "{phi}": "φ", 
    "{chi}": "χ", 
    "{psi}": "ψ", 
    "{omega}": "ω",

    //tri
    "{trigonometry}": "Sin",
    "{sin}": "sin",
    "{cos}": "cos",
    "{tan}": "tan",
    "{cot}": "cot",
    "{sec}": "sec",
    "{csc}": "csc",
    "{sinh}": "sinh",
    "{cosh}": "cosh",
    "{tanh}": "tanh",
    "{coth}": "coth",
    "{sech}": "sech",
    "{arcsin}": "arcsin",
    "{arccos}": "arccos",
    "{arctan}": "arctan",
    "{arccot}": "arccot",
    "{arcsec}": "arcsec",
    "{arccsc}": "arccsc",
    "{arcsinh}": "arcsinh",
    "{arccosh}": "arccosh",
    "{arctanh}": "arctanh",
    "{arccoth}": "arccoth",
    "{arcsech}": "arcsech",

    //operators
    "{operators}": "×÷",
    // "{p}":"+",
    // "{m}":"-",
    // "{eq}":"=",
    // "{div1}":"/",
    "{div2}": "÷",
    // "{cdot}": "\\cdot",
    "{times}": "×",
    "{les}":"<",
    "{mor}":">",
    "{le}": "≤",
    "{ge}": "≥",
    "{pt}": "(▢)", //(▢)
    "{sb}": "[▢]",	//[▢]
    "{longDiv}": ".┌..",
    //"{sqrt}": "√",
      

    "{bigOp}": "∑", 
    //"{int}": "∫",
    "{iint}": "∬",
    "{iiint}": "∭",
    //"{d_int}": "∫:",
    "{d_iint}": "∫:∫:",
    "{d_iiint}": "∫:∫:∫:",
    //"{sum}": "∑",
    "{lim}": "lim",
    "{deri_x}": "d(▢)/dx",//d(▢)/dx
    "{deri_x_2}": "d²(▢)/dx²",
    "{deri}": "▢ˊ",
    "{deri_2}": "▢ˊˊ",
    "{pderi}": "∂",
    "{dx}":"dx",
    
    
    "{Matri}": "🔡", 
    "{2x2}": "2x2",
    "{2x3}": "2x3",

    "{chemistry}" :"💧",

    //stable key
    "{.}": ".",
    "{backspace}": "⌫",
    "{MoveToEnd}": "end",
    "{MoveToNex}": "▶",
    "{bkts}": "(▭)",
    "{steps}": "👩‍🏫uu",
    "{C}": "C"
  }
};

let keyboard = new Keyboard('.flexkey',{
  ...commonOptions,
  layoutName: "basic",
  buttonTheme: [
    {
      class: "subjects",
      buttons: "{basic} {greek} {trigonometry} {operators} {bigOp} {Matri} {chemistry}"
    }
  ],
  layout: {

    basic: [
      "{basic} {greek} {trigonometry} {operators} {bigOp} {Matri} {chemistry}",
      "{square} {pow} {x} {x_pow2} {x_pow3} {y} {y_pow2} {y_pow3} {e} {pi} {theta}",
      "{inf} {pm} {int} {d_int} {sum} {dx} {sqrt} {log}"
    ],
    
    greek: [
      "{basic} {greek} {trigonometry} {operators} {bigOp} {Matri} {chemistry}",
      "{alpha} {beta} {gamma} {delta} {zeta} {eta} {theta} {iota} {kappa} {lambda} {mu}",
      "{nu} {xi} {pi} {rho} {sigma} {tau} {upsilon} {phi} {chi} {psi} {omega}"
    ],
    trigonometry: [
      "{basic} {greek} {trigonometry} {operators} {bigOp} {Matri} {chemistry}",
      "{sin} {cos} {tan} {cot} {sec} {csc} {sinh} {cosh} {tanh} {coth} {sech}",
      "{arcsin} {arccos} {arctan} {arccot} {arcsec} {arccsc} {arcsinh} {arccosh} {arctanh} {arccoth} {arcsech}"
    ],
    operators: [
      "{basic} {greek} {trigonometry} {operators} {bigOp} {Matri} {chemistry}",
      "{div2} {times} {les} {mor} {le} {ge}",
      "{pt} {sb} {longDiv}"
    ],
    bigOp: [
      "{basic} {greek} {trigonometry} {operators} {bigOp} {Matri} {chemistry}",
      "{int} {iint} {iiint} {lim} {sum} {deri_x} {deri_x_2}",
      "{d_int} {d_iint} {d_iiint} {deri} {deri_2} {pderi} {dx}"
    ],

    Matri: [
      "{basic} {greek} {trigonometry} {operators} {bigOp} {Matri} {chemistry}",
      "{2x2} {2x3}",
      ""
    ],
    chemistry: [
      "{basic} {greek} {trigonometry} {operators} {bigOp} {Matri} {chemistry}",
      "",
      ""
    ]
  }

});
let keyboardStable = new Keyboard('.stablekey',{
  ...commonOptions,
  layoutName: "default",
  buttonTheme: [
    {
      class: "backspace",
      buttons: "{backspace} {MoveToNex} {MoveToEnd} {C}"
    },
    {
      class: "steps",
      buttons: "{steps}"
    }
  ],
  layout:{
    default: [
      "1 2 3 4 5 6 7 8 9 0 {steps}",
      "{.} {p} {m} {cdot} {div1} {eq} {bkts} {MoveToNex} {MoveToEnd} {backspace} {C}"
    ]
  },

});
/**
 * Update simple-keyboard when input is changed directly
 */
// document.querySelector(".input").addEventListener("input", event => {
//   keyboard.setInput(event.target.value);
// });

// console.log(keyboard);

/*the input relate to the area of simple keyboard itself,it not relate to the rendered input area*/ 
// function onChange(input) {
//   //document.querySelector(".input").value = input;
//   console.log("Input changed", input);
// }

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
    document.getElementById('container').style.display = 'block';
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
            document.getElementById('container').style.display = 'none';
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
