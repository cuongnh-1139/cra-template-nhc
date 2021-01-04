import React from 'react';
import { render } from 'utils/test-utils';
import NotFoundPage from '../index';

test('render not found page', () => {
  const { getByText, container } = render(<NotFoundPage />);
  expect(getByText('404 Not Found')).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});
