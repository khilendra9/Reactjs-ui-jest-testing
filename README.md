# React Jest Unit Testing Setup

This project uses **Jest** and **React Testing Library** to write unit tests for React components and verify their functionality.

## Getting Started

Follow these steps to set up and run unit tests in your React project.

### 1. Install Dependencies

First, ensure that you have Jest and React Testing Library installed. If you created your app using `create-react-app`, Jest is already included, but if you don’t have it, run the following command:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```
Jest is the testing framework, @testing-library/react helps with rendering React components in a test environment, and @testing-library/jest-dom adds useful DOM matchers for assertions.

### 2. Create Test Files

React Testing Library uses a test file naming convention of `ComponentName.test.js` or `ComponentName.spec.js`. You’ll typically place these files inside the __tests__ folder or next to the component file.

For example, if you have a Navbar component, create a `Navbar.test.js` file.

#### Example test structure:

src/<br/> 
├── components/ <br/>
│ ├── tests/ <br/>
│ │ ├── Navbar.test.js <br/>
│ │ ├── Sidebar.test.js <br/>
│ │ └── Dashboard.test.js <br/>
│ ├── Navbar.js <br/>
│ ├── Sidebar.js <br/>
│ └── Dashboard.js <br/>
├── pages/ <br/>
│ ├── tests/ <br/>
│ │ ├── Home.test.js <br/>
│ │ └── About.test.js <br/>
│ ├── Home.js <br/>
│ └── About.js <br/>
└── App.js


### 3. Writing Unit Tests
Each test should check the behavior of the component and ensure that it's working as expected.

**Example:** `Navbar.test.js`

```bash
// src/components/__tests__/Navbar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

test('renders the Navbar with the correct title', () => {
  render(<Navbar />);
  expect(screen.getByText(/My Sample UI/i)).toBeInTheDocument();
});

```
This test renders the Navbar component and checks that the title **"My Sample UI"** is present.


**Example**: `Sidebar.test.js`
```bash
// src/components/__tests__/Sidebar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../Sidebar';

test('renders Sidebar with navigation links', () => {
  render(
    <Router>
      <Sidebar />
    </Router>
  );

  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});

```

This test renders the `Sidebar` inside a `Router` to test navigation links.

### 4. Write Tests for `App.js`

Since `App.js` contains routing and multiple components, we need to test if the major components (`Navbar, Sidebar, Home, Dashboard, About`) render properly when navigating.


**Example**: `App.test.js`

``` bash
// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Navbar and Sidebar', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/My Sample UI/i)).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});

test('renders Home page by default', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Welcome to the Sample UI/i)).toBeInTheDocument();
});

test('navigates to the Dashboard page', () => {
  render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
});

test('navigates to the About page', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/About Us/i)).toBeInTheDocument();
});

```

This test ensures that the `Navbar` and `Sidebar` are rendered, checks if the `Home` page is the default, and verifies navigation to `Dashboard` and `About` pages.

### 5. Running the Tests

You can run the Jest tests using the following command:

```bash
npm test
```

This will start Jest in watch mode, meaning it will automatically rerun the tests when files are changed.

Alternatively, you can run Jest in a one-time test run:

```BASH
npm test -- --coverage
```

This command will run the tests and show a coverage report to see which parts of your code are being tested.

### 6. Code Coverage

To generate a code coverage report, add the --coverage flag when running tests. This will give you a detailed report of the code coverage for your project.

```bash
npm test -- --coverage
```

The coverage report will show you how much of your code is being covered by tests. Files with low coverage might indicate parts of the app that require more tests.

### 7. Using jest-dom Matchers
When writing tests, you can use the extra matchers provided by `@testing-library/jest-dom` to make your assertions more readable and easier to use.

For example:

```bash
expect(screen.getByText(/Home/i)).toBeInTheDocument();  // Checks if the element is in the DOM
expect(screen.getByRole('button')).toBeEnabled();       // Checks if a button is enabled

```

### 8. Mocking Components and Functions

If you need to mock certain components or functions for your tests, you can use `jest.mock()`:

```bash
jest.mock('../components/Sidebar', () => () => <div>Mock Sidebar</div>);

```

This will replace the `Sidebar` component with a mocked version for your tests.
## Conclusion
With these steps, you can successfully set up and run Jest unit tests for your React components. Writing tests will help ensure that your application works correctly and prevent regressions as you make changes.
