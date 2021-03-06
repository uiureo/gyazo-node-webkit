module.exports = function (grunt) {
  grunt.initConfig({
    nodewebkit: {
      options: {
        build_dir: './builds',
        mac: true,
        win: false,
        linux32: false,
        linux64: false
      },
      src: ['./**']
    }
  })

  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('build', ['nodewebkit'])
}
