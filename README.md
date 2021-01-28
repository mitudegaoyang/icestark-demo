# icestark-demo

## 1、目录结构

```text
icestark-demo
├─node_modules              # 公共依赖文件
├─.gitignore                # 忽略文件
├─README.md                 # 项目介绍
├─package.json              # 项目依赖
├─packages                  # 项目文件
|    ├─icestark-layout      # 基座
|    |    ├─node_modules    # 子项目依赖文件
|    ├─icestark-child-icejs # icejs创建子项目
|    ├─icestark-child-react # creat-react-app创建子项目
|    ├─icestark-child-vue   # vue cli创建子项目
```

## 2、安装依赖

```shell
yarn 
```

## 3、运行项目

```shell
yarn workspace [sub-project-name] start
```
