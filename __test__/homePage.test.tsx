import HomePage from "../src/pages/HomePage";
import {fireEvent, render, screen} from '@testing-library/react'
import React from "react";
import {Provider} from "react-redux";
import store from "../src/store/store";
import {act} from "react-dom/test-utils";
import {Post} from "../src/types/Post";
import {User} from "../src/types/User";
import {filters} from "../src/components/Filter";

const mockedPosts: Post[] = [
    {
        id: 1,
        userId: 1,
        title: "ABC",
        body: "Lorem ipsum dolor sit amet"
    },
    {
        id: 2,
        userId: 2,
        title: "DEF",
        body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
];

const mockedUsers: User[] = [
    {
        username: "Foo"
    },
    {
        username: "Bar"
    }
]

const mockComments = jest.fn();
mockComments.mockImplementation((arg) => {
    switch (arg) {
        case mockedPosts[0].id:
            return {
                body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                postId: mockedPosts[0].id,
                id: 1,
                replies: [],
                tags: []
            }
        case mockedPosts[1].id:
            return {
                body: "Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Lobortis feugiat vivamus at augue eget arcu dictum varius duis.",
                postId: mockedPosts[1].id,
                id: 2,
                replies: [],
                tags: []
            }
    }
})
jest.mock('../src/api/client', () => ({
    getAllPosts: (): Post[] => mockedPosts,
    getAllUsers: (): User[] => mockedUsers,
    getCommentsFromPost: mockComments
}));

test('Home page renders correctly', async () => {
    await act( async() => {
        render(
            <Provider store={store}>
                <HomePage/>
            </Provider>
        )
    });

    const firstPostTitle = await screen.queryByText(mockedPosts[0].title);
    const firstPostBody = await screen.queryByText(mockedPosts[0].body);

    const secondPostTitle = await screen.queryByText(mockedPosts[1].title);
    const secondPostBody = await screen.queryByText(mockedPosts[1].body);

    expect(firstPostTitle).toBeTruthy();
    expect(firstPostBody).toBeTruthy();
    expect(secondPostTitle).toBeTruthy();
    expect(secondPostBody).toBeTruthy();

    const postsFilters = await Promise.all(Object.values(filters)
        .map((filter) => screen.findByText(filter)));

    postsFilters.map(f => {
        expect(f).toBeTruthy();
    });
});

test('Filter works correctly', async () => {
    await act( async() => {
        render(
            <Provider store={store}>
                <HomePage/>
            </Provider>
        )
    });

    const filterInput = await screen.queryByPlaceholderText("Filter posts");
    const filterBtn = await screen.findByText(filters.USERNAME);

    act(() => {
        fireEvent.change(filterInput, {target: {value: mockedUsers[0].username}});
        fireEvent.click(filterBtn);
    });

    const firstPostTitle = await screen.queryByText(mockedPosts[0].title);
    const secondPostTitle = await screen.queryByText(mockedPosts[1].title);

    expect(firstPostTitle).toBeTruthy();
    expect(secondPostTitle).toBeFalsy();

})
