import React from 'react';
import { mount } from 'enzyme';
import Home from '../Home.js';
import SearchResult from '../SearchResult';


let wrapped;

beforeEach(() => {
    wrapped = mount(<Home/>)
});

afterEach(() => {
    wrapped.unmount();
  });

it('shows a show result component', () => {
    expect(wrapped.find(SearchResult)).toHaveLength(1);
    expect(wrapped.find("button").length).toEqual(2);
});

describe('Enter username in the input field', () => {
    beforeEach(() => {
        wrapped.find('input').simulate("change", {
            target: {value: "michgboxy"}
        });

        wrapped.update();

        wrapped.find('input').simulate('keypress', {key: 'Enter'});

    });

    it("has an input field that users can type in", () => {
        expect(wrapped.find("input").prop("value")).toEqual("michgboxy");
      });
    
});


