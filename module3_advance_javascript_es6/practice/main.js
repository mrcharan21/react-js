function loadEmployee() {
    var emp = $("#company_list").val();

    if (emp === '1') {
        $('#employee_list').load('Tops.html');
    } else if (emp === '2') {
        $('#employee_list').load('HCL.html');
    } else if( emp === '3') {
        $('#employee_list').load('Google.html');
    }
    else{
        $('#employee_list').html('<p>Please select a valid company.</p>');
    }
}
