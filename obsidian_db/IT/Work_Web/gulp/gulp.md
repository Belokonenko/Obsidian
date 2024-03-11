# Gulp сборка - полная инструкция. HTML, SCSS, JS, webpack, babel, webp, сжатие графики, автопрефиксы

https://www.youtube.com/watch?v=D_HW-tvyKKE&t=98s&ab_channel=%D0%92%D0%B5%D0%B1%D0%9A%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8-%D0%B2%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%2C%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%B8IT

1.  node.js
2.  npm init 
1.  npm i  namePackage --save-dev(установка пакетов для разработки --save-dev)
		(npm r namepackege // удалить пакет)
1.  sudo npm install --global gulp-cli

![[Pasted image 20240204185128.png]]


![[Pasted image 20240204185650.png]]
```js
gulp.task // создать задачу
'sass' //1-arg имя задачи
function (done) {} //2-arg 


```

![[Pasted image 20240204190150.png]]
задача ('nameTask', запуск серии задач(
	clean,
		 запуск.паралельно.задач( )
		

) )
задачи описаны выше 

```js
const gulp = require("gulp");

gulp.task("hello", function (done) {
    console.log("hello, form gulp");
    done();//колбек фун чтоб небыло ошибки
});

gulp.task("default", gulp.series("hello"));
```


## имена require("");
берем в ![[Pasted image 20240204215857.png]]
const  name (любое)![[Pasted image 20240204220035.png]]


## gulp-file-include
```js
const gulp = require("gulp");
const fileinclude = require("gulp-file-include");

gulp.task('includeFiles',  function() {
    return gulp.src('./src/*.html')
        .pipe(fileinclude({
            prefix: "@@",
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist/'))

});
```

```js
gulp.task("server", function () {
    browserSync.init({
        server: {
            baseDir: "./dist",
        },
    });
    browserSync.watch("dist", browserSync.reload);
});

```

```js

gulp.task('watch', function() {
    gulp.watch('./src/**/*.scss', gulp.parallel('sass'));
    gulp.watch('./src/**/*.html', gulp.parallel('html'));
    gulp.watch('./src/img/**.*',gulp.parallel('images'));
})

```

## plumber
```js 
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
	
//пример из html
gulp.task("html", function () {
    return gulp
        .src("./src/*.html")
	    //подключение  plumber
        .pipe(
            plumber({
                errorHandler: notify.onError({
                    title: "HTML",
                    message: "Error <%= error.message %>",
                    sound: false,
                }),
            })
        )
        .pipe(
            fileinclude({
                prefix: "@@",
                basepath: "@file",
            })
        )
        .pipe(gulp.dest("./dist/"));
});
```

## webpack
npm i   namepack  --save-dev
	1. webpack-stream
	2. @babel/core
	3. @babel/preset-env
```js

gulp.task("js", function () {
    return gulp
        .src("./src/js/*.js")
        .pipe(
            plumber({
                errorHandler: notify.onError({
                    title: "JS",
                    message: "Error <%= error.message %>",
                    sound: false,
                }),
            })
        )
        .pipe(babel())
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest('dist/js'))
        
});

```

package.json
```json
    "babel": {
        "presets": [
            "@babel/preset-env"
        ]
    }

```

в корне проэкта  webpack.config.js
```js

const config = {
    mode: 'production',
    entry: {
    //перечеление отдельныях js для каждой страницы
        index: './src/js/index.js',
        contacts: './src/js/contacts.js',
        about: './src/js/about.js'
    },
    output: {
        filename: '[name].bundle.js',
    },

    module: {
        rules : [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

module.exports = config;

```
подключение на странице
```html
        <script src="js/index.bundle.js"></script>
        <script src="js/contacts.bundle.js"></script>

```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>about</title>
        <link rel="stylesheet" href="css/main.css" />
    </head>
    <body>
        <h1>about</h1>
        @@include('./blocks/nav.html')
        <script src="js/about.bundle.js"></script>
    </body>
</html>
```

export import
  
**Экспорт из модуля:**

```js
// Модуль в файле math.js  // Экспорт функции 
export function add(a, b) {   return a + b; }  
// Экспорт переменной 
export const pi = 3.14159;

```
**Импорт в другом модуле:**
```js
	
// Импорт из файла math.js  
// Импорт функции и переменной 
import { add, pi } from './math.js';  
// Использование импортированных функции и переменной 
	console.log(add(2, 3)); 
// Вывод: 5 
console.log(pi); // Вывод: 3.14159`

```
Если у вас есть только один экспорт в модуле, вы также можете использовать `export default`:

**Экспорт с использованием `export default`:**
```js

// Модуль в файле math.js  
// Экспорт функции с использованием 
export default const multiply = (a, b) => a * b; 
export default multiply;

```
**Импорт с использованием `import` без фигурных скобок:**
```js


// Импорт из файла math.js  
// Импорт функции с использованием import без фигурных скобок 
import multiply from './math.js';  
// Использование импортированной функции 
console.log(multiply(2, 3)); // Вывод: 6
```

## Подключение npm пакета
npm i namePack -s (-s зависимости)
![[Pasted image 20240205195108.png]]![[Pasted image 20240205195147.png]]
![[Pasted image 20240205195226.png]]

## gulp image min( 7 версия)

npm i gulp-imagemin@7 --save-dev
```js
const imagemin = require("gulp-imagemin");

gulp.task("images", function () {
    return gulp.src("./src/img/**.*")
        .pipe(imagemin({verbose: true}))// <<<<
        .pipe(gulp.dest("./dist/img/"));
});
```

npm install --save-dev gulp-changed
        "gulp-changed": "^4.0.2",(работает в common)

const changed = require("gulp-changed");
```js
gulp.task("images", function () {
    return gulp.src("./src/img/**.*")
        .pipe(changed("./dist/img/"))// <<<
        .pipe(imagemin({verbose: true})) 
        .pipe(gulp.dest("./dist/img/"));
});

```

## gulp-sass-glob
	(импорт scss *)
```bash
npm install gulp-sass-glob --save-dev
```

```js
var sassGlob = require('gulp-sass-glob');
```

 важен пробел после @import 
```scss
@import "vars/**/*.scss";
@import "mixins/**/*.scss";
@import "generic/**/*.scss";
@import "../components/**/*.scss";
@import "../views/**/*.scss";
@import "../views/**/*something.scss";
@import "../views/**/all.scss";
```


## 2 версии
	