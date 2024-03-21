
export import
  
**Экспорт из модуля:**

```js
// Модуль в файле math.js  // Экспорт функции 
export function add(a, b) {   return a + b; }  
// Экспорт переменной 
export const pi = 3.14159;

```
**Импорт в другом модуле:**
```js
	
// Импорт из файла math.js  
// Импорт функции и переменной 
import { add, pi } from './math.js';  
// Использование импортированных функции и переменной 
	console.log(add(2, 3)); 
// Вывод: 5 
console.log(pi); // Вывод: 3.14159`

```
Если у вас есть только один экспорт в модуле, вы также можете использовать `export default`:

**Экспорт с использованием `export default`:**
```js

// Модуль в файле math.js  
// Экспорт функции с использованием 
export default const multiply = (a, b) => a * b; 
export default multiply;

```
**Импорт с использованием `import` без фигурных скобок:**
```js


// Импорт из файла math.js  
// Импорт функции с использованием import без фигурных скобок 
import multiply from './math.js';  
// Использование импортированной функции 
console.log(multiply(2, 3)); // Вывод: 6
```

