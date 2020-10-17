const selection = document.querySelector('.product_Sort');
const parentEl = document.querySelector('.product_Container');
const prodTxtAppend = document.querySelectorAll('.product_text');
const arrayList = [];

const filterItems = (e) => {

    const {value} = e.target;
    
  const items = Array.from(parentEl.children);

    if(value === "AtoZ"){
      items.sort(function(a,b){
        //console.log(a,b); //check div.
        const nameA = a.dataset.name;
        const nameB = b.dataset.name;
        //console.log(nameA,nameB); //Check dataset and turn dataset into a string
        if(nameA.toUpperCase() > nameB.toUpperCase()){
          return 1;
          //console.log(1);
          //console.log(nameA,nameB);
        } else{
          return -1;
          //console.log(-1);
          //console.log(nameA,nameB);
        } 
      });
    }else if(value === "ZtoA"){
      items.sort(function(a,b){
        //console.log(a,b); //check div.
        const nameA = a.dataset.name;
        const nameB = b.dataset.name;
        //console.log(nameA,nameB); //Check dataset and turn dataset into a string
        if(nameA.toUpperCase() > nameB.toUpperCase()){
          return -1;
          //console.log(-1);
          //console.log(nameA,nameB);
        } else{
          return 1;
          //console.log(1);
          //console.log(nameA,nameB);
        }
        
        
      });
    }else{
      return ;
    }

  parentEl.innerHTML = '';
  items.forEach(function(item){
    parentEl.appendChild(item);
  });
};

selection.addEventListener('change', filterItems);

