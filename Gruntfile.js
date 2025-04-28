module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      dev: {
        files: {
          'dist/styles.css': 'src/main.less'
        }
      }
    },
    uglify: {
      prod: {
        files: {
          'dist/app.min.js': ['src/**/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less:dev', 'uglify:prod']);
};
