const form=document.querySelector('form');
const input=document.querySelector('#giris');
const deleteAll=document.querySelector('#Delete');
const ulList=document.querySelector('#ulnesnesi');


//event listenerları çağırma
eventListeners();

//eventlistenerlarımız
function eventListeners(){
    //submit eventimiz
    form.addEventListener('submit',addNewItem);

    //item silme
    ulList.addEventListener('click',deleteItem);

    //tüm itemleri silme
    deleteAll.addEventListener('click',deleteAllItem);
}


function addNewItem(e){
    if(input.value ==''){
        alert('add new item');
    }

    const silButonu=document.createElement('button');
    silButonu.className='sil';
    silButonu.appendChild(document.createTextNode('X'));
    


    const li=document.createElement('li');
    li.className='liste-elemanlar';
    li.appendChild(document.createTextNode(input.value));

    

    li.appendChild(silButonu);
    ulList.appendChild(li);
    input.value='';
    e.preventDefault();//sayfa submit olduğunda yenilenmesin diye
}


function deleteItem(e){
    if(e.target.className==='sil'){
        e.target.parentElement.remove();
    };
    e.preventDefault();
}


function deleteAllItem(e){
    //ulList.innerHTML=''; //en basit çözüm
    //console.log(ulList.children);//direkt ulList.children olarak çağırınca html collection olarak geliyor ve foreache falan alamıyoz oyüzden silemiyoz.
    //console.log(ulList.childNodes);//bu sebeple nodes olarak çağırdık.
    
    ulList.childNodes.forEach(function(item){
        if(item.nodeType===1){//nodelist olduğu için 1 dyerek sadece lileri getirdi elemt olduğunu bildiği için.
            //console.log(item);
            item.remove();
        }
    });
    
    
    e.preventDefault();
}