кастом-селектор
#custom-selector

```html
<div class="custom-select">
  <select class="mySelect" >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  
  <div class="select-styled" hidden>Выберите опцию</div>
  
  <ul class="select-options" style="display: none" hidden >
    <li data-value="1">Option 1</li>
    <li data-value="2">Option 2</li>
    <li data-value="3">Option 3</li>
    <li data-value="4">Option 4</li>
  </ul>
</div>
	
```

```js
export default function customSelect() {
    const customSelects = document.querySelectorAll(".custom-select");

    if (customSelects) {
        customSelects.forEach((item) => {
            console.log(item);

            const select = item.querySelector(".mySelect");
            const selectStyled = item.querySelector(".select-styled");
            const selectOptions = item.querySelector(".select-options");

            selectStyled.addEventListener("click", function () {
                selectOptions.style.display =
                    selectOptions.style.display === "none" ? "block" : "none";
            });

            selectOptions.addEventListener("click", function (event) {
                if (event.target.tagName === "LI") {
                    select.value = event.target.getAttribute("data-value");
                    selectStyled.textContent = event.target.textContent;
                    selectOptions.style.display = "none";
                }
            });
        });
    }
}

```

```scss
.custom-select {
  position: relative;
  display: inline-block;
}

.list-none {
    display: none;
}

.select-styled {
  background: #f2f2f2;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.select-options {
  position: absolute;
  display: none;
  background: #fff;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow-y: auto;
  max-height: 150px;
  z-index: 1;
}

.select-options li {
  padding: 5px 10px;
  cursor: pointer;
}

.select-options li:hover {
  background: #f2f2f2;
}


```