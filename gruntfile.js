module.exports = function (grunt) {

	grunt.initConfig({
		//SASS
		sass: {
			dist: {
				files: {
					'css/style.css': 'sass/style.scss'
				}
			}
		},

		//		WATCH
		watch: {
			styles: {
				files: ['sass/**/*.scss', "css/*.css"],
				tasks: ['sass'],
				options: {
					spawn: false,
				},
			},
		},
		browserSync: {
			bsFiles: {
				src: ['css/*.css', "**/*.*"]
			},
			options: {
				watchtask: false,
				server: {
					baseDir: "./"
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

};
