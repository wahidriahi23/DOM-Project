var tout =150;
$('.minus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (tout>0) { tout -= 50;}
    var tous = document.getElementById("Total");
    tous.innerHTML="Totale: "+tout +" TND";

    if (value > 1) {
      value = value - 1;
    } else {
      value = 0;
    }

    $input.val(value);

  });

  $('.plus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    tout += 50;
    var tous = document.getElementById("Total");
    tous.innerHTML="Totale: "+tout +" TND";

   

    if (value < 100) {
      value = value + 1;
    } else {
      value = 100;
    }

    $input.val(value);
  });

  $('.like-btn').on('click', function () {
    $(this).toggleClass('is-active');
  });



  document.getElementById("delete1").addEventListener("click",function(){

    var Ar1=document.querySelector("#t1");
       Ar1.remove(Ar1);

  }) 
   document.getElementById("delete2").addEventListener("click",function(){

    var Ar2=document.querySelector("#t2");
       Ar2.remove(Ar2);
  })
  document.getElementById("delete3").addEventListener("click",function(){

    var Ar3=document.querySelector("#t3");
       Ar3.remove(Ar3);
  })
