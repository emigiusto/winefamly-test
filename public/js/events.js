//Amount events
$('.btn-minuse').on('click', function(){    
    if ($(this).parent().siblings('input').val()>0) {
        $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) - 1)
    }
})
$('.btn-pluss').on('click', function(){            
    $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1)
})

