FORMAT: 1A
HOST: http://location:3001/api/

# Api Document

koa demo api blueprint

## Group 用户模块

这里是用户模块CURD的接口: 创建、查看、修改、删除

## 用户对象属性: [/users{?page}]

+ _id: 用户的ID
+ username: 用户名/账号
+ password: 登陆密码

+ Parameters
    + page: 1 (optional, number) - 查询页码(可选)

### 用户列表 [GET]

+ Response 200 (application/json)

    + Body

        {
            "message": "获取成功",
            "retData": [
                {
                    "_id":"58b4e4c524a82d2e7c7125e3",
                    "username":"Mason123",
                    "password":"$2a$10$FmJL1nEkXuyXZZSDS5f26.88mMJuJtmLMq0tVpAhdN1uSiSiiFFci",
                    "__v":0
                }, {
                    "_id":"58b4e4c524a82d2e7c7125e3",
                    "username":"Mason123",
                    "password":"$2a$10$FmJL1nEkXuyXZZSDS5f26.88mMJuJtmLMq0tVpAhdN1uSiSiiFFci",
                    "__v":0
                }, {
                    "_id":"58b4e4c524a82d2e7c7125e3",
                    "username":"Mason123",
                    "password":"$2a$10$FmJL1nEkXuyXZZSDS5f26.88mMJuJtmLMq0tVpAhdN1uSiSiiFFci",
                    "__v":0
                }
            ]
        }

## 注册用户 [/users]

+ Parameters
    + username: Masonz (required, string) - 用户名(必填),长度在6到20位之间
    + password: 12345678 (required, number) - 用户密码(必填),长度在8到20位之间

### 注册用户 [POST]

创建一个新的用户

+ Response 200 (application/json)

    + Body

        {
            "message": "注册成功",
            "retData": 
                {
                    "_id":"58b4e4c524a82d2e7c7125e3",
                    "username":"Mason123",
                    "password":"$2a$10$FmJL1nEkXuyXZZSDS5f26.88mMJuJtmLMq0tVpAhdN1uSiSiiFFci",
                    "__v":0
                }
            
        }


## 用户登录 [/users]

+ Parameters
    + username: Masonz (required, string) - 用户名(必填),长度在6到20位之间
    + password: 12345678 (required, number) - 用户密码(必填),长度在8到20位之间

### 用户登录 [POST]

用户进行登陆,并获取token

+ Response 200 (application/json)

    + Body

        {
            "message": "登陆成功",
            "retData": 
                {
                    "_id":"58b4e4c524a82d2e7c7125e3",
                    "username":"Mason123",
                    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE0ODg0NDU0OTcsImV4cCI6MTQ4ODYxODI5N30.lrF09oEYFvxaf8b1rMnes8y-m-fuC4nYZBY6O_BpD-A"
                }
            
        }


+ Response 405 (application/json)

    + Body

        {
            "message": "登陆失败",
            "retData": null
        }

