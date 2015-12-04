(() => {
  class RouteConstants {

    get conferences() {
      return {
        index: '/conferences',
        show: function(id) {
          return `/conferences/${id}`;
        },
      };
    }

    get groups() {
      return {
        index: '/groups',
        show: function(id) {
          return `/groups/${id}`;
        },
      };
    }

    get pages() {
      return {
        login: '/login',
        signup: '/signup',
        profile: '/profile',
        mail: '/mail',
      };
    }

    get schools() {
      return {
        index: function(page) {
          if (page) {
            return `/schools?page=${page}`;
          } else {
            return '/schools';
          }
        },
        show: function(id) {
          return `/schools/${id}`;
        },
      };
    }

    get students() {
      return {
        index: function(page) {
          if (page) {
            return `/students?page=${page}`;
          } else {
            return '/students';
          }
        },
        show: function(id) {
          return `/students/${id}`;
        },
      };
    }

    get users() {
      return {
        index: function(page) {
          if (page) {
            return `/users?page=${page}`;
          } else {
            return '/users';
          }
        },
        show: function(id) {
          return `/users/${id}`;
        },
      };
    }
  }
  this.RouteConstants = new RouteConstants();
})();
