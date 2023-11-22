import { Input, InputIcon, InputSlot } from '@gluestack-ui/themed';
import { Dispatch, SetStateAction } from 'react';
import { TextInput } from 'react-native';

interface InputFormProps {
    icon: any;
    value: string;
    placeholder: string;
    secureTextEntry?: boolean;
    onChangeText: Dispatch<SetStateAction<string>>;
}

const InputForm = ({
    icon: Icon,
    value,
    placeholder,
    secureTextEntry = false,
    onChangeText,
}: InputFormProps) => {
    return (
        <Input
            style={{
                paddingBottom: 3.5,
                height: 25.5,
            }}
            variant='underlined'
            size='md'
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
        >
            <InputSlot
                style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRightWidth: 1,
                    paddingBottom: 5,
                    borderRightColor: '#AAA',
                }}
            >
                <InputIcon>
                    <Icon size={18} width={17} height={17} color='#001833' />
                </InputIcon>
            </InputSlot>
            <TextInput
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#C1C7D0'
                style={{
                    color: 'black',
                    fontSize: 12,
                    fontFamily: 'Poppins500',
                    paddingLeft: 20,
                }}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
            />
        </Input>
    );
};

export default InputForm;
