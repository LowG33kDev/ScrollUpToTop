module.exports = function(grunt){
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        
        uglify: {
            dist:{
                files:{
                    "dist/jquery.scrolluptotop.min.js":["src/jquery.scrolluptotop.js"]
                }
            }
        },
        copy: {
            dist: {
                src: 'src/css/*',
                dest: 'dist/css/',
            }
        }
        
    });
    
    grunt.registerTask('default',['uglify','copy']);
}