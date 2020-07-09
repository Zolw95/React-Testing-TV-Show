import React from 'react';
import {
  render,
  waitFor,
  getByRole,
  findByDisplayValue,
  findByRole,
  findByPlaceholderText,
} from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import userEvent from '@testing-library/user-event';
import App from './App';

jest.mock('./api/fetchShow');

test('App fetches and renders show data', async () => {
  mockFetchShow.mockResolvedValueOnce(mockData);
  const { queryAllByText, getByRole, findByPlaceholderText, rerender } = render(
    <App />
  );

  // // Find the Select a season Dropdown
  // const dropdown = getByRole('Dropdown', { name: /Select a season/i });

  // // Click on the dropdown
  // userEvent.click(dropdown);
  // await findByPlaceholderText(/option/i);

  expect(queryAllByText(/fetching data/i)).toHaveLength(1);
  await waitFor(() => {
    expect(queryAllByText(/summary/i)).toHaveLength(1);
  });
});

// mock data
const mockData = {
  image: { original: 'original' },
  name: 'name',
  summary: '<p>summary</p>',
  _embedded: {
    episodes: [
      {
        id: '1',
        image: { medium: 'medium_image' },
        name: 'name',
        season: 3,
        number: 2,
        summary: '<p>Summary</p>',
        runtime: 20,
      },
    ],
  },
};

// test('App renders, user clicks on dropdown', async () => {
//   // Render app
//   const { findByDisplayValue, getAllByTestId, getByRole, findByText } = render(
//     <App />
//   );

//   // Find the Select a season Dropdown
//   const dropdown = getByRole('Dropdown', { name: /Select a season/i });

//   // Click on the dropdown
//   userEvent.click(dropdown);
//   await findByRole(/option/i);
// });

// import React from 'react';
// import App from './App';
// import {
//   render,
//   fireEvent,
//   findByText,
//   getAllByTestId,
//   waitFor,
//   getByPlaceholderText,
// } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { fetchShow as mockFetchShow } from './api/fetchShow';
// import Episodes from './components/Episodes';

// jest.mock('./api/fetchShow');

// test('App fetches episode and renders it', async () => {
//   // Render app - should show Dropdown
//   mockFetchShow.mockResolvedValueOnce(mockData);
//   const {
//     getAllByTestId,
//     getByRole,
//     findByText,
//     getByPlaceholderText,
//     queryAllByText,
//     rerender,
//   } = render(<App />);

//   // * "fetching" message is rendered
//   // * API call is initiated
//   // for your project, use userEvent from "@testing-library/user-event"

//   //   test('click', async () => {
//   //     const { getByRole } = render(<Episodes />);

//   //     await userEvent.type(getByRole('textbox'), 'Hello, World!');
//   //     expect(getByRole('textbox')).toHaveAttribute('value', 'Hello, World!');
//   //   });

//   const dropdown = await findByText(/select a season/i); // this would break test
//   userEvent.click(dropdown);

//   const season1 = await findByText(/season 1/i);
//   await findByText(/fetching data/i);

//   userEvent.click(season1);

//   await waitFor(() => {
//     expect(getAllByTestId('episodes')).toHaveLength(1);
//   });
// });

// //   // Component waits for API, then renders data that is returned
// //   // use the waitFor function to wait for the API call to resolve
// //   await waitFor(() => {
// //     expect(getAllByTestId('mission')).toHaveLength(3);
// //   });
// // });

// // // mock data
// const mockData = {
//   image: { original: 'original' },
//   name: 'name',
//   summary: '<p>summary</p>',
//   _embedded: {
//     episodes: [
//       {
//         id: '1',
//         image: { medium: 'medium_image' },
//         name: 'name',
//         season: 3,
//         number: 2,
//         summary: '<p>Summary</p>',
//         runtime: 20,
//       },
//     ],
//   },
// };
