ALL_TASKS = ['uglify'];
module.exports = function(grunt) {

    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'app.js',
        dest: 'build/app.min.js'
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.registerTask('default', ALL_TASKS);
};