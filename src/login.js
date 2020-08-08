let Keyboard = window.SimpleKeyboard.default;

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  theme: "hg-theme-default hg-theme-ios",
  layout: {
    default: [
      "q w e r t y u i o p {bksp}",
      "a s d f g h j k l {enter}",
      "{shift} z x c v b n m , . {shift}",
      "{alt} {smileys} {space} {altright} {downkeyboard}"
    ],
    shift: [
      "Q W E R T Y U I O P {bksp}",
      "A S D F G H J K L {enter}",
      "{shiftactivated} Z X C V B N M , . {shiftactivated}",
      "{alt} {smileys} {space} {altright} {downkeyboard}"
    ],
    alt: [
      "1 2 3 4 5 6 7 8 9 0 {bksp}",
      `@ # $ & * ( ) ' " {enter}`,
      "{shift} % - + = / ; : ! ? {shift}",
      "{default} {smileys} {space} {back} {downkeyboard}"
    ],
    smileys: [
      "😀 😊 😅 😂 🙂 😉 😍 😛 😠 😎 {bksp}",
      `😏 😬 😭 😓 😱 😪 😬 😴 😯 {enter}`,
      "😐 😇 🤣 😘 😚 😆 😡 😥 😓 🙄 {shift}",
      "{default} {smileys} {space} {altright} {downkeyboard}"
    ]
  },
  display: {
    "{alt}": ".?123",
    "{smileys}": "\uD83D\uDE03",
    "{shift}": "⇧",
    "{shiftactivated}": "⇧",
    "{enter}": "return",
    "{bksp}": "⌫",
    "{altright}": ".?123",
    "{downkeyboard}": "🞃",
    "{space}": " ",
    "{default}": "ABC",
    "{back}": "⇦"
  }
});


console.log(keyboard);

function onChange(input) {
    if(currentFocus == 'ssid'){
        document.getElementById('ssid').value += input;
    }else if(currentFocus == 'pwd'){
        document.getElementById('pwd').value += input;
    }
    keyboard.clearInput();
}

function onKeyPress(button) {
  console.log("Button pressed", button);

  /**
   * Handle toggles
   */
  if (button.includes("{") && button.includes("}")) {
    handleLayoutChange(button);
  }
}

function handleLayoutChange(button) {
  let currentLayout = keyboard.options.layoutName;
  let layoutName;

  switch (button) {
    case "{shift}":
    case "{shiftactivated}":
    case "{default}":
      layoutName = currentLayout === "default" ? "shift" : "default";
      break;

    case "{alt}":
    case "{altright}":
      layoutName = currentLayout === "alt" ? "default" : "alt";
      break;

    case "{smileys}":
      layoutName = currentLayout === "smileys" ? "default" : "smileys";
      break;

    default:
      break;
  }

  if (layoutName) {
    keyboard.setOptions({
       layoutName: layoutName
    });
  }
}
