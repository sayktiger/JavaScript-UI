import './lib/lib';



$('button').on(`click`, function(){
    $(this).toggleClass(`active`);
});

$(`div`).setAtr(`data-btn`, `lalala`);

$(`div`).removeAtr(`data-btn`);

console.log($(`div`).eq(2).find(`.three`));


