const {series, src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Funcion que compila SASS

function css(){
    return src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('./build/css'))
}

exports.css = css;