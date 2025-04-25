module.exports = function(grunt) {
    // 1) Inicializa a configuração
    grunt.initConfig({
      // 2) Compilação do LESS
      less: {
        dev: {
          files: {
            // destino        origem
            'dist/styles.css': 'src/main.less'
          }
        }
      },
      // 3) Compressão de JS
      uglify: {
        prod: {
          files: {
            // destino         origem (pode ser array ou wildcard)
            'dist/app.min.js': ['src/**/*.js']
          }
        }
      }
    });
  
    // Carrega os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Tarefa padrão: basta rodar `grunt` para fazer tudo
    grunt.registerTask('default', ['less:dev', 'uglify:prod']);
  };
  