import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  boxDark: {
    backgroundColor: '#222',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 12,
  },
  titleDark: {
    fontSize: 20,
    fontWeight: '700',
    color: '#eee',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#444',
  },
  descriptionDark: {
    fontSize: 16,
    lineHeight: 22,
    color: '#ccc',
  },

  image: {
    width: '100%',
    height: 220,
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 12,
    resizeMode: 'cover',
  },

  ods: {
    width: '100%',
    height: 300,
    marginBottom: 15,
    borderRadius: 12,
    resizeMode: 'cover',
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  listIcon: {
    marginRight: 14,
    marginTop: 4,
  },
  listTextContainer: {
    flex: 1,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  listTitleDark: {
    fontSize: 18,
    fontWeight: '600',
    color: '#eee',
    marginBottom: 4,
  },
  listDescription: {
    fontSize: 15,
    color: '#555',
    lineHeight: 20,
  },
  listDescriptionDark: {
    fontSize: 15,
    color: '#bbb',
    lineHeight: 20,
  },
});

export default styles;
