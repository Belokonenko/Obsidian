3 способа загруски скриптов

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script async src="script.js"></script>
    <script async src="script1.js"></script>
    <script async src="script2.js"></script>
    //асинхроно загрузит код как только будит загружен запустится
    //сработает как только загрузится
    //использовоать для скриптов не завиисимых от других или контената
    //(счетчики посещений)
    
    <script defer src="script2.js"></script>
    //загрузка в указанном порядке и включение после загрузки html 
</head>
<body>
    
</body>
</html>

```

## 2
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer src="script0.js"></script>
    <script defer src="script2.js"></script>
    <script defer src="script2.js"></script>
    //загрузка в указанном порядке и включение после загрузки html 
</head>
<body>
    
</body>
</html>

```


## 3
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script defer src="script0.js"></script>
</body>
</html>

```

```js
'use strict'
	const script = document.createElement('script');
	script.src = './script2.js';
	script.async = false;
	document.body.append(script);
```