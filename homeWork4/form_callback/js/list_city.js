$(function(){
    $.getJSON('js/city.json', function(data) {
        $.each(data, function(key, val) {
            $('#city').append('<option value="' + val + '">' + key + '</option>');
        });
    });
});