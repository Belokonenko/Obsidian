# Flex

## флексбокс лейаут - гибкая сетка
display : flex
![[Pasted image 20240120235003.png]]


## Направление осей флекс-контейнера (flex-direction) 
[[Flex-derection.jpg]]
![[Pasted image 20240120235948.png]]

![[Flex-derection 1.jpg]]

## Дочерние эл.
 Стремяться уместиться в один ряд
![[Pasted image 20240121000536.png]]
## heght эл по умолчанию 
если  y эл не указан  heght  то растаянет на всю высоту 
![[Pasted image 20240121033912.png]]
```css
.container {
    display: flex;
    /* flex-wrap: wrap; */
    gap: 10px;
    height: 200px;
    background-color: lightskyblue;
}
.element {
    width: 200px;
    /* height: 100px; */
    padding: 10px;
    background-color: lightgreen;
    
    /* align-content: stretch; */ /*по умолчанию*/
}

``` 
```html
        <div class="container">
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
        </div>

```
## Свойство flex-flow
![[Flex_flex-flow 1.jpg]]
```css
/* flex-flow: <'flex-direction'> and <'flex-wrap'> */

```

## flex-grow
 способность растягиваться флекс эл.
	 задается эл.
	по умолчанию 0
	![[Flex_flex-grow.jpg]]
	=================================
	![[Flex_flex-grow-1 1.jpg|800]]
	стремится растянутся 

## flex-shrink (способность сжиматься)
по умолчанию 1
![[Pasted image 20240121003529.png]]

```css
.element {
	flex-shrink : 0 
}
```
запрет сжиматся (сохранить свои размеры)

## Flex-basis (задать размер элементам по умолчанию в оси x )
![[Flex_flex-basis 1.jpg]]
```css
/* Устанавливает <'ширину'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* Intrinsic sizing keywords */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* Автоматически изменяет размер на основе содержимого элемента */
flex-basis: content;

/* Глобальные значения */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;

```


## Flex( flex-grow  flex-shrink flex-basis)
```css
.element {
	flex: 0 1 auto;
}
```

![[Flex_flex.jpg]]


## Order
по умолчанию 
```css

.element {
	order: 1 ; // последний
}

.element {
	order: -1 ; // первый
}

.element {
	order: 0 ; // по умолчанию
}
```
![[Pasted image 20240121023704.png]]

##  Justify-content (позиционирование по основной оси ( задаем контейнеру)
![[Flex_justify-content.jpg.png]]
Если сменить ось и указать размер по 
![[Pasted image 20240121025433.png|500]]![[Flex_justify-content_column 1.jpg]]
## align-items

- выравнивания элементов (flex items) 
- вдоль поперечной оси 
- (оси, перпендикулярной основной оси). 
- Применяется к контейнеру, содержащему гибкие эл.

```css
.container { 
	display: flex; 
	align-items: stretch | flex-start | flex-end |center | baseline; }

```
Ответ: 
1. stretch, 
2. flex-start, 
3. flex-end, 
4. center, 
5. baseline
## align-contentn (

Выравниванием 
множества строк основываясь на главной оси.
Это свойство применяется к **контейнеру**, содержащему гибкие элементы)
- `flex-start`: Выравнивает строки в начале контейнера.
- `flex-end`: Выравнивает строки в конце контейнера.
- `center`: Выравнивает строки по центру контейнера.
- `space-between`: Распределяет пространство между строками равномерно.
- `space-around`: Распределяет пространство вокруг строк равномерно.
- `stretch`: Растягивает строки, чтобы они заняли все доступное пространство (это значение используется по умолчанию).
----------------------------------------------------
```css
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    height: 200px;
    background-color: lightskyblue;
	/* align-content: center;*/
}
.element {
    width: 200px;
    padding: 10px;
    background-color: lightgreen;
}

```

```html
        <div class="container">
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
        </div>
``` 
не заданно контейнеру значения 
![[Pasted image 20240121040621.png]]
align-content: start;
![[Pasted image 20240121034902.png]]
align-content: center;
![[Pasted image 20240121035452.png]]

```css
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    height: 200px;
    background-color: lightskyblue;
    align-content:flex-end;
}
```
}![[Pasted image 20240121041232.png]]
    align-content:space-around;
![[Pasted image 20240121041452.png]]
    align-content:space-between;
![[Pasted image 20240121041606.png]]
    align-content:stretch;
![[Pasted image 20240121041741.png]]

## Gap 

![[Flex_gap.jpg]]![[Flex_gap_row.jpg]] 
https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbTU4bVVKemlfSEFmUnlhZkxyX25YMUtmMkRsZ3xBQ3Jtc0ttdU5HVEVpcVhnUlRWNFplejcxTXQ0ci10OEExRVBsb1FSWlJmbDdEczNIMlJ5RW5Jd0tCUVlaUXczQlRDUk1qcWUxV2ZUSmJ3LUo0REUwTHptQjRfZm5qWEpfbjVGQnN2Rno1ZmJlYTJKaHBhNjVDRQ&q=https%3A%2F%2Fflexboxfroggy.com%2F%23ru&v=YG8Vhz1pAsU