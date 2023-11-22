import { Text, View } from 'react-native';
import { globalStyles } from '../assets/global-styles';

interface HeadingProps {
    title: string;
    subtitle?: string;
}

const Heading = ({ title, subtitle }: HeadingProps) => {
    return (
        <View>
            <Text style={globalStyles.title}>{title}</Text>
            <Text style={globalStyles.subtitle}>{subtitle}</Text>
        </View>
    );
};

export default Heading;
