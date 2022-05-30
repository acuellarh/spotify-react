import { render, screen } from '@testing-library/react';

// import your context; it will include the provider
import { ArtistsContext } from "../context/ArtistsContext";
import { Search } from './Search';

test('renders Search component without crashing', () => {
  const contextValue = { searchArtists: () => {} };
  const wrapper = ({ children }) => (
    <ArtistsContext.Provider value={contextValue}>
      {children}
    </ArtistsContext.Provider>
  );

  render(<Search />, { wrapper });

  const searchComponent = screen.getByPlaceholderText('Search');
  expect(searchComponent).toBeInTheDocument();
});

