var today = dayjs();
$('#currentDay').text(today.format('MMMM D, YYYY'));

for (let index = 9; index <= 17; index++) {
    if($(`#hour-${index}`).attr('data-time') > today.hour()) {
        $(`#hour-${index}`).addClass('future');
    } else if($(`#hour-${index}`).attr('data-time') < today.hour()) {
        $(`#hour-${index}`).addClass('past');
    } else {
        $(`#hour-${index}`).addClass('present');
    }
};

for (let index = 9; index <= 17; index++) {
    $(`#btn-${index}`).on('click', function() {
        localStorage.setItem(`text-${index}`, $(`#text-${index}`).val());
    })
};

function displayStorage() {
    for (let index = 9; index <= 17; index++) {
        $(`#text-${index}`).val(localStorage.getItem(`text-${index}`))
    }
};

displayStorage();