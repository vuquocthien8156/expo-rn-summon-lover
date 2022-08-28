import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'pink',
  },
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelInput: {
    fontSize: 14,
    color: '#333',
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    fontSize: 13,
  },
  buttonConfirm: {
    padding: 10,
    backgroundColor: '#2da8d7',
    borderRadius: 5,
  },
  textButtonConfirm: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },
  titleFunction: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  containerFunction: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  buttonFunction: {
    width: '48%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'red',
  },
  textButtonFunction: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#0000003b',
  },
  loadingView: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  whiteSpace: {
    height: 8,
  },
});
