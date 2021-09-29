$(document).ready(() => {
    //alert('The document is ready!');

    $("div.details").append(
        $('<button class="btn btn-dark pull-right updateButton">Update</button>').hide()
    );
    $("div.details").append(
        $('<input></input>', {
            class: 'input'
        }).hide()
    );

    $("div.details").eq(0).addClass("name");
    $("div.details").eq(1).addClass("surname");
    $("div.details").eq(2).addClass("email");
    $("div.details").eq(3).addClass("birthday");
    $("div.details button").addClass("edit");
    

    $("div.name button.edit").on('click', function(){
        $("div.name").children().hide();
        $("div.name button.updateButton").show();
        $("div.name input").show();
        $("div.name input").attr("value", $("div.name span").text());
    });

    $("div.name button.updateButton").on('click', function(){
        $("div.name").children().show();
        $("div.name button.updateButton").hide();
        $("div.name input").hide();
    });


    $("div.surname button.edit").on('click', function(){
        $("div.surname").children().hide();
        $("div.surname button.updateButton").show();
        $("div.surname input").show();
        $("div.surname input").attr("value", $("div.surname span").text());
    });

    $("div.surname button.updateButton").on('click', function(){
        $("div.surname").children().show();
        $("div.surname button.updateButton").hide();
        $("div.surname input").hide();
    });


    $("div.email button.edit").on('click', function(){
        $("div.email").children().hide();
        $("div.email button.updateButton").show();
        $("div.email input").show();
        $("div.email input").attr("value", $("div.email span").text());
    });

    $("div.email button.updateButton").on('click', function(){
        $("div.email").children().show();
        $("div.email button.updateButton").hide();
        $("div.email input").hide();
    });


    $("div.birthday button.edit").on('click', function(){
        $("div.birthday").children().hide();
        $("div.birthday button.updateButton").show();
        $("div.birthday input").show();
        $("div.birthday input").attr("value", $("div.birthday span").text());
    });

    $("div.birthday button.updateButton").on('click', function(){
        $("div.birthday").children().show();
        $("div.birthday button.updateButton").hide();
        $("div.birthday input").hide();
    });

});



