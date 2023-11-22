import { globalStyles } from '../../assets/global-styles';
import { View, Text } from 'react-native';
import ProfileIcon from '../../components/icon/profile-icon';
import { MailIcon } from '@gluestack-ui/themed';
import { useUser } from '@clerk/clerk-expo';

const Profile = () => {
    const { user } = useUser();

    if (!user) return null;

    const firstName = user.firstName;
    const lastName = user.lastName;
    const emailAddresses = user.emailAddresses[0].emailAddress;

    return (
        <View
            style={{
                flex: 1,
                height: '100%',
                backgroundColor: 'white',
            }}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 33,
                    rowGap: 29,
                }}
            >
                <ProfileItem title='Fisrt Name' content={firstName} icon={ProfileIcon} />
                <ProfileItem title='Last name' content={lastName} icon={ProfileIcon} />
                <ProfileItem title='Email' content={emailAddresses} icon={MailIcon} />
            </View>
        </View>
    );
};

interface ProfileItemProps {
    title: string;
    content: string | null;
    icon: any;
}

const ProfileItem = ({ content, title, icon: Icon }: ProfileItemProps) => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
            }}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 16,
                }}
            >
                <View
                    style={{
                        width: 42,
                        height: 42,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F7F8FB',
                        borderRadius: 999,
                    }}
                >
                    <Icon />
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                    }}
                >
                    <Text style={globalStyles.subtitle}>{title}</Text>
                    <Text style={globalStyles.heading}>{content}</Text>
                </View>
            </View>
        </View>
    );
};

export default Profile;
