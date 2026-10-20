const algorithmSelect = document.getElementById("algorithmSelect");

const selectedAlgorithm = document.getElementById("selectedAlgorithm");

const learningContent = document.getElementById("learningContent");

const algorithmTitle = document.getElementById("algorithmTitle");

const algorithmDescription = document.getElementById("algorithmDescription");

const timeComplexity = document.getElementById("timeComplexity");

const algorithmSpace = document.getElementById("algorithmSpace");

const bestComplexity = document.getElementById("bestComplexity");

const averageComplexity = document.getElementById("averageComplexity");

const worstComplexity = document.getElementById("worstComplexity");

const spaceComplexity = document.getElementById("spaceComplexity");



let currentAlgorithm = "";



const algorithmData = {


bubble:{
title:"Bubble Sort",
steps:[
"Compare two adjacent elements.",
"Swap them if the left element is greater than the right element.",
"Continue comparing until the end of the array.",
"After one pass, the largest element reaches the last position.",
"Repeat the process until the array is sorted."
],
description:"Bubble Sort repeatedly compares adjacent elements and swaps them to arrange the elements in sorted order.",
best:"O(n)",
average:"O(n²)",
worst:"O(n²)",
space:"O(1)"
},



selection:{
title:"Selection Sort",
steps:[
"Find the smallest element from the unsorted part.",
"Swap it with the first unsorted position.",
"Move the boundary of sorted and unsorted parts.",
"Repeat until the array is completely sorted."
],
description:"Selection Sort selects the minimum element and places it in the correct position.",
best:"O(n²)",
average:"O(n²)",
worst:"O(n²)",
space:"O(1)"
},



insertion:{
title:"Insertion Sort",
steps:[
"Assume the first element is already sorted.",
"Take the next element as key.",
"Compare key with previous elements.",
"Shift larger elements and insert key in correct position.",
"Repeat until all elements are sorted."
],
description:"Insertion Sort builds the sorted array one element at a time.",
best:"O(n)",
average:"O(n²)",
worst:"O(n²)",
space:"O(1)"
},



merge:{
title:"Merge Sort",
steps:[
"Divide the array into two halves.",
"Continue dividing until single elements remain.",
"Merge smaller sorted arrays into larger sorted arrays.",
"Repeat until the complete array is sorted."
],
description:"Merge Sort uses divide and conquer technique to sort elements.",
best:"O(n log n)",
average:"O(n log n)",
worst:"O(n log n)",
space:"O(n)"
},



quick:{
title:"Quick Sort",
steps:[
"Choose a pivot element.",
"Partition elements around the pivot.",
"Place smaller elements on left and larger elements on right.",
"Apply the same process recursively."
],
description:"Quick Sort uses a pivot and divide-and-conquer strategy.",
best:"O(n log n)",
average:"O(n log n)",
worst:"O(n²)",
space:"O(log n)"
},



heap:{
title:"Heap Sort",
steps:[
"Build a Max Heap from the array.",
"Compare parent node with its children.",
"Maintain heap property by swapping.",
"Move the largest element to the end.",
"Repeat until the array is sorted."
],
description:"Heap Sort uses a binary heap data structure for efficient sorting.",
best:"O(n log n)",
average:"O(n log n)",
worst:"O(n log n)",
space:"O(1)"
},



shell:{
title:"Shell Sort",
steps:[
"Choose a gap value.",
"Compare elements separated by the gap.",
"Perform insertion sort on each group.",
"Reduce the gap value.",
"Repeat until gap becomes one."
],
description:"Shell Sort improves insertion sort by comparing distant elements first.",
best:"O(n log n)",
average:"Depends on gap sequence",
worst:"O(n²)",
space:"O(1)"
},



linear:{
title:"Linear Search",
steps:[
"Start from the first element.",
"Compare each element with target value.",
"If target matches, element is found.",
"Continue until the element is found or array ends."
],
description:"Linear Search checks each element one by one.",
best:"O(1)",
average:"O(n)",
worst:"O(n)",
space:"O(1)"
},



binary:{
title:"Binary Search",
steps:[
"Array must be sorted.",
"Find the middle element.",
"Compare target with middle element.",
"Search left or right half based on comparison.",
"Repeat until element is found."
],
description:"Binary Search repeatedly divides the search space into halves.",
best:"O(1)",
average:"O(log n)",
worst:"O(log n)",
space:"O(1)"
}

};
algorithmSelect.addEventListener("change",()=>{

    currentAlgorithm = algorithmSelect.value;

    if(currentAlgorithm===""){
        return;
    }

    let data = algorithmData[currentAlgorithm];

    selectedAlgorithm.innerText = data.title;

    algorithmTitle.innerText = data.title;

    algorithmDescription.innerText = data.description;

    timeComplexity.innerText = data.average;

    algorithmSpace.innerText = data.space;

    bestComplexity.innerText = data.best;

    averageComplexity.innerText = data.average;

    worstComplexity.innerText = data.worst;

    spaceComplexity.innerText = data.space;

    learningContent.innerHTML =
    "<p>Select Steps, Explanation or Complexity to learn.</p>";

});





document.getElementById("stepsBtn").addEventListener("click",()=>{

    if(!currentAlgorithm) return;


    let steps = algorithmData[currentAlgorithm].steps;


    let output="<h3>Steps</h3><ol>";


    steps.forEach(step=>{

        output+=`<li>${step}</li>`;

    });


    output+="</ol>";


    learningContent.innerHTML=output;

});






document.getElementById("explanationBtn").addEventListener("click",()=>{


    if(!currentAlgorithm) return;


    learningContent.innerHTML=

    `<h3>Explanation</h3>
    <p>${algorithmData[currentAlgorithm].description}</p>`;

});







document.getElementById("complexityBtn").addEventListener("click",()=>{


    if(!currentAlgorithm) return;


    let data=algorithmData[currentAlgorithm];


    learningContent.innerHTML=

    `<h3>Complexity Analysis</h3>

    <p>Best Case : ${data.best}</p>

    <p>Average Case : ${data.average}</p>

    <p>Worst Case : ${data.worst}</p>

    <p>Space Complexity : ${data.space}</p>`;

});







let array=[];



const arrayContainer=document.getElementById("arrayContainer");


const arrayInput=document.getElementById("arrayInput");




document.getElementById("createArrayBtn").addEventListener("click",()=>{


    array=arrayInput.value
    .split(",")
    .map(Number);


    displayArray();

});







function displayArray(){


    arrayContainer.innerHTML="";


    let max=Math.max(...array);


    array.forEach(value=>{


        let bar=document.createElement("div");


        bar.className="bar";


        bar.style.height=(value/max)*150+"px";


        bar.innerText=value;


        arrayContainer.appendChild(bar);


    });


}
function sleep(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}



function updateBars(){

    let bars=document.querySelectorAll(".bar");

    bars.forEach((bar,index)=>{

        bar.innerText=array[index];

        let max=Math.max(...array);

        bar.style.height=(array[index]/max)*150+"px";

    });

}





async function swap(i,j){

    let temp=array[i];

    array[i]=array[j];

    array[j]=temp;

    updateBars();

    await sleep(500);

}







document.getElementById("visualizeBtn").addEventListener("click",()=>{


    if(currentAlgorithm==="bubble")
        bubbleSort();


    else if(currentAlgorithm==="selection")
        selectionSort();


    else if(currentAlgorithm==="insertion")
        insertionSort();


    else if(currentAlgorithm==="merge")
        mergeSortStart();


    else if(currentAlgorithm==="quick")
        quickSortStart();


});









async function bubbleSort(){


    for(let i=0;i<array.length;i++){


        for(let j=0;j<array.length-i-1;j++){


            if(array[j]>array[j+1]){


                await swap(j,j+1);


            }


        }


    }


}








async function selectionSort(){


    for(let i=0;i<array.length;i++){


        let min=i;


        for(let j=i+1;j<array.length;j++){


            if(array[j]<array[min]){

                min=j;

            }


        }



        if(min!==i){

            await swap(i,min);

        }


    }


}







async function insertionSort(){


    for(let i=1;i<array.length;i++){


        let key=array[i];

        let j=i-1;



        while(j>=0 && array[j]>key){


            array[j+1]=array[j];


            j--;


            updateBars();


            await sleep(500);


        }



        array[j+1]=key;


        updateBars();


        await sleep(500);


    }


}








async function mergeSortStart(){


    await mergeSort(0,array.length-1);


}




async function mergeSort(left,right){


    if(left>=right)
        return;



    let mid=Math.floor((left+right)/2);



    await mergeSort(left,mid);

    await mergeSort(mid+1,right);



    await merge(left,mid,right);


}






async function merge(left,mid,right){


    let temp=[];


    let i=left;

    let j=mid+1;



    while(i<=mid && j<=right){


        if(array[i]<=array[j]){

            temp.push(array[i++]);

        }

        else{

            temp.push(array[j++]);

        }


    }




    while(i<=mid){

        temp.push(array[i++]);

    }



    while(j<=right){

        temp.push(array[j++]);

    }




    for(let k=0;k<temp.length;k++){


        array[left+k]=temp[k];


        updateBars();


        await sleep(400);


    }


}








async function quickSortStart(){

    await quickSort(0,array.length-1);

}




async function quickSort(low,high){


    if(low<high){


        let pivot=await partition(low,high);


        await quickSort(low,pivot-1);


        await quickSort(pivot+1,high);


    }


}







async function partition(low,high){


    let pivot=array[high];


    let i=low-1;



    for(let j=low;j<high;j++){


        if(array[j]<pivot){


            i++;

            await swap(i,j);


        }


    }



    await swap(i+1,high);



    return i+1;


}
async function heapSort(){

    let n=array.length;


    async function heapify(n,i){

        let largest=i;

        let left=2*i+1;

        let right=2*i+2;


        if(left<n && array[left]>array[largest])
            largest=left;


        if(right<n && array[right]>array[largest])
            largest=right;



        if(largest!==i){

            await swap(i,largest);

            await heapify(n,largest);

        }

    }



    for(let i=Math.floor(n/2)-1;i>=0;i--){

        await heapify(n,i);

    }



    for(let i=n-1;i>0;i--){

        await swap(0,i);

        await heapify(i,0);

    }

}





async function shellSort(){

    let n=array.length;


    for(let gap=Math.floor(n/2);gap>0;gap=Math.floor(gap/2)){


        for(let i=gap;i<n;i++){


            let temp=array[i];

            let j=i;



            while(j>=gap && array[j-gap]>temp){


                array[j]=array[j-gap];

                j-=gap;


                updateBars();

                await sleep(400);

            }



            array[j]=temp;


            updateBars();

            await sleep(400);


        }


    }

}







async function linearSearch(target){


    let bars=document.querySelectorAll(".bar");


    for(let i=0;i<array.length;i++){


        bars[i].style.background="#f59e0b";


        await sleep(500);



        if(array[i]===target){


            bars[i].style.background="#16a34a";


            document.getElementById("visualizationStatus").innerText=
            "Element Found ✅";


            return;


        }



        bars[i].style.background="#2563eb";


    }



    document.getElementById("visualizationStatus").innerText=
    "Element Not Found ❌";

}





async function binarySearch(target){


    let bars=document.querySelectorAll(".bar");


    let left=0;

    let right=array.length-1;



    while(left<=right){


        let mid=Math.floor((left+right)/2);



        bars[mid].style.background="#f59e0b";


        await sleep(600);



        if(array[mid]===target){


            bars[mid].style.background="#16a34a";


            document.getElementById("visualizationStatus").innerText=
            "Element Found ✅";


            return;


        }


        if(array[mid]<target){


            left=mid+1;


        }

        else{


            right=mid-1;


        }



        bars[mid].style.background="#2563eb";


    }



    document.getElementById("visualizationStatus").innerText=
    "Element Not Found ❌";


}








document.getElementById("visualizeBtn").addEventListener("click",async()=>{


    if(currentAlgorithm==="heap"){

        await heapSort();

    }


    else if(currentAlgorithm==="shell"){

        await shellSort();

    }



    else if(currentAlgorithm==="linear"){


        let target=Number(document.getElementById("targetInput").value);


        await linearSearch(target);


    }



    else if(currentAlgorithm==="binary"){


        array.sort((a,b)=>a-b);

        updateBars();


        let target=Number(document.getElementById("targetInput").value);


        await binarySearch(target);


    }


});
class Node{

    constructor(value){

        this.value=value;

        this.left=null;

        this.right=null;

    }

}



let root=null;



const treeContainer=document.getElementById("treeContainer");




function insertBST(node,value){


    if(node===null)
        return new Node(value);



    if(value<node.value)

        node.left=insertBST(node.left,value);


    else if(value>node.value)

        node.right=insertBST(node.right,value);



    return node;

}





document.getElementById("insertNodeBtn").addEventListener("click",()=>{


    let value=Number(document.getElementById("bstInput").value);



    if(!isNaN(value)){


        root=insertBST(root,value);


        drawTree(root);


        updateTraversal();


    }


});







function drawTree(node,x=50,y=30,gap=120){


    treeContainer.innerHTML="";


    if(node)

        createNode(node,x,y,gap);


}






function createNode(node,x,y,gap){


    let element=document.createElement("div");


    element.className="tree-node";


    element.innerText=node.value;


    element.style.left=x+"px";

    element.style.top=y+"px";


    treeContainer.appendChild(element);




    if(node.left){


        createNode(node.left,x-gap,y+80,gap/1.5);


    }



    if(node.right){


        createNode(node.right,x+gap,y+80,gap/1.5);


    }


}







function searchBST(node,value,path=[]){


    if(node===null)

        return path;



    path.push(node.value);



    if(node.value===value)

        return path;



    if(value<node.value)

        return searchBST(node.left,value,path);



    return searchBST(node.right,value,path);


}






document.getElementById("searchNodeBtn").addEventListener("click",async()=>{


    let value=Number(document.getElementById("bstInput").value);



    let path=searchBST(root,value);



    let nodes=document.querySelectorAll(".tree-node");



    for(let p of path){


        nodes.forEach(n=>{


            if(Number(n.innerText)===p){


                n.classList.add("searching");


            }


        });


        await sleep(600);


    }



    if(path[path.length-1]===value){


        nodes.forEach(n=>{


            if(Number(n.innerText)===value){


                n.classList.remove("searching");

                n.classList.add("found");


            }


        });


    }


});







function deleteBST(node,value){


    if(node===null)

        return null;



    if(value<node.value)

        node.left=deleteBST(node.left,value);



    else if(value>node.value)

        node.right=deleteBST(node.right,value);



    else{


        if(node.left===null)

            return node.right;



        if(node.right===null)

            return node.left;



        let successor=node.right;



        while(successor.left)

            successor=successor.left;



        node.value=successor.value;


        node.right=deleteBST(node.right,successor.value);


    }



    return node;

}







document.getElementById("deleteNodeBtn").addEventListener("click",()=>{


    let value=Number(document.getElementById("bstInput").value);



    root=deleteBST(root,value);



    drawTree(root);


    updateTraversal();


});








function inorder(node,result=[]){


    if(node){


        inorder(node.left,result);


        result.push(node.value);


        inorder(node.right,result);


    }


    return result;

}




function preorder(node,result=[]){


    if(node){


        result.push(node.value);


        preorder(node.left,result);


        preorder(node.right,result);


    }


    return result;

}




function postorder(node,result=[]){


    if(node){


        postorder(node.left,result);


        postorder(node.right,result);


        result.push(node.value);


    }


    return result;

}





function updateTraversal(){


    document.getElementById("inorder").innerText=
    inorder(root).join(" → ");



    document.getElementById("preorder").innerText=
    preorder(root).join(" → ");



    document.getElementById("postorder").innerText=
    postorder(root).join(" → ");


}