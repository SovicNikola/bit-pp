$(document).ready(function () {

    var button = $('#button');
    button.on('click', function () { // kada se klikne na dugme button radice neku f-ju...
        var dataInput = $('#inputs').val(); // iz inputa trazim unetu vrednost
        var request = $.get('https://api.github.com/search/users?q=' + dataInput); // vuce iz serach-a i hvata ono sto se unese u dataInput 

        request.done(function (msg) { // kada se unese pretraga da odradi dalje funkciju.
            console.log(msg);
            for (i = 0; i < 11; i++) { // izbacivacemo samo 10 rezultata
                var slika = msg.items[i].avatar_url; // ovo avatar_url smo nasli u api-ju
                var ime = msg.items[i].login;

                var div = ('<div><img class="img" src="' + slika + '"> <span> ' + ime + ' </span></div>');
                $('body').append(div);
            }


        })

    })

})