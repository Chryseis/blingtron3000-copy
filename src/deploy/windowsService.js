const Service = require('node-windows').Service;

let svc;

/*
 * @param script 执行脚本路径
 * @param scriptOptions 执行脚本参数
 * @Returns function uninstallService
 * */
function installService(script, scriptOptions) {
  svc = new Service({
    name: 'Blingtron3000',
    description: 'safety tools',
    script,
    scriptOptions
  });

  svc.on('install', () => {
    svc.start();
  });

  svc.on('uninstall', () => {
    console.log('Uninstall complete.');
  });

  svc.install();
}

function uninstallService(script) {
  if (!svc) {
    svc = new Service({
      name: 'Blingtron3000',
      description: 'safety tools',
      script
    });

    svc.on('uninstall', () => {
      console.log('Uninstall complete.');
    });
  }
  svc.uninstall();
}

module.exports = {
  installService,
  uninstallService
};
