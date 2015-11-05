'use strict';

class RequesterSingleton {

  post(route, params) {
    var request = new XMLHttpRequest();
    request.open('POST', route);
    request.onreadystatechange = function() {
      // TODO(Warren): Complete this callback function.
      console.log(request.responseText);
    };
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
    request.send(JSON.stringify(params));
  }

  delete(route) {
    var request = new XMLHttpRequest();
    request.open('DELETE', route);
    request.onreadystatechange = function() {
      // TODO(Warren): Complete this callback function.
      console.log(request.responseText);
    };
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
    request.send();
  }
}

var Requester = new RequesterSingleton();
