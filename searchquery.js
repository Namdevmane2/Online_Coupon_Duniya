$(document).ready(function(){
$('#search').keyup(function(){
    $('#result').html('');
    var searchfield = $('#search').val();
    var expression = new RegExp(searchfield,"i");
    $.getJSON('data.json',function(data){
        $.each(data,function(key,value){
            if(value.name.search(expression) != -1){
                $('#result').append('<li class ="list-group-item'>value.name);
            }
        });
    })
});
}
