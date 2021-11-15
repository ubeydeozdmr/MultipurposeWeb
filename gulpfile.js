var gulp = require("gulp");
var useref = require("gulp-useref");
var browserSync = require("browser-sync");

gulp.task("useref", function(){
    return gulp.src("./app/*.html")
    .pipe(useref())
    .pipe(gulp.dest("./dist/"))
});

gulp.task("start", function(){
    browserSync.init({
        server:{
            baseDir: "./dist/",
            middleware: function(req, res, next){
                res.setHeader("Access-Control-Allow-Origin","*");
                res.setHeader("Access-Control-Allow-Methods","*");
                next();
            }
        },
        cors: true
    });
    gulp.watch("./app/*.html", gulp.series("useref")).on("change", browserSync.reload);
});

gulp.task("default", gulp.series("start"));