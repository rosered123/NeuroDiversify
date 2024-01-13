// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'OpenDyslexic'
  },

  searchBar: {
    marginTop: 20,
    height: 40,
    width: '100%',
    backgroundColor: '#67A4DE',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  
  list: {
    marginTop: 16,
    marginBottom: 50
  },
  postContainer: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 2,
    width: '100%', // Set the width to 100% of the screen
    padding: 16,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'OpenDyslexic'
  },
  postLink: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 8,
    textDecorationLine: 'underline',
    color: 'blue',
  },
    postBody: {
    fontSize: 14,
    lineHeight: 20, // Set the desired line height for the text
    maxHeight:  (isMaximized) => (isMaximized ? '100%' : 80),
    overflow: 'hidden',// Set the maximum height for the text container
    fontFamily: 'OpenDyslexic'
  },


  bottomRow: {
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'space-between'
  },

  bottomRowContainer: {
    backgroundColor: '#67A4DE',
    marginTop: 30,
    right: 0,
    left: 0,
    bottom: 0,
    position: 'fixed'
  },

  topRow: {
    flexDirection: 'row',
  },

  write: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 60,
    fontFamily: 'OpenDyslexic'
  },

  subHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    fontFamily: 'OpenDyslexic'
  },

  write2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 60,
    fontFamily: 'OpenDyslexic'
  },

  write3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 70,
    fontFamily: 'OpenDyslexic'
  },

  delete: {
    color: '#FF0000',
  },

  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },

  

});
