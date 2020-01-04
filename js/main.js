/*global document, $*/

$(document).ready(function () {
    'use strict';

    // Start Build A Wish List From Input Value

    $('.add-wish').on('click', function () {
        var myInput = $(':input[type="text"].input').val();
        if(myInput != '') {
            $('<li>'+ myInput +' <i class="fas fa-times"></i></li>').appendTo('ul');
            $(':input[type="text"].input').val('')  
        }
    });

    // Start Delet Item Wish On Click

    $('.container ul').on('click', 'li i', function () {
        $(this).parent('li').remove()
    })

    // Start Find List Item Wish

    $('.container .wish-list input[type="text"].search').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('.container ul li').filter(function () {
            $(this).toggle($(this).text().toLowerCase().search(value) != -1);
        })
    })

})