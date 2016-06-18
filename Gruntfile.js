module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            files: ['index.html'],
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
            src: ['index.html', 'quotes.json']
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('default', ['connect', 'watch']);

};