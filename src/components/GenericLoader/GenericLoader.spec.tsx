import { render } from '../../utils/testUtils';
import { Primary } from './GenericLoader.stories';

describe('ViewLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Primary />);
    expect(baseElement).toBeTruthy();
  });
});
