$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const proximaTarefa = $('<li></li>')
        $(`<p>${novaTarefa}</p>`).appendTo(proximaTarefa);

        $(proximaTarefa).appendTo('ul');
        $('#tarefa').val('')

        $(proximaTarefa).click(function() {
            $(proximaTarefa).css('text-decoration', 'line-through');
        })
    })
})