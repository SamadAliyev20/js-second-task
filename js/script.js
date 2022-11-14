// Group Verifier
function Check(){
var input =document.getElementById('inp');
var value = input.value;
document.getElementById('Group').innerHTML=value;
if(value.length < 4 || value.length > 5)
{
    document.getElementById('Group').innerHTML='Min 4, maks 4 simvol olmalıdır.'   
}
else {
    if(!isNaN(value[0])) {
        document.getElementById('Group').innerHTML='Qrup Adı Hərflə Başlamalıdır.'
    }
    else {
        if(isNaN(value.slice(-3))){

 document.getElementById('Group').innerHTML='Qrup nömrəsi  min 3 rəqəm olmalıdır.Məs:(P144,DM100).'       
        }
        else
        {
          if(value[value.length -3] == 1)
           {
            document.getElementById('Group').innerHTML=value;
            document.getElementById('Group').style.color='yellow';             
          }
          else if (value[value.length -3] == 2){
            document.getElementById('Group').innerHTML=value;
            document.getElementById('Group').style.color='red';
          }
          else if (value[value.length -3] == 3){
            document.getElementById('Group').innerHTML=value;
            document.getElementById('Group').style.color='black';
          }
          else
          { 
            document.getElementById('Group').style.color='black';
            document.getElementById('Group').innerHTML='Mövcud deyil.'
          }
        }
    }
}
}
// Group Verifier
// Body Show
if(confirm('Sayta Keçid Etmək istəyirsiniz?') === false)
{
 alert('Uğursuz Yenidən Cəhd Edin.')
    document.body.style.display='none';
    location.reload();
}
else {
  alert('Uğurlu')
  document.body.style.display='block';    
}

// Age Identifier
var age = prompt('Neçə Yaşınız Var?')
if(age < 18)
{
    alert('Yaşınız 18-dən Kiçikdir.')
    document.body.style.display='none';
}
else{
    alert('Xoş Gəlmisiniz Qrupu Daxil edin.')
    document.body.style.display='block';
}
// Age Identifier

