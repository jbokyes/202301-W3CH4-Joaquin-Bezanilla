import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Serie } from './serie';
import { SerieStructure } from '../../models/serieStructure';
import { SERIE } from '../../mocks/serie';

describe('Given Serie component', () => {
  test('It should be in the document', () => {
    const deleteMock = jest.fn();
    const updateMock = jest.fn();
    document.body.innerHTML = '<ul></ul>';
    const mockSerie: SerieStructure = SERIE[0];
    const element = new Serie('ul', mockSerie, deleteMock, updateMock);
    expect(element).toBeInstanceOf(Serie);

    const li = screen.getByRole('listitem');
    expect(li).toBeInTheDocument();
    const span = screen.getByText(mockSerie.name);
    expect(span).toBeInTheDocument();
    const check = screen.getByRole('checkbox');
    fireEvent.change(check);
    expect(updateMock).toHaveBeenCalled();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(deleteMock).toHaveBeenCalled();
  });
});
