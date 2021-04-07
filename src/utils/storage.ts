import { AsyncStorage } from 'react-native';

export const storeData = async (name: string, value: any): Promise<void> => {
  try {
    await AsyncStorage.setItem(name, JSON.stringify(value));
  } catch (e) {
    console.log('error: ', e);
    alert(e.message);
  }
};

export const getStoredData = async (name: string): Promise<any> => {
  try {
    const storedString = await AsyncStorage.getItem(name);
    if (storedString) {
      return JSON.parse(storedString);
    }
  } catch (e) {
    console.log('error: ', e);
    alert(e.message);
  }
};
