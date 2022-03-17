let valid1=/^(([a-zèéê]+)?(\b(\-|'))?(\b\s+)?([a-zèéê]+?)(\s+)?)+$/gi;






//fonction qui teste la validation du nom
function fct1()
{
    var inp=document.getElementById("exampleFormControlInput1");
    if(inp.value.match(valid1))
    {
        inp.classList.add("truee");
        inp.classList.remove("falsee");
        document.getElementById('span1').innerHTML="Nom valide";
        document.getElementById('span1').classList.add("spant");
        document.getElementById('span1').classList.remove("spanf");
    }
    else{ 
    inp.classList.add("falsee");
    inp.classList.remove("truee");
    document.getElementById('span1').innerHTML="Nom invalide";
    document.getElementById('span1').classList.add("spanf");
    document.getElementById('span1').classList.remove("spant");
}

}





//fonction qui reinitise l input
function fct2()
{
    document.getElementById('span1').innerHTML="";
    document.getElementById('exampleFormControlInput1').value="";
     document.querySelector('truee').classList.remove('truee');
     document.querySelector('falsee').classList.remove('falee');
     


}



//fonction qui ajout le prenom lorsqu'on clique sur ajouter prenom
let g=0;// on a besoin de cette variable pour creer et remove l element l orsqu on clique une deuxieme fois 
function fct3()
{
   
    if(g==0)
    {

        //creation de input
    var x = document.createElement("INPUT");
    
    x.setAttribute("type","text");
    x.setAttribute("placeholder","Votre Prenom");
    x.setAttribute("id","exampleFormControlInput2");
    x.setAttribute("class","form-control");


    x.addEventListener('click', function() 
    {
        document.getElementById('span1').innerHTML="";
        document.getElementById('exampleFormControlInput2').value="";
         document.querySelector('truee').classList.remove('truee');
         document.querySelector('falsee').classList.remove('falee');
    }, false);

    document.getElementById("idbox").appendChild(x);
    
    //creation du button
   var y=document.createElement("button");
   y.setAttribute("type","button");
   y.setAttribute("class","btn btn-outline-success");
   y.setAttribute("id","btn3");
   y.innerHTML = "Entrer";
   
   y.addEventListener('click', function() 
   {
    var inp=document.getElementById("exampleFormControlInput2");
    if(inp.value.match(valid1))
    {
        inp.classList.add("truee");
        inp.classList.remove("falsee");
        document.getElementById('span1').innerHTML="Prenom valide";
        document.getElementById('span1').classList.add("spant");
        document.getElementById('span1').classList.remove("spanf");
    }
    else{ 
    inp.classList.add("falsee");
    inp.classList.remove("truee");
    document.getElementById('span1').innerHTML="Prenom invalide";
    document.getElementById('span1').classList.add("spanf");
    document.getElementById('span1').classList.remove("spant");
   }
}, false);

document.getElementById("idbox").appendChild(y);

    // initialiser la variable a 1
    g=1;

    }
    else{
        document.getElementById("exampleFormControlInput2").remove();
        document.getElementById("btn3").remove();

        g=0;
    }
}


