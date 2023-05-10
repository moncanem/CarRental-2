$(document).ready(function() {
  
    let calIn = $( "#pick_up" ).datepicker({ 
        disabled: false, 
        firstDay: 0, 
        altField: "#us-pick_up", 
        altFormat: 'mm/dd/yy', 
        minDate:0, 
        onSelect: checkCalendarDates, 
        dateFormat: 'mm/dd/yy'
    });
    calIn.datepicker('setDate', new Date());

    let calOut = $( "#return" ).datepicker({ 
        disabled: false, 
        firstDay: 0, 
        altField: "#us-return", 
        altFormat: 'mm/dd/yy', 
        minDate:3, 
        onSelect: checkCalendarDates, 
        dateFormat: 'mm/dd/yy'
    });
    calOut.datepicker('setDate', new Date());

    function checkCalendarDates(date, datePicker) {
        let StartFrom = calIn.datepicker("getDate");
        let ReturnDate = calOut.datepicker("getDate");

        if (StartFrom >= ReturnDate && calIn.attr("id") === datePicker.id)
        calOut.datepicker('setDate', new Date( StartFrom.getTime() + (24 * 60 * 60 * 1000) )
        );
    
        if (ReturnDate <= StartFrom && calOut.attr("id") === datePicker.id)
        calIn.datepicker('setDate', new Date( ReturnDate.getTime() - (24 * 60 * 60 * 1000) )
        );
    }

    // $("#adults").spinner({
    //     max: 6,
    //     min: 1 
    // });

    // $("#children").spinner({
    //     max: 4,
    //     min: 0 
    // });

    $("#booking-form").submit(function(e) {
        e.preventDefault(); // Prevent form from submitting
        
        let StartFrom = $("#us-pick_up").val();
        let ReturnDate = $("#us-return").val();
        // let adults = $("#adults").val();
        // let children = $("#children").val();

        // Replace with actual booking URL
        // const bookingURL = `https://avaiabledatescheck.html/book?StartFrom=${StartFrom}&ReturnDate=${ReturnDate}&adults=${adults}&children=${children}&pets=${$("input[name='pets']:checked").val()}`;
        // window.open(bookingURL, '_blank');

        const bookingURL = `https://avaiabledatescheck.html/book?StartFrom=${StartFrom}&ReturnDate=${ReturnDate}.val()}`;
        window.open(bookingURL, '_blank');
    });
});

function showImg(event) {
    event.preventDefault();
    $(".images").css("display", "flex")
};

$("form button").click(showImg);