# Gulp 4. Версия с Pug + SCSS
Стартовая сборка для Фронтенда

## Что включает в себя сборка?
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — автоматически расставляет вендорные префиксы в CSS в соответствии с сервисом [Can I Use](https://caniuse.com/);
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) — компиляция Pug в HTML;
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) - конкатенация файлов;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — компиляция SASS,SCSS в CSS;
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) — переименование файлов;
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) — создание карты sourcemap;
* [gulp-notify](https://www.npmjs.com/package/gulp-notify) — уведомление о событиях;
* [gulp-csso](https://www.npmjs.com/package/gulp-csso) — объединение дублирующихся классов;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) — отслеживание изменений в файлах проекта;
* [Browsersync](https://browsersync.io/docs/gulp) — автообновление браузера;
* [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite) — создание svg спрайта;
* [gulp-svgmin](https://www.npmjs.com/package/gulp-svgmin) — минификация SVG;
* [gulp-cheerio](https://www.npmjs.com/package/gulp-cheerio) — удаление лишних атрибутов из svg;
* [gulp-replace](https://www.npmjs.com/package/gulp-replace) — фиксинг возможных багов при сборке svg спрайта;



## Как пользоваться?

Установить ```Node JS```

Далее, используя ```cmd``` в Windows или Терминал Linux/macOS, проделайте следующие шаги:

* Скачать сборку: ```git clone https://github.com/Berzeg07/build_gulp4.git```;
* Ставим утилиту глобально ```$ npm install gulpjs/gulp-cli -g```;
* Устанавливаем ```Gulp 4``` в папку с проектом ```$ npm install gulp --save-dev```;
* Проверка версии gulp и чтобы убедиться, что все корректно установлено: ```gulp -
gulp -v```;

## Начало работы

* Устанавливаем пакеты из package.json: ```npm i```;
* Основная команда: ```gulp``` запускает слежку за файлами ```gulp-watch``` и ```browserSync```
* Сборка проекта: ```gulp-build``` проект собирается в папке ```build```
* В настройках таска ```browserSync``` можем указывать страницу с которой на данный момент работаем

```
module.exports = function() {
    $.gulp.task('serve', function() {
        $.bs.init({
            server: {
                baseDir: "./build",
                index: "page.html"
            }
        });
    });
}
```

## Структура сборки
* Работа ведется в папке: ```src```;
*  ```src/pug/layout/layout.pug``` основной шаблон проекта
*  ```src/pug/includes/*``` директория контентой части проекта и повторяющихся блоков сайта (header, footer), подключаем в нужном месте шаблона ```include ../includes/header```
*  ```src/pug/pages``` папка для всех страниц проекта. Главная страница index.pug с подключенным шаблоном ```layout.pug```, контентная часть разбита на три инклюда ```header, content-main, footer``` все страницы проекта создаются по аналогии
*  ```src/pug/includes/mixins.pug``` миксины pug
*  ```src/pug/includes/links.pug``` все подключения файлов в ```head```
*  ```src/pug/includes/footer.pug``` все подключения скриптов в блоке ```footer```
*  ```src/static/libs``` файлы библиотек


## Порядок установки нового плагина
* ```gulp/gonfig/tasks.js``` массив с установленными плагинами галпа;
* ```gulp/tasks/``` все таски разбиты на отдельные файлы и подключены в ```gulp/gonfig/tasks.js```;
* После установки нового плагина через ```npm``` необходимо добавить его в массив ```gulp/config/tasks.js```;
* Создать новый файл в ```gulp/tasks/``` с настройками плагина
* Добавить обработку плагина в ```gulp/tasks/watch.js```
* Добавить обработку плагина в ```gulpfile.js``` в таски ```default``` и ```build```

***
