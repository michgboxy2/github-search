import React from 'react';
import {shallow, mount} from 'enzyme';
import Home from '../Home.js';
import SearchResult from '../SearchResult';
import Pagination from '../Paginate';
import moxios from 'moxios';

const {REACT_APP_API_URL} = process.env;

let request;
let stubData = {
    "total_count": 1,
    "incomplete_results": false,
    "items": [
        {
            "login": "michgboxy2",
            "id": 26463998,
            "node_id": "MDQ6VXNlcjI2NDYzOTk4",
            "avatar_url": "https://avatars1.githubusercontent.com/u/26463998?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/michgboxy2",
            "html_url": "https://github.com/michgboxy2",
            "followers_url": "https://api.github.com/users/michgboxy2/followers",
            "following_url": "https://api.github.com/users/michgboxy2/following{/other_user}",
            "gists_url": "https://api.github.com/users/michgboxy2/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/michgboxy2/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/michgboxy2/subscriptions",
            "organizations_url": "https://api.github.com/users/michgboxy2/orgs",
            "repos_url": "https://api.github.com/users/michgboxy2/repos",
            "events_url": "https://api.github.com/users/michgboxy2/events{/privacy}",
            "received_events_url": "https://api.github.com/users/michgboxy2/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1
        }
    ]
}

beforeEach(() => {
    jest.setTimeout(300000);
    moxios.install();
   
    moxios.stubRequest(`${REACT_APP_API_URL}/search?username=michgboxy2&page=1`, {
        status: 200,
        response: stubData
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can search for a user and display them', async (done) => {
    const wrapped = mount(<Home/>);
    wrapped.find('input').simulate("change", {
        target: {value: "michael"}
    });

    wrapped.update();

    wrapped.find('input').simulate('keypress', {key: 'Enter'});

    moxios.wait(async () => {
        wrapped.update();
        const wrapper = mount(<SearchResult SearchResult={stubData} usersPerPage={30} totalUsers={stubData.total_count} paginate={1}/>)
        
        expect(wrapper.find('li').length).toEqual(1);
        expect(wrapper.find(Pagination)).toHaveLength(1);

        done();
        wrapper.unmount();
        wrapped.unmount();
    });
})