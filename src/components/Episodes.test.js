import React from 'react';
import Episodes from './Episodes';
import { render } from '@testing-library/react';

test('Renders episodes', () => {
  const mockData = {
    id: '1',
    image: { medium: 'medium_image' },
    name: 'name',
    season: 3,
    number: 2,
    summary: '<p>Summary</p>',
    runtime: 20,
  };

  const { rerender, getByText, queryAllByText } = render(
    <Episodes episodes={[]} />
  );
  expect(queryAllByText(/season/i)).toHaveLength(0);
  rerender(<Episodes episodes={[mockData]} />);
  expect(queryAllByText(/name/i)).toHaveLength(1);
});
