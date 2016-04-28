(() => {
  class RouteConstants {

    get conferences() {
      return {
        index: (page=1) => `/conferences?page=${page}`,
        show: (id) => `/conferences/${id}`,
      };
    }

    get drafts() {
      return {
        show: (id) => `/drafts/${id}`,
      };
    }

    get forms() {
      return {
        preview: (target, id) => `/forms/${target}/${id}/preview`,
        school: (page, id) => `/forms/school/${id}?page=${page}`,
        start: '/forms/school',
        student: (page, id) => `/forms/student/${id}?page=${page}`,
        success: (target, id) => `/forms/${target}/${id}/success`,
      };
    }

    get groups() {
      return {
        show: (id) => `/groups/${id}`,
      };
    }

    get pages() {
      return {
        defaultCheckIn: '/check_in',
        checkIn: (conference_id) => `/check_in/${conference_id}`,
        feedback: '/feedback',
        forgotPassword: '/forgot_password',
        import: '/import',
        login: '/login',
        resetPassword: '/reset',
        signup: '/signup',
        profile: '/profile',
      };
    }

    get prospects() {
      return {
        index: (page=1) => `/prospects?page=${page}`,
        show: (id) => `/prospects/${id}`,
      };
    }

    get rooms() {
      return {
        show: (id) => `/rooms/${id}`,
      };
    }

    get schools() {
      return {
        index: (page=1) => `/schools?page=${page}`,
        show: (id) => `/schools/${id}`,
      };
    }

    get student() {
      return {
        submission: (id) => `/students/${id}/submission`,
      };
    }

    get students() {
      return {
        index: (conferenceId, page, query={}) => {
          if (conferenceId === undefined) {
            return '/students';
          } else {
            var route = `/students?conference_id=${conferenceId}&page=${page}`;
            Object.keys(query).map((key) => {
              if (key !== 'conference_id') {
                route = `${route}&${key}=${query[key]}`
              }
            });
            return route;
          }
        },
        show: (id) => `/students/${id}`,
      };
    }

    get threads() {
      return {
        index: (page=1, sent=false) => `/threads?page=${page}&sent=${sent}`,
        show: (id) => `/threads/${id}`,
      };
    }

    get users() {
      return {
        index: (page=1) => `/users?page=${page}`,
        show: (id) => `/users/${id}`,
      };
    }

    get volunteers() {
      return {
        index: (page=1) => `/volunteers?page=${page}`,
        show: (id) => `/volunteers/${id}`,
      };
    }
  }
  this.RouteConstants = new RouteConstants();
})();
