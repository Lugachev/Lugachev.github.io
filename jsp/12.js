/* Задача № 63 */
let mas = [1, 2, 3, 4, 5];
let mas2 = [6, 7, 8, 9, 10];
let mas3 = new Array(mas.length + mas2.length);


let startIndex1 = 5;
let endIndex1 = 10;
let startIndex2 = 0;
let endIndex2 = 5;


let n = 0;
if (mas2[0] > mas[mas.length - 1])
{
	for (let i = 0; i<mas.length; i++)
	{
		mas3[n] = mas[i];
		n++;
	} 
	for (let i = 0; i < mas2.length; i++)
	{
		mas3[n] = mas2[i];
		n++;
	}
}
else 
{
	
	for (let i = 0; i < mas2.length; i++)
	{
		mas3[n] = mas2[i];
		n++;
	}
	
	for (let i = 0; i<mas.length; i++)
	{
		mas3[n] = mas[i];
		n++;
	} 
}


console.log(mas);
console.log(mas2);
console.log(mas3);






/* Задача № 58 необходимо создать новый массив, в котором каждый последующий элемент равен сумму всех предыдущих 
let mas = [1, 2, 3, 4, 5];
let mas2 = new Array;
let sum = 0;
let k = 0;

for (i=0; i<mas.length; i++)
{
	sum += mas[i];
	mas2[k] = sum;
	k++;
	console.log(sum);
}
console.log(mas2);
*/





/* задача №57 перекладываем индексы    
let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mas2 = new Array;
let n = 0; 


for (i=0; i<mas.length; i++)


	if (i %2 == 0)
	{
		mas2[n] = i;
		n++
	}

	
for (i=0; i<mas.length; i++)

if (i %2 != 0)
	{
		mas2[n] = i
		n++
	}

console.log(mas);
console.log(mas2);
*/

/* задача №57 перекладываем значения    
let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mas2 = new Array;
let n = 0;


for (i=0; i<mas.length; i++)


	if (mas[i] %2 == 0)
	{
		mas2[n] = mas[i];
		n++
	}

	
for (i=0; i<mas.length; i++)

if (mas[i] %2 != 0)
	{
		mas2[n] = mas[i]
		n++
	}

console.log(mas);
console.log(mas2);
*/


/* проверяем индекс массива и все что не четное не перекладываем в новый массив */
/*
let mas = [12, 51, 7, 6, 8];
let mas2 = new Array;
let k = 0;


for (i=0; i<mas.length; i++)

	if (mas[i] %2 != 0)
	{
		
		mas2[k] = mas[i];
		k++;
		
	}



console.log(mas);
console.log(mas2);
*/


























/* удаляет все нечетные и убирает часть масива из 9 превращает в 4
let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i=0; i<mas.length; i++) length - вся длинна массива
if(mas[i] % 2 != 0)

	{
		mas.splice(i, 1);
		i--;
		
		
	}
	
console.log (mas);








let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mas2 = new Array;
let even;
let k = 0;

for (i=0; i<mas.length; i++)
if(mas[i] % 2 == 0)

	{
		even = mas[i];
		mas2[k] = even;
		k ++;
	}
	
console.log (mas);
console.log (mas2);











let arr = [ 1, 2, 3, 4, 5, 6, 7, 8];
let k = 2;
let l = 5;
let arr2 = new Array(arr.length - (l - k + 1));
let index = 0;
/*arr.splice(k, l - k);*/

/*for (let i = 0; i < arr.length; i++)
{
	if (i < k || i > l)

	{
		arr2[index] = arr[i];
		index++;
	}

}
console.log(arr);
console.log(arr2);





let mas = [0, 1, 2, 3, 4, 5, 6, 7, 8]

let even;

for (i=0; i<=mas; i++)
if(mas % 2 == 0)
	{
		mas[i] = even;
	}



console.log (even);






let mas = [11, 7, 10, 4];
let min = mas[0];
let max = mas[0];
let indexmin = 0;
let indexmax = 0;


for (let i=1; i<mas.length; i++)
{
	if (mas[i] < min)
	{
		min = mas[i];
		indexmin = i;
	}
		

	if (mas[i] > max)
	{
		max = mas[i];
		indexmax = i;
	}
}



console.log (mas);
console.log (min);
console.log (max);





let mas = [10, 29, 7, 4, 3];
let min = mas[0];

for (let i=1; i<mas.length; i++)
{
	if (mas[i] < min)
		min = mas[i]
}


console.log (min);



let mas = [10, 2, 7, 4, 3];
let max = mas[0];

for (let i=1; i<mas.length; i++)
{
	if (mas[i] > max)
		max = mas[i]
}


console.log (max);




let mas = [1, 2, 3, 4, 5, 6, 7, 8];
let even1;

if(mas[0] % 2 == 0)
	even1=true;
else
	even1 = false;

let counter = 1;

for (let i=1; i<mas.length; i++)

{
	let even2;

	if (mas[i]%2 == 0)
		even2 = true;
	else
		even2 = false;
	if (even1 == even2)
		{
			console.log(i);
			break;
		}
	even1 = even2;
	counter ++;
}

if (counter == mas.length)
console.log(0);






const N = 10;
let mas = new Array(N);
let k = 2;
let l = 4;
let sum = 0;
let x = 0;

for (let i=1; i<N; i++)

{
	mas[i] = Math.trunc(Math.random()* 10);

	if (i < k || i > l)
	{
		x += 1;
		sum += mas[i];
	}
  	
}
 
	console.log (mas);
	console.log (sum / x);





const N = 10;
let mas = new Array(N);
let k = 2;
let l = 8;

for(let i=0; i<N; i++)
{
	mas[i] = Math.trunc(Math.random()* 10);
	console.log(mas[i]);
}

sum = 0;
for (let i=k; i<=l; i++)
{
	sum += mas[i];
}

console.log("Сумма равна" + sum);




const N = 10;
let mas = new Array(N);
mas[0] = 1;
mas[1] = 1;
console.log(mas[0]);
console.log(mas[1]);
for(let i=2; i<N; i++)
{
	mas[i] = mas[i - 2] + mas[i - 1];
	console.log(mas[i]);
}


const k = 2;
let sum = 0;
for (let i=1; i<=3; i++)
{
	sum +=Math.pow(i, k);
}
console.log (sum);



let sum = 0;
for (let i=-6; i<=5; i++)

if (i%2==0)
{
	sum +=i;
}

console.log (sum);


let a = 0;
if (a<0 && a%2==0)
{
	console.log ("Отрицательное и четное");
}
if (a<0 && a%2!=0)
{
	console.log ("Отрицательное и нечетное");
}
if (a>0 && a%2==0)
{
	console.log ("Положительное и четное");
}
if (a>0 && a%2!=0)
{
	console.log ("Положительное и нечетное")
}	
if (a==0)
{
	console.log ("Нулевое число")
}


let x = 2;

if (x>0)
{
	console.log (2*Math.sin(x));
}
else
{
	console.log (6-x);
}


let n = 2;

if (n>=0)
{
	console.log(n+1);
}
else
{
	console.log(n);
}


let n = 10;

if (n%3 == 0)
{
	console.log(true);
}
else
{
	console.log(false);
}
*/





