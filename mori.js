var birthday = new Date();
var now = new Date();
var today = now.getTime();
var timeDiff = 0;


$(document).ready(function(){
  $('#send').on('click', getDate);
  $('#addbutton').on('click', defineTable);
  $('#addbutton').on('click', removeQ);
  $('#addbutton').on('click', startOver);
  $('#startover').on('click', beginAgain);
});


function addRow() {
  $('#daytable').append('<tr><td></td><td></td><td></td><td></td><td></td></tr>');
}

function removeQ () {
  $('#questions').hide();
}

function beginAgain() {
  $('tr').remove();
  $('#startover').hide();
  $('#questions').show();
  timeDiff = 0
}

function startOver () {
  $('#startover').show();
}
             
function toggle() {
 $(this).toggleClass('active');
 }

function defineTable() {
  getDate();
  var rows = Number($('#yearsalive').val());
  var years = (timeDiff * 7 / 365);
  console.log(years);
  console.log(rows);
  if (years > rows) {
    alert('You\'re already dead? RIP!!')
    beginAgain();
  } else {
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
  $('#month').val('');
  $('#day').val('');
  $('#year').val('');
  timeDiff += Math.floor((now - birthday) / 606860307.692);
}



