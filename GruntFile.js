module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      compile: {
        options: {
          loadPath: [
            'bower_components/bourbon/dist',
            'bower_components/inuit.css'
          ],
          style: 'compressed',
        },
        files: {
          'css/styles.css':'css/scss/styles.scss'
        }
      }
    },
    cssmetrics: {
      common: {
        src: ['css/styles.css'],
        options: {
          quiet: false,
          maxRules: 4096, //IE max rules
          maxFileSize: 1048576 //1mb in bytes
        }
      }
    },
    watch: {
      grunt: { files: ['GruntFile.js'] },
      sass: {
        files: 'css/scss/*.scss',
        tasks: ['sass:compile']
      }
    }
  });
  grunt.loadNpmTasks('grunt-css-metrics');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('analyse', ['cssmetrics:common']);
  grunt.registerTask('compile', ['sass:compile']);
  grunt.registerTask('default', ['compile','analyse']);
}