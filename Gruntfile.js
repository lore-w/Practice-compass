module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		//grunt-browser-sync
		browserSync: {
		    bsFiles: {
		        src : ['*.html','css/main.css','**/*.js']
		    },
		    options: {
				server: {
					baseDir: "./",
					index: "index.html"
				},
	        	watchTask: true,
	        	open: true,
				browser: "chrome"
		    }
		},
		//
		compass: {
			dist: {
				options: {
					config: 'config.rb',
					sourcemap: true
				}
			}
		},
		//grunt-contrib-watch
		watch:{	
		    configFiles: {
		    	files: ['Gruntfile.js','package.json'],
		    	options: {
		    		reload: true
		    	}
		    },
			css: {
				files: ['**/*.scss'],
				tasks: ['compass']
			}
		}
	});
	grunt.registerTask('w',['browserSync','watch']);
};