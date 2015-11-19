(() => {
  class ApiConstants {

    get schools() {
      return {
        create: '/api/schools',
        index: '/api/schools',
        show: function(id) {
          return `/schools/${id}`;
        },
      };
    }

    get students() {
      return {
        comments: {
          create: function(id) {
            return `/api/students/${id}/comments`;
          },
          index: function(id) {
            return `/api/students/${id}/comments`;
          },
        },
        create: '/api/students',
        index: function(page) {
          return `/api/students?page=${page}`;
        },
        show: function(id) {
          return `/api/students/${id}`;
        },
        update: function(id) {
          return `/api/students/${id}`;
        },
      };
    }

    get users() {
      return {
        create: '/api/users/signup',
        login: '/api/users/login',
        logout: '/api/users/logout',
        signout: '/api/users/signout',
      };
    }
  }
  this.ApiConstants = new ApiConstants();
})();