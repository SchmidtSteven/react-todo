var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle the completed state', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
        completed: true
      };
      var res = reducers.showCompletedReducer(df(action.completed), df(action));

      expect(res).toEqual(!action.completed);
    });
  });

});
