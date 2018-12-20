$(document).ready(() => {
    let data = {
      cost: 9.99
    };

    // Получение количества участников события
    function getAttendeeCount() {
        return $('.attendee-list .row.attendee').length;
    }

    function addAttendee() {
        $('.attendee-list').append(
            $('template[data-template]').html()
        );

        syncRemoveButtons();
    }

    function removeAttendee() {
        $(event.target).closest('.attendee.row').remove();
            syncRemoveButtons();
    }

    function syncRemoveButtons() {
        if ( getAttendeeCount() === 1 ){
            $('.attendee-list .attendee .remove-attendee').first().hide();
        } else {
            $('.attendee-list .attendee .remove-attendee').show();
        }
    }

   function syncPurchaseButton() {
       $('#checkout-button span.amount').html(
           '$' + data.cost * getAttendeeCount()
       );
   }


   // Обработчики событий

    // Событие добавления нового участника
    $('.add-attendee').on('click', (event) => {
        event.preventDefault();
        addAttendee();

       $('#app').trigger('attendee:add');
    });


    $('#app').on('attendee:add', () => {
        syncPurchaseButton();
        syncRemoveButtons();

    });


    // Событие удаления участника

    $('#app').on('click', '.attendee .remove-attendee', (event) => {
        event.preventDefault();
        removeAttendee();
        syncPurchaseButton();

    });





        // Инициализация формы

    // Крепим цену входного билета

    $('#unit-price').html('$' + data.cost);

    addAttendee();
    syncPurchaseButton();


});