import React from 'react';
import { render } from 'utils/test-utils';
import NotFoundPage from '../index';

test('render not found page', () => {
  const { getByText, container } = render(<NotFoundPage />);
  expect(getByText('404 Not Found')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="sc-bdfBwQ cCNBrc"
    >
      404 Not Found
    </div>
  `);
});
