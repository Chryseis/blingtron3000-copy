const { src, dest } = require('gulp');
const gulpProgress = require('../plugins/gulp-progress');

/*
 * @param s 复制目录路径
 * @param d 复制到目录路径
 * */
function copyAllFiles(s, d) {
  return src(`${s}/**`)
    .pipe(gulpProgress())
    .pipe(dest(`${d}/`));
}

/*
 * @param s 复制文件路径
 * @param d 复制到目录路径
 * */
function copyFile(file, d, cb) {
  return src(file)
    .pipe(gulpProgress(cb))
    .pipe(dest(`${d}/`));
}

module.exports = {
  copyAllFiles,
  copyFile
};
