const progress = require('progress-stream');
const { log } = require('../utils/log');

function gulpProgress(cb) {
  const progressStream = progress({
    time: 1000,
    objectMode: true
  });
  log.info('开始复制文件');
  progressStream.on('progress', progress => {
    const percentage = Math.round(progress.percentage);
    log.info(`正在复制文件，当前进度${percentage}%`);
    if (percentage === 100) {
      log.info(`复制文件完成！`);
      cb && cb();
    }
  });
  return progressStream;
}

module.exports = gulpProgress;
