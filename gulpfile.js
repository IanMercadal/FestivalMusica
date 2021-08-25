const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Funcion que compila SASS

function css(){
    return src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('./build/css'))
}
function minificarcss(){
    return src('src/scss/app.css')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(dest('./build/css'))
}
function watchArchivos(){
    watch('src/scss/**/*.scss', css) // * = La carpeta actual - ** = Todos los archivos con esa extensión
}
exports.css = css;
exports.minificarcss = minificarcss;
exports.watchArchivos = watchArchivos;