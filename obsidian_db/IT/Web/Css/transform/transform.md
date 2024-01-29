- это CSS свойство, которое позволяет применять 2D и 3D трансформации к элементам. Это свойство позволяет изменять размеры, поворачивать, наклонять и перемещать элементы, создавая разнообразные эффекты и анимации. Вот несколько основных видов трансформаций, которые можно применять с помо### Примеры 2D трансформаций:
```css
.box {
	transform: none
}
```

transform - не влияет на эл. в потоке
			![[Pasted image 20240129092821.png]]
=======================
![[Pasted image 20240129092933.png]]
1 -  x
2 - y
			![[Pasted image 20240129093025.png]]
=========================

1. **Перемещение (Translate):**
    
```css
    transform: translate(50px, 20px);
``` 
    
2. **Поворот (Rotate):**
```css
    `transform: rotate(45deg);`
```    
    
3. **Масштабирование (Scale):**
```css
    transform: scale(1.5, 0.8);
    transform: scale(1)//по умолчанию
    transform: scale(0)//исчезнит
    transform: scale(2)//x2
    transform: scale(1)

``` 
	scaleX(любое чесло без ед.измерения)
	
	![[Pasted image 20240129093628.png]]![[Pasted image 20240129093701.png|200]]
    ![[Pasted image 20240129093830.png]]![[Pasted image 20240129093844.png|200]]
    ![[Pasted image 20240129093928.png]]![[Pasted image 20240129093945.png]]
	![[Pasted image 20240129094126.png]]![[Pasted image 20240129094136.png|200]]

![[Pasted image 20240129094325.png]]![[Pasted image 20240129094341.png]]

1. **Наклон (Skew):**
2. (искажение эл)
```css
    transform: skew(30deg, 20deg);
    transform: skewX(30deg);
    transform: skewY(20deg);
``` 
    ![[Pasted image 20240129100209.png|200]]![[Pasted image 20240129100120.png]]![[Pasted image 20240129100141.png]]
    

### Примеры 3D трансформаций:

1. **3D Перемещение (Translate):**
```css
    `transform: translate3d(50px, 20px, 10px);`
``` 
    
2. **3D Поворот (Rotate):**
```css
transform: rotateX(45deg) rotateY(30deg) rotateZ(20deg);
``` 
![[Pasted image 20240129095815.png]]![[Pasted image 20240129095827.png]]


![[Pasted image 20240129095630.png]]![[Pasted image 20240129095711.png]] 
полный поворот




1. **3D Масштабирование (Scale):**
   ```css
    transform: scale3d(1.5, 0.8, 2);
``` 

### Комбинированные трансформации:

Можно комбинировать различные трансформации в одном правиле `transform`. Например:
```css
transform: translate(50px, 20px) rotate(45deg) scale(1.5);
```


### Применение к элементам в реальном времени:
```css
.transition {
   transition: transform 0.3s ease-in-out;
}

.element:hover {
   transform: scale(1.2);
}

```

3- отдельных свойства
	![[Pasted image 20240129100508.png]]![[Pasted image 20240129100416.png]]


## Transform-origin : 
- устанавливает точку вращения или центральную точку для применения трансформаций элемента. 
- 
- Это свойство определяет, относительно какой точки происходит трансформация элемента при использовании свойства `transform`.

### Синтаксис:

```css
.box {
	transform-origin: x-axis y-axis z-axis;
}
```

- `x-axis`, `y-axis` и `z-axis` 
- могут быть значениями в процентах,  пикселях или других единицах измерения. 
- Они указывают положение точки отсчета для трансформации.

### Примеры:

```css
1. **Центр элемента:**
    `transform-origin: center;`

2. **Верхний левый угол элемента:**
    `transform-origin: top left;`

3. **Правый центр элемента:**
    `transform-origin: right center;`

4. **Задание точки в пикселях:**
    `transform-origin: 50px 100px;`

5. **Задание точки в процентах:**
    `transform-origin: 50% 20%;`
```    
    
    
### Пример использования с `transform`:
```css
.element {    
	transform-origin: 50% 50%; /* Центр элемента */    
	transform: rotate(45deg); 
}
```
![[Pasted image 20240129101809.png]]
В этом примере элемент будет вращаться относительно своего центра.
![[Pasted image 20240129101940.png]]
### Примечание:

- `transform-origin` по умолчанию установлен в `50% 50% 0`, что означает центр элемента. Если используется 2D трансформация, то третье значение (`z-axis`) по умолчанию будет `0`.
- Для 3D трансформаций, `transform-origin` может принимать третий аргумент для координаты по оси Z.
