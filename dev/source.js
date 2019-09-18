//配置静态资源文件名后缀
var source = {
    html:{
        err404:'/views',
        errPause:"/views"
    },
    static:{
        extension:['js','css','png'],
        path:'/public',
    },
    download:{
        extension:['rar','mv','mp4'],
        path:'/public/down',
    }
    
}
    


exports.source = source;