


var gulp 					= require('gulp'),
		browserSync 		= require('browser-sync'),
		sass 						= require('gulp-sass'),
		concat					= require('gulp-concat'),
		uglify					= require('gulp-uglifyjs'),
		cssnano					= require('gulp-cssnano'),
		rename					= require('gulp-rename'),
		autoprefixer		= require('gulp-autoprefixer');
		
var app = "app";





// SASS
gulp.task('sass', (done)=>{
		gulp
			.src( app+'/scss/**/*.+(scss|sass)')
			.pipe( sass().on('error', sass.logError) )
			.pipe(autoprefixer({overrideBrowserslist: 'last 2 versions', cascade: false} ))
			.pipe( gulp.dest(app+'/css/') )
			.pipe( browserSync.reload({stream:true}) );
		done();
	}
);


// SCRIPTS
gulp.task('scripts', ()=>{
	return gulp.src([
			app+'/js/plugins/jquery.min.js',
			//app+'/js/plugins/jquery-ui.js',
			//app+'/js/plugins/skrollr.min.js',
			//app+'/js/plugins/smoothscroll.js',
			app+'/js/plugins/bootstrap.min.js',
			//app+'/js/plugins/howler.js', 
			//app+'/js/plugins/TweenMax.min.js',
			//app+'/js/plugins/EasePack.min.js', 
			//app+'/js/plugins/TextPlugin.min.js',
			//app+'/js/plugins/konva.min.js',
			//app+'/js/plugins/KonvaPlugin.js',
			//app+'/js/plugins/jquery.fractionslider.js',
			//app+'/js/plugins/pana-accordion.js',
			//app+'/js/plugins/jquery.vi.js',
			app+'/js/plugins/aos.js',
			//app+'/js/plugins/wow.js',
			app+'/js/plugins/owl.carousel.min.js',
			app+'/js/plugins/jquery.fancybox.js',
			//app+'/js/plugins/jquery.jcarousel.js',
			//app+'/js/plugins/classie.js',
			//app+'/js/plugins/masonry.pkgd.min.js',
			app+'/js/plugins/select2.min.js',
			//app+'/js/plugins/jquery.elevateZoom.min.js',
			app+'/js/plugins/jquery.mmenu.all.js',
			app+'/js/plugins/smooth-scroll.js',
			app+'/js/plugins/ion.rangeSlider.min.js',
			app+'/js/plugins/ResizeSensor.min.js',
			app+'/js/plugins/theia-sticky-sidebar.min.js',
			app+'/js/plugins/swiper-bundle.min.js',
			//app+'/js/plugins/parallax-mouse.js',
			//app+'/js/plugins/parallax.js',
			app+'/js/plugins/flickity.js'
		])
		.pipe( concat('scripts.min.js') )
		.pipe( uglify() )
		.pipe( gulp.dest(app+'/js/') ); //js default
	}
);

// STYLES
gulp.task('cssnano', ()=>{
		return gulp.src(app+'/css/main.css')
		.pipe( cssnano({ reduceIdents :  false }) )
		.pipe(rename({suffix: '.min'}) )
		.pipe( gulp.dest(app+'/css/') ); //css default
	}
);

// RELOADER BROWSER
gulp.task('browser-sync', (done)=>{
		browserSync({
			server: {baseDir: app+''},
			//proxy: "http://taf/",
			notify: false
		});
		done();
	}
);
gulp.task('watch', (done)=>{
		//gulp.task('default', gulp.series('watch', 'sass', 'browser-sync'));
		gulp.watch(app+'/scss/**/*.+(scss|sass)', gulp.parallel('sass'));
		gulp.watch(app+'/*.html').on("change", browserSync.reload);
		gulp.watch(app+'/**/*.php', browserSync.reload);
		gulp.watch(app+'/templates/**/*.tpl', browserSync.reload);
		gulp.watch(app+'/js/**/*.js', browserSync.reload);
		done();
	}
);


//gulp.task('default', gulp.series('watch', 'sass'));
gulp.task('watch', gulp.series('watch','browser-sync', 'scripts'));

