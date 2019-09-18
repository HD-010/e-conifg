/**
 * 布局文件配置
 */
var layouter = {
    //项目名称：snow
    admin:{
        //定义布局文件名称（不加文件后缀名）
        layout:['main_admin'],   
        /**
         * 布局文件名称：
         * 1、指定当前使用的布局文件
         * 2、指定返回布局文件名称的函数（函数需要在sysFunc中定义）
         *  */
        used:'main_admin',                            
    },

    pc:{
        //定义可用的布局文件名称（不加文件后缀名）
        layout:['main_pc'],   
        /**
         * 指定正在使用的布局文件名称：
         * 1、指定当前使用的布局文件
         * 2、指定返回布局文件名称的函数（函数需要在sysFunc中定义）
         *  */
        used:'main_pc', 
    },
	
	m:{
        //定义可用的布局文件名称（不加文件后缀名）
        layout:['main_m'],   
        /**
         * 指定正在使用的布局文件名称：
         * 1、指定当前使用的布局文件
         * 2、指定返回布局文件名称的函数（函数需要在sysFunc中定义）
         *  */
        used:'main_m', 
    }

}

exports.layouter = layouter;