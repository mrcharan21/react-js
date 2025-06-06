// // $(document).ready(function() {
// //     alert("jQuery is ready to use!jQuery is loaded and ready");
   
// // })

// $(document).ready(function(){
//     // ID Selector
//     $('#demo').css("color", "blue");

//     // Class Selector
//     $('.highlight').css("background-color", "yellow");

//     //Tag Selector
//     $('p').css("font-size", "20px");

//     // Universal Selector
//     $("*").css("margin", "15px");

//     //Group Selector
//     $("h1, h2").css("border", '1px solid black');


//     $('li:first').css('color', 'red');
//     $('li:last').css('color','blue');
//     $('li:odd').css('background-color', '#f0f0f0');
//     $('li:eq(2)').css('font-weight', 'bold');
//     $('li:contains("Apple")').css('font-style', 'italic');
//     $('li:not(.favorite)').css('text-decoration', 'line-through');

//     $("#addBtn").click(function(){
//         let a = parseFloat($("#num1").val());
//         let b = parseFloat($("#num2").val());

//         if(!isNaN(a) && !isNaN(b)) {
//             $("#result").text("Result: " + (a + b));
//         }else{
//             $("#result").text("Please enter a valid numbers.");
//         }
//     });

//     //clear input and result
//     $("#clearBtn").click(function(){
//         $("#num1").val('');
//         $("#num2").val('');
//         $("#result").text('');
//     });
// });