import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { SerieStructure } from '../../models/serieStructure';
import { SERIES } from '../../mocks/serie';
import { Serie } from './serie';

describe('Given Card component', () => {
  const deleteMock = jest.fn();
  const updateMock = jest.fn();
  const mockTask: SerieStructure = SERIES[0];
  let element: Serie;
  beforeEach(() => {
    document.body.innerHTML = '<ul></ul>';
    element = new Serie('ul', mockTask, deleteMock, updateMock);
  });
  test('It should be in the document', () => {
    expect(element).toBeInstanceOf(Serie);
  });
  test('It render the heading in the document', () => {
    const h4 = screen.getByRole('heading');
    expect(h4).toBeInTheDocument();
    const span = screen.getByText(mockTask.name);
    expect(span).toBeInTheDocument();
  });
  test('It should be used the button', () => {
    const button = screen.getByTitle('button');
    fireEvent.click(button);
    expect(deleteMock).toHaveBeenCalled();
  });
});
