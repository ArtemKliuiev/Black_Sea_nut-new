"use strict";

const { src, dest, series, parallel, watch } = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require("gulp-strip-css-comments");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify-es").default;
const plumber = require("gulp-plumber");
const panini = require("panini");
const del = require("del");
const notify = require("gulp-notify");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const browserSync = require("browser-sync").create();
const webp = require("gulp-webp");
const htmlmin = require("gulp-htmlmin"); // Добавленный плагин

/* Paths */
const srcPath = "src/";
const distPath = "dist/";

const path = {
  build: {
    html: "dist/",
    js: "dist/assets/js/",
    css: "dist/assets/css/",
    images: "dist/assets/images/",
    fonts: "dist/assets/fonts/",
    videos: "dist/assets/video/",
  },
  src: {
    html: [
      "src/*.html",
      "src/personal-area/**/*.html",
      "src/basket/**/*.html",
    ],
    js: "src/assets/js/*.js",
    css: "src/assets/scss/**/*.scss",
    images:
      "src/assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
    fonts: "src/assets/fonts/**/*",
    videos: "src/assets/video/**/*",
  },
  watch: {
    html: "src/**/*.html",
    js: "src/assets/js/**/*.js",
    css: "src/assets/scss/**/*.scss",
    images:
      "src/assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
    fonts: "src/assets/fonts/**/*",
    videos: "src/assets/video/**/*",
  },
  clean: "./dist/",
};

/* Tasks */

function convertToWebP() {
  return src(path.src.images)
    .pipe(webp())
    .pipe(dest(path.build.images))
    .pipe(browserSync.reload({ stream: true }));
}

function serve() {
  browserSync.init({
    server: {
      baseDir: "./" + distPath,
    },
  });
}

function html() {
  panini.refresh();
  return src(path.src.html, { base: srcPath })
    .pipe(plumber())
    // .pipe(panini({
    //   root: srcPath,
    //   layouts: srcPath + 'layouts/',
    //   partials: srcPath + 'partials/',
    //   helpers: srcPath + 'helpers/',
    //   data: srcPath + 'data/'
    // }))
    .pipe(dest(path.build.html))
    .pipe(browserSync.reload({ stream: true }));
}

function css() {
  return src(path.src.css, { base: srcPath + "assets/scss/" })
    .pipe(
      plumber({
        errorHandler: function (err) {
          notify.onError({
            title: "SCSS Error",
            message: "Error: <%= error.message %>",
          })(err);
          this.emit("end");
        },
      })
    )
    .pipe(sass({ includePaths: "./node_modules/" }))
    .pipe(autoprefixer({ cascade: true }))
    .pipe(cssbeautify())
    .pipe(dest(path.build.css))
    .pipe(
      cssnano({
        zindex: false,
        discardComments: {
          removeAll: true,
        },
      })
    )
    .pipe(removeComments())
    .pipe(
      rename({
        suffix: ".min",
        extname: ".css",
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browserSync.reload({ stream: true }));
}

function cssWatch() {
  return src(path.src.css, { base: srcPath + "assets/scss/" })
    .pipe(
      plumber({
        errorHandler: function (err) {
          notify.onError({
            title: "SCSS Error",
            message: "Error: <%= error.message %>",
          })(err);
          this.emit("end");
        },
      })
    )
    .pipe(sass({ includePaths: "./node_modules/" }))
    .pipe(
      rename({
        suffix: ".min",
        extname: ".css",
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browserSync.reload({ stream: true }))
    .on("end", browserSync.reload);
}

function js() {
  return src(path.src.js, { base: srcPath + "assets/js/" })
    .pipe(uglify())
    .pipe(dest(path.build.js))
    .pipe(browserSync.reload({ stream: true }));
}

function jsWatch() {
  return watch(path.src.js, series(js));
}

function images() {
  return src(path.src.images)
    .pipe(dest(path.build.images))
    .pipe(browserSync.reload({ stream: true }));
}

function fonts() {
  return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
    .pipe(browserSync.reload({ stream: true }));
}

function videos() {
  return src(path.src.videos)
    .pipe(dest(path.build.videos))
    .pipe(browserSync.reload({ stream: true }));
}

function clean() {
  return del(path.clean);
}

function watchFiles() {
  watch([path.watch.html], html);
  watch([path.watch.css], cssWatch);
  watch([path.watch.js], js);
  watch([path.watch.images], images);
  watch([path.watch.fonts], fonts);
  watch([path.watch.videos], videos);
}

function htmlMinify() {
  return src(path.build.html + "*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(path.build.html))
    .pipe(browserSync.reload({ stream: true }));
}

const build = series(
  clean,
  parallel(html, css, js, images, fonts, videos),
  htmlMinify
);
const dev = parallel(build, watchFiles, serve);

/* Exports Tasks */
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.videos = videos;
exports.clean = clean;
exports.build = build;
exports.default = dev;
exports.convertToWebP = convertToWebP;
exports.htmlMinify = htmlMinify;
