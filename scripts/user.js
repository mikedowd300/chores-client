const API_URL =  'http://localhost:3000'//getHostURL();

$(document).ready(function () {
  let id = parseQuery(window.location.search);

  $.get(`${API_URL}/user/${id}`, function(data) {
    console.log(data.name);
    $('.user-name').text(`${data.name}'s Chores`);
  })
  .then(getChores(id));
});

function parseQuery(qstr) {
  return qstr.split('=')[1];
}

function getUserInfo(id) {
  return $.get(`${API_URL}/user/${id}`);
}

function getChores(id) {
  $.get(`${API_URL}/user/${id}/chore`, function(data){
    console.log(data[0]);
      data.forEach(function(obj){
        $(`<p class="chore-description">${obj.description}</p>`).appendTo('.chores');
      })
  });
}

function addUserInfoToPage(user) {

}

function addChore(chores) {

}

function weSuck() {
}

function getHostURL() {
  if (window.location.host.indexOf('localhost') != -1) {
    return 'http://localhost:3000';
  } else {
    return 'https://chores-mania.herokuapp.com/';
  }
}
