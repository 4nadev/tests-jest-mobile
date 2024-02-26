import { render } from '@testing-library/react-native';
import { Input } from '@components/Input';
import { shouldUseActivityState } from 'react-native-screens';

describe('Componet: Input', () => {
	it('Should be render without activity indicator', () => {
		const { debug } = render(<Input />);
		debug();
	});
});
