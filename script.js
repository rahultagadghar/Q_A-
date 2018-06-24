var posts = [
    {
        id: randomId(),
        title: "Palindrome Program",
        description:
            "Palindrome in C language or C program to check if a string or number is palindrome or not. C program to check if a number is a palindrome or not. A palindrome string is a string that reads the same backward as forward and can be of odd or even length. A palindrome number is a number which is equal to its reverse.",
        code: [
            {
                language: "C",
                answerCode: `
        
#include <stdio.h>
int main()
{
int n, reversedInteger = 0, remainder, originalInteger;

printf("Enter an integer: ");
scanf("%d", &n);

originalInteger = n;

while( n!=0 )
{
    remainder = n%10;
    reversedInteger = reversedInteger*10 + remainder;
    n /= 10;
}

if (originalInteger == reversedInteger)
    printf("%d is a palindrome.", originalInteger);
else
    printf("%d is not a palindrome.", originalInteger);

return 0;
}

            `
            },
            {
                language: "JAVA",
                answerCode: `
class PalindromeExample{  
 public static void main(String args[]){  
  int r,sum=0,temp;    
  int n=454;//It is the number variable to be checked for palindrome  
  
  temp=n;    
  while(n>0){    
   r=n%10;  //getting remainder  
   sum=(sum*10)+r;    
   n=n/10;    
  }    
  if(temp==sum)    
   System.out.println("palindrome number ");    
  else    
   System.out.println("not palindrome");    
}  
}              
            `
            }
        ]
    },
    {
        id: randomId(),
        title: "Fibonacci Series ",
        description:
            "Fibonacci series, next number is the sum of previous two numbers for example 0, 1, 1, 2, 3, 5, 8, 13, 21 etc. The first two numbers of fibonacci series are 0 and 1.",
        code: [
            {
                language: "C",
                answerCode: `
        
#include <stdio.h>
int main()
{
int n, reversedInteger = 0, remainder, originalInteger;

printf("Enter an integer: ");
scanf("%d", &n);

originalInteger = n;

while( n!=0 )
{
    remainder = n%10;
    reversedInteger = reversedInteger*10 + remainder;
    n /= 10;
}

if (originalInteger == reversedInteger)
    printf("%d is a palindrome.", originalInteger);
else
    printf("%d is not a palindrome.", originalInteger);

return 0;
}

            `
            },
            {
                language: "JAVA",
                answerCode: `
class PalindromeExample{  
 public static void main(String args[]){  
  int r,sum=0,temp;    
  int n=454;//It is the number variable to be checked for palindrome  
  
  temp=n;    
  while(n>0){    
   r=n%10;  //getting remainder  
   sum=(sum*10)+r;    
   n=n/10;    
  }    
  if(temp==sum)    
   System.out.println("palindrome number ");    
  else    
   System.out.println("not palindrome");    
}  
}              
            `
            }
        ]
    },

    {
        id: randomId(),
        title: "Factorial Program  ",
        description: ` Factorial of n is the product of all positive descending integers. Factorial of n is denoted by n! The factorial is normally used in Combinations and Permutations (mathematics). There are many ways to write the factorial program in java language.Lets see the 2 ways to write the factorial program in java.
            `,
        code: [
            {
                language: "C",
                answerCode: `
        
#include <stdio.h>
int main()
{
    int n, i;
    unsigned long long factorial = 1;

    printf("Enter an integer: ");
    scanf("%d",&n);

    // show error if the user enters a negative integer
    if (n < 0)
        printf("Error! Factorial of a negative number doesn't exist.");

    else
    {
        for(i=1; i<=n; ++i)
        {
            factorial *= i;              // factorial = factorial*i;
        }
        printf("Factorial of %d = %llu", n, factorial);
    }

    return 0;
}

            `
            },
            {
                language: "JAVA",
                answerCode: `
class FactorialExample{  
 public static void main(String args[]){  
  int i,fact=1;  
  int number=5;//It is the number to calculate factorial    
  for(i=1;i<=number;i++){    
      fact=fact*i;    
  }    
  System.out.println("Factorial of "+number+" is: "+fact);    
 }  
}               
            `
            }
        ]
    },

    {
        id: randomId(),
        title: "Bubble Sort ",
        description:
            "bubble sort to sort numbers or arrange them in ascending order. You can modify it to print numbers in descending order.You can also sort strings using Bubble sort, it is less efficient as its average and worst case complexity is high, there are many other fast sorting algorithms like quick-sort, heap-sort, etc. Sorting simplifies problem-solving in computer programming",
        code: [
            {
                language: "C",
                answerCode: `
  #include <stdio.h>
 
int main()
{
  int array[100], n, c, d, swap;
 
  printf("Enter number of elements\n");
  scanf("%d", &n);
 
  printf("Enter %d integers\n", n);
 
  for (c = 0; c < n; c++)
    scanf("%d", &array[c]);
 
  for (c = 0 ; c < n - 1; c++)
  {
    for (d = 0 ; d < n - c - 1; d++)
    {
      if (array[d] > array[d+1]) /* For decreasing order use < */
      {
        swap       = array[d];
        array[d]   = array[d+1];
        array[d+1] = swap;
      }
    }
  }
 
  printf("Sorted list in ascending order:\n");
 
  for (c = 0; c < n; c++)
     printf("%d\n", array[c]);
 
  return 0;
}
            `
            },
            {
                language: "JAVA",
                answerCode: `
public class MyBubbleSort {
 
    // logic to sort the elements
    public static void bubble_srt(int array[]) {
        int n = array.length;
        int k;
        for (int m = n; m >= 0; m--) {
            for (int i = 0; i < n - 1; i++) {
                k = i + 1;
                if (array[i] > array[k]) {
                    swapNumbers(i, k, array);
                }
            }
            printNumbers(array);
        }
    }
 
    private static void swapNumbers(int i, int j, int[] array) {
 
        int temp;
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
 
    private static void printNumbers(int[] input) {
         
        for (int i = 0; i < input.length; i++) {
            System.out.print(input[i] + ", ");
        }
        System.out.println("\n");
    }
 
    public static void main(String[] args) {
        int[] input = { 4, 2, 9, 6, 23, 12, 34, 0, 1 };
        bubble_srt(input);
 
    }
}            
            `
            }
        ]
    },

    {
        id: randomId(),
        title: " Find Third Largest Number in an Array",
        description:
            " We can find the third largest number in an array in java by sorting the array and returning the 3nd largest number.Let's see the full example to find the third largest number in java array.",
        code: [
            {
                language: "C",
                answerCode: `
        
#include <bits/stdc++.h>

void thirdLargest(int arr[], int arr_size)
{
    /* There should be atleast three elements */
    if (arr_size < 3)
    {
        printf(" Invalid Input ");
        return;
    }

    // Find first largest element
    int first = arr[0];
    for (int i = 1; i < arr_size ; i++)
        if (arr[i] > first)
            first = arr[i];

    // Find second largest element
    int second = INT_MIN;
    for (int i = 0; i < arr_size ; i++)
        if (arr[i] > second && arr[i] < first)
            second = arr[i];

    // Find third largest element
    int third = INT_MIN;
    for (int i = 0; i < arr_size ; i++)
        if (arr[i] > third && arr[i] < second)
            third = arr[i];

    printf("The third Largest element is %d\n", third);
}

/* Driver program to test above function */
int main()
{
    int arr[] = {12, 13, 1, 10, 34, 16};
    int n = sizeof(arr)/sizeof(arr[0]);
    thirdLargest(arr, n);
    return 0;
}

            `
            },
            {
                language: "JAVA",
                answerCode: `
public class ThirdLargestInArrayExample{  
public static int getThirdLargest(int[] a, int total){  
int temp;  
for (int i = 0; i < total; i++)   
        {  
            for (int j = i + 1; j < total; j++)   
            {  
                if (a[i] > a[j])   
                {  
                    temp = a[i];  
                    a[i] = a[j];  
                    a[j] = temp;  
                }  
            }  
        }  
       return a[total-3];  
}  
public static void main(String args[]){  
int a[]={1,2,5,6,3,2};  
int b[]={44,66,99,77,33,22,55};  
System.out.println("Third Largest: "+getThirdLargest(a,6));  
System.out.println("Third Largest: "+getThirdLargest(b,7));  
}}            
            `
            }
        ]
    }
];

function getPost() {
    let FinalPost = "",
        initial = "",
        middle = "",
        extra = "";

    posts.forEach((data, index) => {
        middle = "";
        initial = `
            <div id="test" class="mainDiv"> 
               <strong> <p class="content border-bot">${data.title}</p></strong>
                <p class="content border-bot">${data.description}</p>
                
                <div class="content">
                    <p class="codeHeading">Code</p>
                <div class="code">`;

        for (let indexValue in data.code) {
            middle += ` <div class="java">
            <div class="Language"> 
            ${data.code[indexValue].language}
            </div><div class="displayAnswerCode">
            <pre><code class="html">${data.code[indexValue].answerCode}</code></pre>
            </div></div> `;
        }

        extra = `<div1>
            <button id=${data.id}
             class="btn  btn-success extraMargin"
               onclick="add(this,event)">Add Answer</button>
            </div1></div> </div> </div>`;

        FinalPost += initial + middle + extra;
    });
    document.getElementById("container").innerHTML = FinalPost;
    return;
}

window.onload = getPost;

function add(e, event) {
    let SelectedDiv = document.getElementById(e.id);
    let addAnswerDiv = document.createElement("div");
    addAnswerDiv.innerHTML = `
    <div class="addAnswer">



    <select class="btn btn-primary btn-block" name="selectLanguage" id=${e.id + 1}>
        <option value="JavaScrip">JavaScrip</option>
        <option value="Python">Python</option>
        <option value="Kotlin">Kotlin</option>
        <option value="Rust">Rust</option>
        <option value="JAVA">Java</option>
        <option value="C">C</option>
        <option value="C++">C++</option>
    </select>

    




    <textarea placeholder="Answer code" class="form-control" id=${e.id} rows="10"></textarea>

    <button id=${e.id} class="btn btn-success " 
    onclick="addAnotherAnswer(this,${e.id})">Add</button>
    </div> `;

    e.parentNode.appendChild(addAnswerDiv);
    return disableById(e.id);
}

function randomId() {
    let random = Math.floor(Math.random()) + 4768;
    return Math.random();
}

const addAnotherAnswer = (e, id) => {
    let answerCode = e.parentNode.childNodes[3].value;
    let language = e.parentNode.childNodes[1].value;
    if (language !== "" && answerCode != "") {
        function findSome(element) {
            if (element.id == id) {
                element.code.push({ language, answerCode });
                disableById(id);
                getPost();
                return;
            }
        }
        posts.some(findSome);
    } else {
        getPost();
    }
};

const disableById = id => {
    let select = document.getElementById(id);
    select.style.display = "none";
    return;
};

function AddQuestion() {
    console.log("done");
    let containerDiv = document.getElementById("AddQuestionDiv");
    let addQuestionDiv = document.createElement("div");
    addQuestionDiv.innerHTML = `




    <div id="addQuestion" class="mainDiv">
        <input class="form-control" type="text" placeholder="Question title?">
        <input class="form-control" type="text" placeholder="Description?">
        <button class="btn btn-success btn-lg extraMargin" onclick="addQuestion()">Add</button>
    </div> `;

    containerDiv.appendChild(addQuestionDiv);
}

function addQuestion() {
    let selectQdiv = document.getElementById("addQuestion");
    let title = selectQdiv.childNodes[1].value;
    let description = selectQdiv.childNodes[3].value;

    if (title !== "" && description !== "") {
        posts.unshift({ title, description, code: [] });
        getPost();
    }
    selectQdiv.style.display = "none";
}
