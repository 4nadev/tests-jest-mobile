import { render, screen } from '@testing-library/react-native';
import { Input } from '@components/Input';
import { shouldUseActivityState } from 'react-native-screens';

describe('Componet: Input', () => {
    it('Should be render without activity indicator', () => {
        render(<Input  />);
        const ActivityIndicator = screen.queryByTestId('activity-indicator');
        expect(ActivityIndicator).toBeNull();
    });
});
