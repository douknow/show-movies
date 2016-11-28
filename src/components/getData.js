import $ from 'jquery';

export default {
  getData(type, page, callback) {
    var baseurl = 'https://api.themoviedb.org/3/movie/';
    var key = '7660bd9171786c85737ab9cfbae5eec5';
    var url = baseurl + type + '?page=' + page + '&api_key=' + key;
    $.get(url, function (data) {
      callback(data);
    });
  }
}
