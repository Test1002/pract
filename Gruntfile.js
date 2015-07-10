module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            main: {
                src: [

                    'app.js',
                   // "**/*/.js",
                    //"!**/node_modules/**"
                    'node_modules/express/**/*.js'

                ],
                dest: 'build/scripts.js'
            }
        },
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
       /* jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [ {
                    src: "vies/index.jade",
                    dest: "build/templates/",
                    ext: "html",
                    cwd: "source/templates/"
                } ]
            }
        },
        */


        uglify: {
            main: {
                files: {
                    'build/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks('grunt-contrib-uglify');



    grunt.registerTask('default', ['concat', 'jade']);
};