import { ArrowRightIcon, Button, ButtonIcon } from '@gluestack-ui/themed';

export const ContinueButton = ({ onPress }: { onPress?: () => void }) => {
    return (
        <Button
            borderRadius='$full'
            style={{
                width: 64,
                height: 64,
            }}
            bg='#324A59'
            borderColor='#324A59'
            onPress={onPress}
        >
            <ButtonIcon size='xl' as={ArrowRightIcon} />
        </Button>
    );
};
