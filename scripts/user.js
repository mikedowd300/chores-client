const API_URL =  'http://localhost:3000'//getHostURL();

$(document).ready(function () {
  let id = parseQuery(window.location.search);

  $.get(`${API_URL}/user/${id}`, function(data) {
    console.log(data.name);
    $('.user-name').text(`${data.name}'s Chores`);
  });
});

function parseQuery(qstr) {
  return qstr.split('=')[1];
}

function getUserInfo(id) {
  return $.get(`${API_URL}/user/${id}`);
}

function getStickers(id) {
  $.get(`${API_URL}/user/${id}/chore`);
}

function addUserInfoToPage(user) {

}

function addStickers(stickers) {
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
