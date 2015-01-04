module.exports = function(grunt){
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        
        uglify: {
            dist:{
                files:{
                    "dist/js/jquery.scrolluptotop.min.js":["src/js/jquery.scrolluptotop.js"]
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/css/jquery.scrolluptotop.min.css': ['src/css/jquery.scrolluptotop.css']
                }
            }
        }
        
    });
    
    grunt.registerTask('default',['uglify','cssmin']);
}