const convertToWindowsStore = require('electron-windows-store')
 
convertToWindowsStore({
   containerVirtualization: false,
   inputDirectory: 'C:\\Users\\Administrator\\Desktop\\vk\\simple-keyboard-npm-demos-win32-x64',
   outputDirectory: 'C:\\Users\\Administrator\\Desktop\\cal',
   packageVersion: '1.0.0.0',
   packageName: 'demos',
  //  packageDisplayName: 'Ghost Desktop',
  //  packageDescription: 'Ghost for Desktops',
  //  packageExecutable: 'app/Ghost.exe',
  //  //assets: 'C:\\assets\\',
  //  //manifest: 'C:\\AppXManifest.xml',
  //  deploy: false,
    publisher: 'CN=Contoso Software, O=Contoso Corporation, C=US',
    windowsKit: 'C:\\Program Files (x86)\\Windows Kits\\10\\bin\\10.0.18362.0\\x86',
    // devCert: 'C:\\Users\\Administrator\\Desktop\\cal\\cert.pfx',
    // certPass: '961122',
  //  //desktopConverter: 'C:\\desktop-converter-tools',
  //  //expandedBaseImage: 'C:\\base-image.wim',
  //  makeappxParams: ['/l'],
  //  signtoolParams: ['/p'],
  //  makePri: true,
  //  createConfigParams: ['/a'],
  //  createPriParams: ['/b'],
  //  finalSay: function () {
  //    return new Promise((resolve, reject) => resolve())
  //  }
})