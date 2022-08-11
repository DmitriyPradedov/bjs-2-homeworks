//Задача 1. Усовершенствуйте кэширующий декоратор
 
function cachingDecoratorNew(func) {
  let cache = [];
  sizeCache = 5;
 
  function wrapper(...args) {
      const hash = args.join(',');
 
      let value = cache.find((item) => item.hash === hash)
      if (value != undefined) {
          console.log("Из кеша: " + value.result);
          return "Из кэша: " + value.result;
      } else {
          let result = func(...args);
          cache.push({hash, result});
          if (cache.length > sizeCache) {
            cache.shift();
          }
          console.log("Вычисляем: " + result);
          return "Вычисляем: " + result;
      }
  }
  return wrapper;
}

//Задача 2. Фильтрация и преобразование массива

function debounceDecoratorNew(f, wait) {
  let flag = false;

  return function () {
    if (!flag) {
      f();
      flag = true;
      setTimeout(() => {
        flag = false;
        console.log('Флаг сброшен')}, wait);
    } else {
          console.log('проигнорировано');
        }  
  };
}

//Задача 3. Усовершенствуйте debounceDecoratorNew

function debounceDecorator2(f, wait) {
  let flag = false;
  wrapper.count = 0;

  function wrapper() {
    if (!flag) {
      wrapper.count++;
      f();
      flag = true;
      setTimeout(() => flag = false, wait);
    } else {
          console.log('проигнорировано');
        }  
  };

  return wrapper;
}