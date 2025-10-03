const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'Geologi-app-win32-ia32/'),
    authors: 'Yufi T Hidayat',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'geologi-app.exe',
    setupExe: 'GeologiAppInstaller.exe'
    // setupIcon: path.join(rootPath, 'assets', 'img', 'home.png')
  })
}