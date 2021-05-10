const watch = require('gulp-watch');
const { copyFile } = require('./copyFiles');
const { log } = require('../utils/log');

/*
 * @param s 监视目录路径
 * @param d 复制到目录路径
 * */
function watchFiles(s, d) {
  const watcher = watch(`${s}/**`);
  let copyFilesCount = 0;

  watcher.on('change', path => {
    log.info(`文件变更：${path}`);
    copyFile(path, d, () => {
      log.info(`正在复制，${path}`);
    });
  });

  watcher.on('add', path => {
    log.info(`新文件：${path}`);

    setTimeout(() => {
      copyFile(path, d, () => {
        copyFilesCount = copyFilesCount + 1;
        log.info(`复制完成,已复制${copyFilesCount}个文件`);
      });
    }, 3000);
  });

  watcher.on('unlink', path => {
    log.info(`文件移除：${path}`);
  });
}

module.exports = {
  watchFiles
};
