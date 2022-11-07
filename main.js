let form=document.getElementById('addform')
let itemlist=document.getElementById('items')

//data will store after refresh the page///


let obj2=Object.values(localStorage)
// console.log(obj2[0])


//loop for list//
if(obj2.length>0)
{
  for(let i=0;i<obj2.length;i++)
{
  var li=document.createElement('li')
  var amount=JSON.parse(obj2[i]).ChooseExpenseAmount
  var des=JSON.parse(obj2[i]).ChooseDescription
  var cat=JSON.parse(obj2[i]).ChooseCategory
  li.appendChild(document.createTextNode(amount))
  li.appendChild(document.createTextNode(" "))
  li.appendChild(document.createTextNode(des))
  li.appendChild(document.createTextNode(" "))
  li.appendChild(document.createTextNode(cat))

  //create delete button//
  var delbtn=document.createElement('button')
  delbtn.className='delete'

  //create edit button//
  var editbtn=document.createElement('button')
   editbtn.className='edt'


  //append delbtn//
  delbtn.appendChild(document.createTextNode('Delete'))

  //append editbtn//
  editbtn.appendChild(document.createTextNode('EDIT'))
  li.appendChild(delbtn)
  li.appendChild(editbtn)
  itemlist.appendChild(li)
}
}





form.addEventListener('submit',addItem)
//for delete//
itemlist.addEventListener('click',removeitem)



//additem//
function addItem(e)
{
    e.preventDefault()
     
    //get input value//
    let newitem=document.getElementById('inp1').value
    let newitem2=document.getElementById('inp2').value
    let newitem3=document.getElementById('inp3').value

  /////for updating the list//
  let liTag=itemlist.querySelectorAll('li');
    Array.from(liTag).forEach(function(item){
        let disItem=item.childNodes[2].textContent;
        if(disItem.indexOf(newitem2)!=-1){
            item.style.display='none';
        }
    })


    //create element li//
    var li=document.createElement('li')
    var li=document.createElement('li')
    var li=document.createElement('li')

    //create delete button//
    var delbtn=document.createElement('button')
    delbtn.className='delete'

    //create edit button//
    var editbtn=document.createElement('button')
     editbtn.className='edt'


    //append delbtn//
    delbtn.appendChild(document.createTextNode('Delete'))

    //append editbtn//
    editbtn.appendChild(document.createTextNode('EDIT'))

    //adding item//
    // li.appendChild((document.createTextNode(`${newitem}_${newitem2}_${newitem3}`)))
    li.appendChild((document.createTextNode(newitem)))
    li.appendChild((document.createTextNode(' ')))
    li.appendChild((document.createTextNode(newitem2)))
    li.appendChild((document.createTextNode(' ')))
    li.appendChild((document.createTextNode(newitem3)))
    li.appendChild((document.createTextNode(" ")))

    ////localstorage//
    // li.appendChild(document.createTextNode(`${obj. ChooseExpenseAmount}`))
    // li.appendChild(document.createTextNode(" "))
    // li.appendChild(document.createTextNode(`${obj.ChooseDescription}`))
    // li.appendChild(document.createTextNode(" "))
    // li.appendChild(document.createTextNode(`${obj.ChooseCategory}`))
    
    //for delete//
    li.appendChild(delbtn)
    //for edit//
    li.appendChild(editbtn)
     // li.appendChild((document.createTextNode(newitem2)))
    // li.appendChild((document.createTextNode(newitem3)))
   itemlist.appendChild(li)
}

let allitem=document.getElementsByClassName('li_items')
for(let i=0;i<allitem.length;i++)
{
    console.log(allitem[i])

}

/////remove fucntion////

function removeitem(e)
{
  if(e.target.classList.contains('delete'))
  {
  if(confirm('are you sure'))
  {
   var li=e.target.parentElement
   const key=li.childNodes[2].textContent
  //  key=JSON.stringify(key)
   console.log(key)
  localStorage.removeItem(key)
   itemlist.removeChild(li)
  }
}
}

///for editing///
itemlist.addEventListener('click',editfun)

function editfun(e)
{
  if(e.target.classList.contains('edt'))
  {
    var li=e.target.parentElement
     console.log(li)
    let amt=li.childNodes[0].textContent
    let dis=li.childNodes[2].textContent
    let cat=li.childNodes[4].textContent
    console.log(amt,dis,cat)
    let v1=document.getElementById('inp1')
    let v2=document.getElementById('inp2')
    let v3=document.getElementById('inp3')
    v1.value=amt;
    v2.value=dis;
    v3.value=cat;
  }
}

////////local storage////

let firm=document.getElementById('addform')

firm.addEventListener('submit',localstr)


function localstr(e)
{
  e.preventDefault()

  const  ChooseExpenseAmount=e.target.inp1.value
  const  ChooseDescription=e.target.inp2.value
  const ChooseCategory=e.target.inp3.value

  const obj={
    ChooseExpenseAmount,
    ChooseDescription,
    ChooseCategory,
  }
  localStorage.setItem(obj.ChooseDescription,JSON.stringify(obj))

  ///for getting values from local storage//
   

}


