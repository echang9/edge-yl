(() => {
  class RoomsStore {

    constructor() {
      this.conference = {};
      this.conferences = [];
      this.rooms = [];
      this.bindListeners({
        handleStoreRooms: RoomsActions.STORE_ROOMS,
      });
    }

    handleStoreRooms(response) {
      this.rooms = response.rooms;
    }
  }
  this.RoomsStore = alt.createStore(RoomsStore);
})();