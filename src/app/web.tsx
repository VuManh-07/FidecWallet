import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

const ID_APP = { Ios: '', Android: '' };

const WebLandingPage = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 600;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/logo_name.png')}
          style={styles.logoName}
        />
      </View>

      {/* Đường kẻ ngăn cách */}
      <View style={styles.separator} />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.title}>Welcome to Fidec Wallet</Text>
          <Text style={styles.heroTitle}>Your Keys, Your Crypto</Text>
          <Text style={styles.heroSubtitle}>
            Securely store, send & receive cryptocurrencies, NFTs & more.
          </Text>
          <TouchableOpacity
            style={styles.downloadButton}
            onPress={() => {
              console.log('Download now');
            }}
          >
            <Text style={styles.downloadButtonText}>Download Now</Text>
          </TouchableOpacity>
        </View>

        {/* Download Cards */}
        <View
          style={
            isLargeScreen ? styles.downloadSection : styles.downloadSectionSmall
          }
        >
          {/* iOS Download */}
          <TouchableOpacity
            style={styles.downloadCard}
            onPress={() =>
              Linking.openURL(`https://apps.apple.com/app/${ID_APP.Ios}`)
            }
          >
            <Image
              source={require('../assets/logo_appstore.png')}
              style={styles.storeLogo}
            />
            <Text style={styles.cardTitle}>Download for IOS</Text>
            <Text style={styles.cardText}>
              Get the wallet mobile app from the App Store.
            </Text>
          </TouchableOpacity>

          {/* Android Download */}
          <TouchableOpacity
            style={styles.downloadCard}
            onPress={() =>
              Linking.openURL(
                `https://play.google.com/store/apps/details?id=${ID_APP.Android}`
              )
            }
          >
            <Image
              source={require('../assets/logo_playstore.png')}
              style={styles.storeLogo}
            />
            <Text style={styles.cardTitle}>Download for ANDROID</Text>
            <Text style={styles.cardText}>
              Get the wallet mobile app from Google Play.
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    width: '100%',
    backgroundColor: '#000000',
    padding: 10,
    paddingHorizontal: 20,
  },
  logoName: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 40,
  },
  heroSection: {
    width: '96%',
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#d8b03c',
    paddingVertical: 40,
    borderRadius: 30,
    borderWidth: 1,
    borderBlockColor: '1px solid #ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: 'semibold',
    color: '#ffffff',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    margin: 8,
  },
  downloadButton: {
    marginTop: 20,
    backgroundColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    shadowColor: '#FFD700',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  downloadButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  downloadSection: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  downloadSectionSmall: {
    marginTop: 20,
  },
  downloadCard: {
    margin: 10,
    width: 280,
    height: 200,
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 10,
    shadowColor: '#FFD700',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  downloadCardHover: {
    backgroundColor: '#222222',
  },
  storeLogo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFD700',
  },
  cardText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#cccccc',
    marginTop: 5,
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#dddddd', // Màu xám nhẹ
    marginVertical: 5,
  },
});

export default WebLandingPage;
