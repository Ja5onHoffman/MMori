var birthday = new Date();
var now = new Date();
var today = now.getTime();
var timeDiff = 0;


$(document).ready(function(){
  $('#addbutton').on('click', defineTable);
  $('#startover').on('click', beginAgain);
});


function addRow() {
  $('#daytable').append('<tr><td></td><td></td><td></td><td></td><td></td></tr>');
}

function beginAgain() {
  $('tr').remove();
  $('#startover').hide();
  $('#questions').show();
  $('#description').show();
  timeDiff = 0
}

function proceed() {
  $('#questions').hide();
  $('#description').hide();
  $('#startover').show();
}
             
function toggle() {
 $(this).toggleClass('active');
 }

function defineTable() {
  getDate();
  var rows = Number($('#yearsalive').val());
  var years = (timeDiff * 7 / 365);

  

  if (years > rows) {
  alert('If you lived ' + rows + ' years after your birthday, then you\'re already dead. RIP!');
  beginAgain();
  } else {
  proceed();
  createTable(rows);
  $('#daytable td:lt('+timeDiff+')').addClass('active');
  }
}

function createTable(rows) {
  var tbl = document.getElementById('daytable');
    for (var i = 0; i < rows; i++) {
      var row = document.createElement('tr');
        for (var j = 0; j < 52; j++) {
          var cell = document.createElement('td');
            row.appendChild(cell);
        }
        tbl.appendChild(row);
    }
}

function getDate() {
  var month = Number($('#month').val() - 1);
    birthday.setMonth(month);
  var day = Number($('#day').val());
    birthday.setDate(day);
  var year = Number($('#year').val());
    birthday.setFullYear(year);
    console.log(month);
    console.log(day);
    console.log(year);

  if (month === '' || month.length < 1 || month === 0) {
    alert('Please include a valid one or two digit month.');
    beginAgain();
  };

  if (day === '' || day.length < 1 || day === 0) {
    alert('Please include a valid one or two digit date.');
    beginAgain();
  };

  if ( year === '' || year.length < 4 || year === 0) {
    alert('Please include a valid four digit year.')
    beginAgain();
  };

  $('#month').val('');
  $('#day').val('');
  $('#year').val('');
  timeDiff += Math.floor((now - birthday) / 606860307.692);
}



