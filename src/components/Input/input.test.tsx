import { render, screen } from '@testing-library/react-native';
import { Input } from '@components/Input';
import { shouldUseActivityState } from 'react-native-screens';

describe('Componet: Input', () => {
	it('Should be render without activity indicator', () => {
	 render(<Input isLoading />);
	const ActivityIndicator = screen.getByTestId('activity-indicator');
    console.log(ActivityIndicator)
	});
});
