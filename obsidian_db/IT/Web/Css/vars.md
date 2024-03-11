  
Copy code
```css
:root {   
	--main-color: #3498db;   
	--secondary-color: #2ecc71;   
	--font-family: 'Arial', sans-serif;   
	--base-font-size: 16px; }
```
Здесь:

- `--main-color` и `--secondary-color` - это переменные для цветов.
- `--font-family` - переменная для шрифта.
- `--base-font-size` - переменная для базового размера шрифта.

### Использование переменных:
```css

body {   
	font-family: var(--font-family);   
	font-size: var(--base-font-size); 
}  
h1 {   
	color: var(--main-color); 
}  
a {   
	color: var(--secondary-color); 
}

```
### Изменение переменных в разных контекстах:

```css

/* Переопределение переменных для разных элементов или классов */ 
.element {   --main-color: #ff6347; }  
/* Изменение переменных в состояниях */ 
.button:hover {   --secondary-color: #e74c3c; }`

```
Переменные в CSS делают стилизацию более модульной и легкой для поддержки, поскольку они позволяют быстро изменять множество свойств, используя только несколько определений переменных