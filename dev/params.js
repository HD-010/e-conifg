var params = {
    server : {
        port: '3005',
        ip  : '127.0.0.1'
    },
    //系统根目录
    root: '/app',
    //默认路由
    defaultRouter: ['admin','index','index'],
    //控制器目录
    controlDir: '/controlers',
    //服务类目录
    serviceDir: '/services',
    //模型类目录
    modelDir: '/models',

    //资源目录(上传图片，音乐，视频等文件的根目录)
    sourceDir: '/public',
    //小部件目录
    widgets: '/views/widgets',
    //DEV接口服务地址
    apiHost : [
        'http://127.0.0.1:3005',
        'http://127.0.0.1:3006',
    ],
}

exports.params = params;