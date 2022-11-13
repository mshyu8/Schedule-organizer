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

