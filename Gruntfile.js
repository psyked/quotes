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
        },
        nightwatch: {
            options: {
                // task options
                standalone: true,

                // download settings
                jar_version: '2.53.0',
                // jar_path: '../nightwatch/selenium-server-standalone-2.53.0.jar',
                jar_url: '	http://selenium-release.storage.googleapis.com/2.53/selenium-server-standalone-2.53.0.jar',
                src_folders: ['../nightwatch/tests'],
                test_settings: {
                    // phantom: {
                    //     "desiredCapabilities": {
                    //         "browserName": "phantomjs",
                    //         "javascriptEnabled": true,
                    //         "acceptSslCerts": true,
                    //         "phantomjs.binary.path": "../nightwatch/phantomjs.exe"
                    //     }
                    // },
                    firefox: {
                        "desiredCapabilities": {
                            "browserName": "firefox"
                        }
                    },
                    // chrome: {
                    //     "desiredCapabilities": {
                    //         "browserName": "chrome"
                    //     },
                    //     "cli_args" : {
                    //         "webdriver.chrome.driver" : "../nightwatch/chromedriver.exe"
                    //     }
                    // }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-real-favicon');
    grunt.loadNpmTasks('grunt-nightwatch');

    grunt.registerTask('default', ['connect', 'watch']);

};