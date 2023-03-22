// =============== nav-color ================

$(window).scroll(function(){
let x = $(window).scrollTop()
let m = $('#services').offset().top

    if(x > m){

    $('.navbar').addClass("bg-primary")
    $('#btn-up').show()
    }else{
    $('.navbar').removeClass("bg-primary")
    $('#btn-up').hide()
    }
})




$('#btn-up').click(function(){
    $('body,html').animate({
        scrollTop:'0'
    },1000)
    
})


$('.nav-link').click(function(){
    let navLink= $(this).attr('href')
    let selected= $(navLink).offset().top
    console.log(selected);
    $('body,html').animate({
        scrollTop:selected
    },1000)
})


$('.opitions li').click(function(e){
let colored=$(this).css('backgroundColor')
$('p,h1').css({color:colored})
$(this).css('border','solid 1px white')
$('.opitions li').not(e.target).css('border','none')

})



$('#open-Nav').click(function(){
let  boxWidth = $('#container').width()
let position =$('.option').offset().left

                if(position == '0' ) {
                    $('.option').css({left : `-${boxWidth}` , Transition:'all 1s'})
                    
                    }
                    else{
                    $('.option').css({left :'0px' , Transition: 'all 1s'})
                    
                    }
                    
        })

$('.option img').click(function(){
            let clickedImg = $(this).attr('src')
            $('.home').css({ backgroundImage:`url(${clickedImg})`})
            console.log(clickedImg);
        })


    $(window).ready(function(){
        $('.loading').slideUp(3000,function(){
            $('body').css('overflow-y','scroll')
        })
    })



/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var typed = new Typed('.element', {
strings: [
    'These are the default values...',
    'You know what you should do?',
    'Use your own!',
    'Have a great day!'
],
    typeSpeed: 200,
    backSpeed: 20
});


$('button').click(function(){
  const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success me-3',
    cancelButton: 'btn btn-danger me-5'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    
    swalWithBootstrapButtons.fire(
      'hi Deleted!',
      'Your file has been deleted.',
      'success'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
})
}
)