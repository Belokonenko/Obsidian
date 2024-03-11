правила анимации ключевых кадров


 @keyframes  -  директива
myAnimation - nameAnimation

![[Pasted image 20240203111310.png]] группы правил
![[Pasted image 20240203111510.png]]

![[Pasted image 20240203112149.png]]
```html 
<!DOCTYPE html>
  <style>
    .animated-element {
      width: 100px;
      height: 100px;
      background-color: blue;
      animation: myAnimation 2s ease-in-out infinite;
    }

    @keyframes myAnimation {
      0% { transform: scale(1); background-color: blue; }
      50% { transform: scale(1.5); background-color: red; }
      100% { transform: scale(1); background-color: blue; }
    }
  </style>

<body>
  <div class="animated-element"></div>
</body>

```

```css
1. **`animation-name`:**
    
    - **Описание:** Устанавливает имя анимации, определенное в `@keyframes`.
    - **Пример:** `animation-name: slideIn;`
2. **`animation-duration`:**
    
    - **Описание:** Задает длительность анимации в секундах или миллисекундах.
    - **Пример:** `animation-duration: 2s;`
3. **`animation-timing-function`:**
    
    - **Описание:** Определяет функцию распределения времени, которая контролирует изменение скорости анимации.
    - **Пример:** `animation-timing-function: ease-in-out;`
4. **`animation-delay`:**
    
    - **Описание:** Задает задержку перед началом анимации. Положительные значения откладывают начало, отрицательные - уменьшают.
    - **Пример:** `animation-delay: 0.5s;`
5. **`animation-iteration-count`:**
    
    - **Описание:** Определяет количество повторений анимации. `infinite` для бесконечного повторения.
    - **Пример:** `animation-iteration-count: 3;`
6. **`animation-direction`:**
    
    - **Описание:** Задает направление анимации (вперед, назад или вперед и назад).
    - **Пример:** `animation-direction: alternate;`
7. **`animation-fill-mode`:**
    
    - **Описание:** Определяет, как стили применяются до и после выполнения анимации.
    - **Пример:** `animation-fill-mode: forwards;`
8. **`animation-play-state`:**
    
    - **Описание:** Определяет, должна ли анимация воспроизводиться или быть приостановленной.
    - **Пример:** `animation-play-state: paused;`
9. **`animation`:**
    
    - **Описание:** Сокращенное свойство для задания всех параметров анимации в одной строке.
    - **Пример:** `animation: slideIn 2s ease-in-out 0.5s infinite alternate forwards paused;`
    - 
```