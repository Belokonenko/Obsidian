 googl > npm json-server
https://www.npmjs.com/package/json-server
---
1. npm i -D json-server   (установка как --save-dev (только для разроботки))

3. создать файл db.json
```json

{
  "posts": [
    { 
    "id": 1, 
    "title": "json-server", 
    "author": "typicode" 
    }
  ],
  
  "comments": [
	    { 
	    "id": 1, 
	    "body": "some comment", 
	    "postId": 1 
	    }
  ],
  
  "profile": { "name": "typicode" }
}
```

3. npx json-сервер --watch db.json 

4. Проверка перейти по сылкам из терминала (ctr+click-muse);
