{
    //baseUrl: '../www/js/',
    appDir: '../www',
    baseUrl: './js',
    mainConfigFile: '../www/js/common.js',
    dir: '../www-built/',
    //paths:['js/libs/jquery'],
    //optimize:'uglify',
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: 'common',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: ['../js/lib/jquery',
                      '../js/app/lib',
                      '../js/app/controller/Base',
                      '../js/app/model/Base'
            ]
        },

        //Now set up a build layer for each page, but exclude
        //the common one. "exclude" will exclude
        //the nested, built dependencies from "common". Any
        //"exclude" that includes built modules should be
        //listed before the build layer that wants to exclude it.
        //"include" the appropriate "app/main*" module since by default
        //it will not get added to the build since it is loaded by a nested
        //requirejs in the page*.js files.
        {
            //module names are relative to baseUrl/paths config
            name: 'page1',
            include: ['../js/app/main1'],
            exclude: ['common']
        },

        {
            //module names are relative to baseUrl
            name: 'page2',
            include: ['../js/app/main2'],
            exclude: ['common']
        }

    ]
}
