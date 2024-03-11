```css
.element { 
background: #f0f0f0 url('background.jpg') center center /
cover no-repeat; 
}

1. `background-color`: `#f0f0f0`
2. `background-image`: `url('background.jpg')`
3. `background-position`: `center center`
4. `background-size`: `cover`
5. `background-repeat`: `no-repeat`
```
```css
1. **`background-color`:** Устанавливает цвет фона.
2. **`background-image`:** Устанавливает изображение фона.
3. **`background-position`:** Устанавливает позицию фонового изображения.
4. **`background-size`:** Устанавливает масштабирование фонового изображения.
5. **`background-repeat`:** Устанавливает повторение фонового изображения.
6. **`background-attachment`:** Определяет, будет ли фоновое изображение прокручиваться вместе с содержимым или оставаться фиксированным.
7. **`background-origin`:** Определяет, откуда начинается позиционирование фонового изображения (например, от края контейнера или содержимого).
8. **`background-clip`:** Определяет, как обрезать фоновое изображение (например, отображать лишь внутри границ, внутри поля контента или внутри текста).
9. **`background`:** Сокращенная форма, которая включает в себя все вышеперечисленные свойства в определенном порядке.
```

 несколько изображений
```css
.par {
  width: 900px;
  height: 400px;
  border: 1px solid red;
  background:
    url('./test1.png') no-repeat center ,
    url('./test2.png') no-repeat ;
}

```
![[Pasted image 20240201115019.png]]