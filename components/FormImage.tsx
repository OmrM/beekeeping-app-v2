import { View, Image, TouchableOpacity } from "react-native"
//import { TouchableOpacity } from "react-native-gesture-handler"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface FormImageProps {
    imageURI: string;
    onPress: () => void;
}

const FormImage = ({ imageURI, onPress }: FormImageProps) => {

    return (
        <View
            style={{
                alignSelf: 'center',
                position: 'relative',
                width: 200,
                height: 200,
                margin: 20,
                borderRadius: 5,
                overflow: 'hidden'
            }}>
            <Image
                source={{ uri: imageURI }}
                style={{ width: '100%', height: '100%' }}
            />
            <TouchableOpacity onPress={onPress}
                style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    padding: 8
                }}
            >
                <MaterialCommunityIcons name="close-octagon" color="#FF0000" size={24}/>
            </TouchableOpacity>

        </View>
    );
};


export default FormImage;