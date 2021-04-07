import {
  Button,
  Card,
  Divider,
  List,
  ListItem,
  Modal,
} from '@ui-kitten/components';
import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Navbar from '../../components/Navbar';
import T from '../../components/Transliteration';
import LocaleContext from '../../context/LocaleContext';
import KEYS from '../../locale/keys';
import { RootStackComponent } from '../../typings/routing';
import { useSettingsList } from './Model';
import { IItem } from './types';

const Settings: RootStackComponent<'Settings'> = () => {
  const [visible, setVisible] = React.useState(false);
  const [settingsList] = useSettingsList(setVisible);
  const { handleLanguageChange } = useContext(LocaleContext);

  const renderItem = ({ item }: { item: IItem }) => {
    return (
      <ListItem
        key={item.label}
        accessoryLeft={() => {
          return item.icon;
        }}
        title={item.label}
        onPress={item.onPress}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar title={<T name="SETTINGS_PAGE_TITLE" />} showActions={false} />
      <List
        alwaysBounceVertical={false}
        style={styles.container}
        data={settingsList}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
      <Modal
        style={{ width: '75%' }}
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => {
          return setVisible(false);
        }}
      >
        <Card disabled>
          <View style={styles.modalTitle}>
            <T name={KEYS.CHANGE_LANGUAGE_TEXT} style={styles.modalTitleText} />
          </View>
          <View style={styles.options}>
            <Button
              onPress={() => {
                setVisible(false);
                handleLanguageChange('en-SA');
              }}
            >
              <T name={KEYS.ENGLISH_LANGUAGE} />
            </Button>
            <Button
              onPress={() => {
                setVisible(false);
                handleLanguageChange('ar-SA');
              }}
            >
              <T name={KEYS.ARABIC_LANGUAGE} />
            </Button>
          </View>
        </Card>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalTitle: {
    margin: 32,
    marginBottom: 64,
  },
  modalTitleText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Settings;
