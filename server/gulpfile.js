'use strict';
const gulp = require('gulp');
const rename = require('gulp-rename');

gulp.task('env',envTask);

function envTask(done){
  switch(process.env.NODE_ENV){
    case 'development':
      gulp.src('./env/development.env')
        .pipe(rename('/.env'))
        .pipe(gulp.dest('./env/'));
      done();
      break;
    case 'test':
      gulp.src('./env/test.env')
        .pipe(rename('/.env'))
        .pipe(gulp.dest('./env/'));
      done();
      break;
    case 'production':
      gulp.src('./env/production.env')
        .pipe(rename('/.env'))
        .pipe(gulp.dest('./env/'));
      done();
      break;
  }
}