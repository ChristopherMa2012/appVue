# appVue
vue+vuex+nodeJs+express+mongodb  
vuex将于项目完成后添加  

# 项目目录结构  
/client 为前端文件目录  
/server 为后台逻辑目录  
/screenShots 为项目页面截图 

# 运行方式  
**前端资源服务：**进入路径 /client,  在空白处shift + 右键打开命令行或者直接右键再点击 git bash(需要安装git)，输入命令npm start即可打开。  
**后台服务：**   
1、直接项目根目录下，打开命令行输入npm run build即可；  
2、使用vsCode调试时，新建launch.json后，可使用以下配置：  
```javascript  
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch via NPM",
            "preLaunchTask": "build",
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                "run-script",
                "debug"
            ],
            "port": 9229
        }
    ]
}  
```