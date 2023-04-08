import './lib/lib';



$('button').on(`click`, function(){
    $(this).toggleClass(`active`);
});

$(`div`).setAtr(`data-btn`, `lalala`);

$(`div`).removeAtr(`data-btn`);


