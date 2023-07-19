const userString = prompt ('Введите текст для обрезки').trim();
const startSliceIndex = prompt ('Введите индекс, с которого нужно начать обрезку строки').trim(); 
const endSliceIndex = prompt ('Введите индекс, которым нужно закончить обрезку строки').trim(); 
const slicedString = userString.slice(startSliceIndex, endSliceIndex);

alert(slicedString );







