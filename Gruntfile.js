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
            src: ['index.html', 'quotes.json', 'android-chrome*', 'apple-touch*', 'favicon*', 'mstile*', 'browserconfig.xml', 'manifest.json', 'safari-pinned-tab.svg']
        },
        realFavicon: {
            favicons: {
                src: 'favicon-source.png',
                dest: './',
                options: {
                    iconsPath: '/',
                    html: ['index.html'],
                    design: {
                        ios: {
                            pictureAspect: 'noChange'
                        },
                        desktopBrowser: {},
                        windows: {
                            pictureAspect: 'noChange',
                            backgroundColor: '#da532c',
                            onConflict: 'override'
                        },
                        androidChrome: {
                            pictureAspect: 'noChange',
                            themeColor: '#ffffff',
                            manifest: {
                                name: 'Quotes',
                                display: 'browser',
                                orientation: 'notSet',
                                onConflict: 'override',
                                declared: true
                            }
                        },
                        safariPinnedTab: {
                            pictureAspect: 'blackAndWhite',
                            threshold: 50,
                            themeColor: '#5bbad5'
                        }
                    },
                    settings: {
                        scalingAlgorithm: 'Mitchell',
                        errorOnImageTooSmall: false
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-real-favicon');

    grunt.registerTask('default', ['connect', 'watch']);

};