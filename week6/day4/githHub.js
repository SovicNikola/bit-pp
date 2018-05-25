$(document).ready(function () {


    var button = $('#button');
    button.on('click', function () {


        var dataInput = $('#inputs').val();
        var request = $.get('https://api.github.com/search/users?q=' + dataInput)  //.done(function (msg) { console.log(msg) });
        request.done(function (msg) {

            console.log(msg);
            for (i = 0; i < 11; i++) {
                var slika = msg.items[i].avatar_url;
                var ime = msg.items[i].login;

                var div = ('<div><img class="img" src="' + slika + '"> <span> ' + ime + ' </span></div>');
                $('body').append(div);
            }



        })

    })

})