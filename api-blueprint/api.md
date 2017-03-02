FORMAT: 1A
HOST: http://location:3001/api/

# Koa Demo Api

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
            "url": "/users",
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

## Choice [/users/{question_id}/choices/{choice_id}]

+ Parameters
    + question_id: 1 (required, number) - ID of the Question in form of an integer
    + choice_id: 1 (required, number) - ID of the Choice in form of an integer

### Vote on a Choice [POST]

This action allows you to vote on a question's choice.

+ Response 201

    + Headers

            Location: /questions/1

## Questions Collection [/questions{?page}]

+ Parameters
    + page: 1 (optional, number) - The page of questions to return

### List All Questions [GET]

+ Response 200 (application/json)

    + Headers

            Link: </questions?page=2>; rel="next"

    + Body

            [
                {
                    "question": "Favourite programming language?",
                    "published_at": "2014-11-11T08:40:51.620Z",
                    "url": "/questions/1",
                    "choices": [
                        {
                            "choice": "Swift",
                            "url": "/questions/1/choices/1",
                            "votes": 2048
                        }, {
                            "choice": "Python",
                            "url": "/questions/1/choices/2",
                            "votes": 1024
                        }, {
                            "choice": "Objective-C",
                            "url": "/questions/1/choices/3",
                            "votes": 512
                        }, {
                            "choice": "Ruby",
                            "url": "/questions/1/choices/4",
                            "votes": 256
                        }
                    ]
                }
            ]

### Create a New Question [POST]

You may create your own question using this action. It takes a JSON object containing a question and a collection of answers in the form of choices.

+ question (string) - The question
+ choices (array[string]) - A collection of choices.

+ Request (application/json)

        {
            "question": "Favourite programming language?",
            "choices": [
                "Swift",
                "Python",
                "Objective-C",
                "Ruby"
            ]
        }

+ Response 201 (application/json)

    + Headers

            Location: /questions/2

    + Body

            {
                "question": "Favourite programming language?",
                "published_at": "2014-11-11T08:40:51.620Z",
                "url": "/questions/2",
                "choices": [
                    {
                        "choice": "Swift",
                        "url": "/questions/2/choices/1",
                        "votes": 0
                    }, {
                        "choice": "Python",
                        "url": "/questions/2/choices/2",
                        "votes": 0
                    }, {
                        "choice": "Objective-C",
                        "url": "/questions/2/choices/3",
                        "votes": 0
                    }, {
                        "choice": "Ruby",
                        "url": "/questions/2/choices/4",
                        "votes": 0
                    }
                ]
            }