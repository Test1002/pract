ALL_TASKS = ['jade', 'express:dev', 'watch', 'connect',];
module.exports = function(grunt) {

    grunt.initConfig({
        jade: {
            main: {
                src: [
                    'views/*.jade'
                ],
                dest: 'build/',
                expand: true,
                ext: ".html"
            }
        },
        connect: {
            server: {
                options: {

                }
            }

        },

        watch: {
            express: {
                files:  [
                    'views/**/*.jade',
                    'public/**/*.css'
                ],
                tasks:  ALL_TASKS,
                options: {

                    spawn: false
                }
            }
        },

        uglify: {
            main: {
                files: {
                    'build/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        },
        express: {
            dev:{
                options: {
                    port: 1337,
                    script: 'app.js'
                }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-connect')
    grunt.loadNpmTasks('grunt-contrib-watch' );




    grunt.registerTask('default', ALL_TASKS);
};