module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint'],
            options: {
                livereload: true
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    livereload: true,
                    base: './'
                }
            }
        },
        'gh-pages': {
            options: {
                base: './'
            },
            src: ['**']
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('default', ['connect', 'watch']);

};